import { methodSteps } from "@/lib/site-content";

export default function Method() {
  return (
    <section id="proceso" className="section-space border-b border-rule">
      <div className="site-container method-layout">
        <div className="method-intro">
          <p className="eyebrow">02 / El método</p>
          <h2 className="section-title">
            Primero, orden.
            <br />
            <em>Después, automatización.</em>
          </h2>
          <p className="section-description">
            Miramos cómo trabaja tu agencia. Encontramos el punto de pérdida y
            avanzamos por fases, con un siguiente paso claro.
          </p>
          <p className="method-note">
            Una forma de trabajar.
            <br />
            Cuatro pasos para ponerla en marcha.
          </p>
        </div>
        <ol className="method-steps">
          {methodSteps.map((item) => (
            <li key={item.step}>
              <span className="method-number tabular">{item.step}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
