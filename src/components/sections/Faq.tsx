import { faqs } from "@/lib/site-content";

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <div className="mb-6 h-0.5 w-18 bg-[linear-gradient(90deg,#ff6e40,rgba(255,110,64,0.08))]" />
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-500">
            faq
          </p>
          <h2 className="max-w-2xl text-balance text-4xl font-semibold text-slate-950 md:text-5xl">
            Las dudas habituales antes de implantar la herramienta en otra agencia.
          </h2>
        </div>

        <div className="grid gap-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.7rem] border border-slate-200/80 bg-white/84 px-6 py-5 shadow-[0_14px_36px_rgba(8,19,33,0.04)] backdrop-blur-xl"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                <span className="text-lg font-semibold text-slate-950">{item.question}</span>
                <span className="text-xl text-orange-500 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
