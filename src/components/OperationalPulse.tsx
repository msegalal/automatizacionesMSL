const signals = [
  { label: "Entrada", detail: "Datos completos", tone: "coral" },
  { label: "Seguimiento", detail: "Siguiente paso", tone: "sun" },
  { label: "Equipo", detail: "Responsable visible", tone: "green" }
] as const;

export default function OperationalPulse() {
  return (
    <aside className="operational-pulse" aria-label="Qué queda visible en la operativa">
      <p className="pulse-label">Lo que deja de depender de la memoria</p>
      <ul>
        {signals.map((signal, index) => (
          <li key={signal.label} className={`pulse-${signal.tone}`}>
            <span className="tabular">0{index + 1}</span>
            <div>
              <strong>{signal.label}</strong>
              <small>{signal.detail}</small>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
