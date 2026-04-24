import { dashboardData } from "../data/lawData";

const numberFormatter = new Intl.NumberFormat("es-AR");

function formatValue(metric) {
  if (typeof metric.value === "string") {
    return metric.value;
  }

  if (metric.format === "number") {
    return numberFormatter.format(metric.value);
  }

  if (metric.format === "ars") {
    return `$${numberFormatter.format(metric.value)}`;
  }

  if (metric.format === "millions_ars") {
    return `$${numberFormatter.format(metric.value)} millones`;
  }

  if (metric.format === "millions_ars_iva") {
    return `$${numberFormatter.format(metric.value)} millones + IVA`;
  }

  return String(metric.value);
}

function formatMillions(value) {
  return `$${numberFormatter.format(value)} M`;
}

function buildPieGradient(items) {
  const total = items.reduce((sum, item) => sum + item.value, 0);
  let progress = 0;

  const slices = items.map((item) => {
    const start = progress;
    const share = (item.value / total) * 100;
    progress += share;
    return `${item.color} ${start}% ${progress}%`;
  });

  return {
    total,
    background: `conic-gradient(${slices.join(",")})`
  };
}

export default function HomePage() {
  const parties = dashboardData.charts.partiesComposition;
  const costs = dashboardData.charts.electionCosts;
  const jumps = dashboardData.charts.keyJumps;

  const partiesPie = buildPieGradient(parties);
  const maxCost = Math.max(...costs.map((item) => item.value));
  const maxJump = Math.max(...jumps.map((item) => Math.max(item.beforeValue, item.nowValue)));

  return (
    <>
      <header className="app-header">
        <div className="app-header__inner">
          <p className="eyebrow">Observatorio Legislativo</p>
          <h1>Reforma Electoral Integral</h1>
          <p className="meta-line">
            {dashboardData.reference} | Actualizado: {dashboardData.updatedAt}
          </p>
        </div>
      </header>

      <main className="layout">
        <section className="section section--lead reveal is-visible">
          <div>
            <p className="section-label">Resumen Ejecutivo</p>
            <h2>
              Lectura institucional del impacto normativo en partidos políticos,
              código electoral, financiamiento y régimen de transición.
            </h2>
          </div>
          <div className="lead-actions">
            <a href="#segmentos">Ir a segmentos</a>
            <a href="#graficos">Ir a gráficos</a>
          </div>
        </section>

        <section className="section reveal is-visible" id="kpis">
          <div className="section-top">
            <p className="section-label">Datos Estructurales</p>
            <h3>Escala electoral y costos de referencia</h3>
          </div>
          <div className="kpi-grid">
            {dashboardData.kpis.map((metric) => (
              <dl className="kpi" key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{formatValue(metric)}</dd>
              </dl>
            ))}
          </div>
        </section>

        <section className="section reveal is-visible" id="graficos">
          <div className="section-top">
            <p className="section-label">Visualizaciones</p>
            <h3>Composición del sistema y magnitudes de gasto</h3>
          </div>
          <div className="chart-grid">
            <article className="chart-card">
              <h4>Composición estimada de partidos vigentes</h4>
              <p className="chart-caption">Relación entre partidos nacionales y distritales.</p>
              <div className="pie-layout">
                <div className="pie-chart" style={{ background: partiesPie.background }}>
                  <span>
                    <strong>{numberFormatter.format(partiesPie.total)}</strong>
                    partidos estimados
                  </span>
                </div>
                <ul className="chart-legend">
                  {parties.map((item) => {
                    const percentage = ((item.value / partiesPie.total) * 100).toFixed(1);
                    return (
                      <li key={item.label}>
                        <span className="legend-left">
                          <span className="legend-dot" style={{ background: item.color }}></span>
                          <span>{item.label}</span>
                        </span>
                        <span className="legend-value">
                          {numberFormatter.format(item.value)} ({percentage}%)
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>

            <article className="chart-card">
              <h4>Costos electorales recientes</h4>
              <p className="chart-caption">Montos en millones de ARS para comparar niveles de gasto.</p>
              <div className="bar-chart">
                {costs.map((item) => (
                  <article className="bar-row" key={item.label}>
                    <div className="bar-row__head">
                      <span>{item.label}</span>
                      <strong>{formatMillions(item.value)}</strong>
                    </div>
                    <div className="bar-track">
                      <span
                        className="bar-fill"
                        style={{
                          width: `${Math.max((item.value / maxCost) * 100, 3)}%`,
                          background: item.color
                        }}
                      ></span>
                    </div>
                  </article>
                ))}
              </div>
            </article>

            <article className="chart-card">
              <h4>Saltos normativos clave (antes vs ahora)</h4>
              <p className="chart-caption">Cambios numéricos en umbrales críticos del proyecto.</p>
              <div className="bar-chart">
                {jumps.map((item) => (
                  <article className="bar-row" key={item.label}>
                    <div className="bar-row__head">
                      <span>{item.label}</span>
                      <strong>
                        {item.beforeText} → {item.nowText}
                      </strong>
                    </div>
                    <span className="bar-subtitle">Antes: {item.beforeText}</span>
                    <div className="bar-track">
                      <span
                        className="bar-fill"
                        style={{
                          width: `${Math.max((item.beforeValue / maxJump) * 100, 3)}%`,
                          background: "#87a6cd"
                        }}
                      ></span>
                    </div>
                    <span className="bar-subtitle">Ahora: {item.nowText}</span>
                    <div className="bar-track">
                      <span
                        className="bar-fill"
                        style={{
                          width: `${Math.max((item.nowValue / maxJump) * 100, 3)}%`,
                          background: "#1f4e8c"
                        }}
                      ></span>
                    </div>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section reveal is-visible" id="segmentos">
          <div className="section-top">
            <p className="section-label">Segmentación De Cambios</p>
            <h3>Antes, ahora y ejemplo operativo por tema</h3>
            <p className="section-helper">
              Cada segmento tiene su propio bloque para facilitar lectura técnica y presentación pública.
            </p>
          </div>
          <nav className="segment-jump" aria-label="Navegación por segmentos">
            {dashboardData.segmentGroups.map((group, index) => (
              <a key={group.id} href={`#segmento-${group.id}`}>
                {`S${index + 1} · ${group.title.split("·")[1].trim()}`}
              </a>
            ))}
          </nav>
          <div className="segment-blocks">
            {dashboardData.segmentGroups.map((group) => (
              <section className="segment-block" id={`segmento-${group.id}`} key={group.id}>
                <header className="segment-head">
                  <h4>{group.title}</h4>
                  <p>{group.summary}</p>
                </header>
                <div className="segment-items">
                  {[...group.items]
                    .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99))
                    .map((item) => (
                      <article className="segment-item" key={item.topic}>
                        <h5>{item.topic}</h5>
                        <div className="segment-matrix">
                          <div className="segment-cell">
                            <span>Antes</span>
                            <p>{item.before}</p>
                          </div>
                          <div className="segment-cell">
                            <span>Ahora</span>
                            <p>{item.now}</p>
                          </div>
                          <div className="segment-cell">
                            <span>Ejemplo</span>
                            <p>{item.example}</p>
                          </div>
                        </div>
                      </article>
                    ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="section reveal is-visible" id="marco">
          <div className="section-top">
            <p className="section-label">Marco Normativo</p>
            <h3>Títulos del proyecto y alcance legal</h3>
          </div>
          <ul className="title-list">
            {dashboardData.legalFramework.map((entry) => (
              <li key={entry.title}>
                <strong>{entry.title}</strong>
                <p>{entry.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="section reveal is-visible" id="fuentes">
          <div className="section-top">
            <p className="section-label">Fuente</p>
            <h3>Documento base utilizado</h3>
          </div>
          <ul className="source-list">
            {dashboardData.sources.map((source) => (
              <li key={source.file}>
                <a href={`/${source.file}`}>{source.file}</a>
                <p>{source.note}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="app-footer">
        <p>
          Este tablero resume cambios normativos y operativos del proyecto.
          Recomendado: validación legal final artículo por artículo antes de publicación institucional.
        </p>
      </footer>
    </>
  );
}
