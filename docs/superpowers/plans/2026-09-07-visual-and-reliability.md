# Visual polish and contact reliability Implementation Plan

> **For agentic workers:** Execute task-by-task in this session; review the plan independently before implementation. Steps use checkbox syntax for tracking.

**Goal:** Make the existing website more attractive while fixing the audited contact, consent and documentation defects.

**Architecture:** Retain the Next.js routes, current content structure, real screenshots, fonts and brand constraints. Share contact validation between client and server; distinguish accepted delivery from an unsent email fallback. Consent revocation must disable loaded analytics immediately and reload without analytics.

**Tech Stack:** Next.js 16, React 19, Tailwind 4, Zod, Resend. Node tests for behavioral regressions, lint, TypeScript, production build and desktop/mobile screenshots.

**Execution status:** All local implementation and verification tasks below completed on 2026-09-07. Independent plan review approved. See `docs/verification/2026-09-07-visual-polish.md` for evidence and remaining external configuration. The webhook uses Next.js `after` to await its bounded request after a successful email response.

## Constraints and external dependencies

- No invented metrics, testimonials, address details or delivery claims. No production CRM access.
- Keep cream, terracotta, sage and the single graphite flow band; Newsreader + Instrument Sans. No gradients, shadows, rounded corners, decorative grids, hover motion or icon packs.
- Work locally; publishing is a separate final action. Domain verification requires Resend/DNS access. CP and municipality require the user's answer.
- Browser plugin currently reports no browsers; use available standalone rendering only if no supported browser connection can be established.

## Tasks

- [ ] Contact: add `src/lib/contact.ts` for options, schema, response types and delivery helper; update `src/app/api/contact/route.ts` and `src/components/sections/ContactForm.tsx`. Explicit `CONTACT_FROM_EMAIL` on a verified domain; missing config and provider failure return a clearly unsent fallback. Preserve form values, require a manual mailto click, expose selectable summary and clipboard feedback, set replyTo. Await the optional webhook with a timeout and check its status; do not treat it as confirmed email delivery. Add Node behavior tests with mocked delivery, never send real leads.
- [ ] Consent: update `src/lib/consent.ts`, `ConsentGate.tsx`, `ConsentReset.tsx`, and cookies copy. Disable GA immediately on denial/reset, clear first-party GA cookies, reload on reset, retain a safe in-memory choice when storage is blocked. Test denied/granted/reset and blocked storage without sending analytics.
- [ ] Visual: redesign `Hero.tsx`, `SiteHeader.tsx`, `BeforeAfter.tsx`, `Method.tsx`, `CaseHighlight.tsx`, `About.tsx`, and shared `globals.css`; refine Offer, Indicators, ContactSection, Footer, LegalPage and case page. Strong editorial hierarchy, purposeful labels, product showcase with readable real imagery, responsive spacing, visibly distinct sections. Add a reusable accessible image enlargement component if screenshots become too small. Fix mobile header/CTA overflow and body safe-area spacing.
- [ ] Content/docs: centralize response commitment and correct misleading legal metrics copy. Update README, `.env.example`, `CLAUDE_DESIGN_BRIEF.md`, vault dashboard and handoff with accurate file ownership and current local/unpublished status. Prepare corrected project memory and request filesystem escalation only when ready to write outside workspace.
- [ ] Verify: `npm run lint`, `npx tsc --noEmit`, behavioral tests and `npm run build`; inspect desktop and 375px/mobile landscape screenshots, keyboard navigation, FAQ, contact fallback, consent revocation, legal/case/thanks/404 routes, metadata and no horizontal overflow. Record limitations, do not claim verified delivery/domain configuration without evidence.
