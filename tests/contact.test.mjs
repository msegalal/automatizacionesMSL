import test from "node:test";
import assert from "node:assert/strict";
import { contactSchema, contactOptions } from "../src/lib/contact.ts";
import { deliverContact } from "../src/lib/contact-delivery.ts";

const lead = {
  nombre: "Agente de prueba",
  empresa: "Agencia de prueba",
  email: "agent@example.com",
  interes: "entrada",
  mensaje: "Queremos ordenar las solicitudes de nuestra agencia.",
  consentimiento: true,
};
const options = {
  recipient: "inbox@example.com",
  from: "Web <web@example.com>",
  interestLabel: "Entrada de solicitudes",
};

test("all UI choices are accepted; missing consent, blank names and excessive messages are rejected", () => {
  for (const option of contactOptions)
    assert.equal(
      contactSchema.safeParse({ ...lead, interes: option.value }).success,
      true,
    );
  for (const invalid of [
    { consentimiento: false },
    { nombre: "   " },
    { mensaje: "x".repeat(5001) },
    { interes: "old_enum" },
  ]) {
    assert.equal(
      contactSchema.safeParse({ ...lead, ...invalid }).success,
      false,
    );
  }
});

test("accepted delivery uses configured sender, recipient, replyTo and plain text", async () => {
  let received;
  const result = await deliverContact(lead, {
    ...options,
    send: async (mail) => {
      received = mail;
      return { data: { id: "test-id" }, error: null };
    },
  });
  assert.deepEqual(result, { success: true, delivery: "resend" });
  assert.equal(received.from, options.from);
  assert.equal(received.to, options.recipient);
  assert.equal(received.replyTo, lead.email);
  assert.ok(received.text.includes(lead.mensaje));
});

test("missing sender/key and Resend test sender cannot pretend to deliver", async () => {
  for (const config of [
    { from: undefined, send: async () => assert.fail("must not send") },
    { send: undefined },
    {
      from: "Web <onboarding@resend.dev>",
      send: async () => assert.fail("must not send"),
    },
  ]) {
    const result = await deliverContact(lead, { ...options, ...config });
    assert.equal(result.success, false);
    assert.equal(result.delivery, "mailto");
    assert.ok(result.summary.includes(lead.mensaje));
    assert.ok(decodeURIComponent(result.mailtoUrl).includes(lead.email));
  }
});

test("provider rejection, missing acceptance id and network errors preserve a recoverable fallback", async () => {
  for (const send of [
    async () => ({ error: { code: 403 } }),
    async () => ({ data: null, error: null }),
    async () => {
      throw Error("network");
    },
  ]) {
    const result = await deliverContact(lead, { ...options, send });
    assert.equal(result.success, false);
    assert.equal(result.delivery, "mailto");
  }
});
