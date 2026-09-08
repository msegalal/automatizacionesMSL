import test from "node:test";
import assert from "node:assert/strict";
import {
  readConsent,
  writeConsent,
  clearConsent,
  disableAnalytics,
  enableAnalytics,
  subscribeToConsent,
} from "../src/lib/consent.ts";

test("accept, deny and reset synchronize subscribers and immediately disable GA", () => {
  const values = new Map();
  const removals = [];
  global.window = {
    location: { hostname: "www.example.com" },
    localStorage: {
      getItem: (key) => values.get(key) ?? null,
      setItem: (key, value) => values.set(key, value),
      removeItem: (key) => values.delete(key),
    },
    addEventListener() {},
    removeEventListener() {},
  };
  global.document = {
    get cookie() {
      return "_ga=123; _ga_TEST=456; necessary=yes";
    },
    set cookie(value) {
      removals.push(value);
    },
  };
  process.env.NEXT_PUBLIC_GA_ID = "G-TEST";
  let changes = 0;
  const unsubscribe = subscribeToConsent(() => changes++);
  writeConsent("granted");
  enableAnalytics("G-TEST");
  assert.equal(readConsent(), "granted");
  assert.equal(window["ga-disable-G-TEST"], false);
  writeConsent("denied");
  assert.equal(window["ga-disable-G-TEST"], true);
  assert.equal(readConsent(), "denied");
  clearConsent();
  assert.equal(readConsent(), null);
  assert.equal(changes, 3);
  assert.ok(removals.some((value) => value.includes("domain=example.com")));
  assert.ok(removals.every((value) => !value.startsWith("necessary=")));
  unsubscribe();
});

test("a choice still works for this visit when local storage is blocked", () => {
  Object.defineProperty(window, "localStorage", {
    configurable: true,
    get() {
      throw Error("blocked");
    },
  });
  writeConsent("denied");
  assert.equal(readConsent(), "denied");
  writeConsent("granted");
  assert.equal(readConsent(), "granted");
  clearConsent();
  assert.equal(readConsent(), null);
  disableAnalytics("G-TEST");
  assert.equal(window["ga-disable-G-TEST"], true);
});
