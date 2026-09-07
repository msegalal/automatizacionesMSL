import { faqs } from "@/lib/site-content";

/*
  Familia de layout: lista de definicion a dos columnas.
  Sustituye al acordeon: sin apertura animada y todo el contenido
  visible de golpe, que en cinco preguntas se lee antes.
*/
export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-4 border-b border-rule">
      <div className="mx-auto max-w-[1240px] px-5 py-20 lg:px-8 lg:py-24">
        <h2 className="max-w-[24ch] text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
          Dudas habituales antes de implantar en otra agencia
        </h2>

        <dl className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {faqs.map((item) => (
            <div key={item.question} className="border-t border-rule-strong pt-5">
              <dt className="max-w-[38ch] font-display text-xl leading-snug text-ink">
                {item.question}
              </dt>
              <dd className="mt-3 max-w-[52ch] text-sm leading-6 text-ink-soft">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
