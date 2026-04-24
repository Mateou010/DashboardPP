import { dashboardData } from "../data/lawData";
import SegmentsExplorer from "../components/SegmentsExplorer";

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

/* ---------- Iconos inline ---------- */

function DataIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h2" />
      <path d="M8 17h2" />
      <path d="M14 14h2" />
      <path d="M14 17h2" />
    </svg>
  );
}

function BarsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 20V10" />
      <path d="M10 20V4" />
      <path d="M16 20v-7" />
      <path d="M22 20H2" />
    </svg>
  );
}

export default function HomePage() {
  const parties = dashboardData.charts.partiesComposition;
  const costs = dashboardData.charts.electionCosts;

  const maxCost = Math.max(...costs.map((item) => item.value));
  const sortedCosts = [...costs].sort((a, b) => b.value - a.value);

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
            <p className="lead-text">
              Este tablero está basado en el proyecto de ley enviado por el Poder
              Ejecutivo Nacional para reformar el régimen electoral y de partidos
              políticos. El contenido sistematiza el texto normativo en formato
              comparado, con foco en cómo cambia el marco vigente.
            </p>
            <p className="lead-text">
              Entre las principales reformas se incluyen: nuevos requisitos para la
              creación y sostenimiento de partidos, eliminación de las PASO, cambios
              en candidaturas, avales y boleta única, modificaciones al financiamiento
              político y aportes privados, nuevo esquema para Parlasur y plazos de
              adecuación para partidos vigentes.
            </p>
          </div>
          <div className="lead-actions">
            <a href="#segmentos">Ir a comparación ley vs proyecto</a>
            <a href="#graficos">Ir a gráficos</a>
          </div>
        </section>

        {/* ---------- Antes vs Ahora ---------- */}

        <section className="section reveal is-visible" id="segmentos">
          <div className="section-top">
            <p className="section-label">Comparación LEY vs PROYECTO</p>
            <h3>Antes vs ahora, segmento por segmento</h3>
            <p className="section-helper">
              Cinco segmentos para revisar los cambios principales del régimen
              vigente frente al proyecto.
            </p>
          </div>

          <SegmentsExplorer
            segmentGroups={dashboardData.segmentGroups}
            keyJumps={dashboardData.charts.keyJumps}
          />
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

        {/* ---------- Visualizaciones ---------- */}

        <section className="section reveal is-visible" id="graficos">
          <div className="section-top">
            <p className="section-label">Visualizaciones</p>
            <h3>Composición del sistema y magnitudes de gasto</h3>
            <p className="section-helper">
              Dos lecturas visuales: cuántos partidos componen el sistema y cuánto
              cuestan las elecciones recientes.
            </p>
          </div>

          <div className="chart-grid">
            {/* Donut: composición de partidos */}
            <article className="chart-card chart-card--donut">
              <header className="chart-header">
                <div className="chart-icon">
                  <DataIcon />
                </div>
                <div className="chart-header-text">
                  <p className="chart-kicker">Composición</p>
                  <h4>Partidos vigentes estimados</h4>
                </div>
              </header>
              <p className="chart-caption">
                Cantidad de partidos vigentes por tipo (sin comparación porcentual).
              </p>

              <div className="composition-list">
                {parties.map((item) => (
                  <article className="composition-row" key={item.label}>
                    <div className="composition-row-left">
                      <span
                        className="composition-swatch"
                        style={{ background: item.color }}
                        aria-hidden="true"
                      />
                      <span>{item.label}</span>
                    </div>
                    <strong>{numberFormatter.format(item.value)}</strong>
                  </article>
                ))}
              </div>
              <p className="chart-note">
                *Dato obtenido al 30 de junio de 2025 · argentina.gob.ar
              </p>
            </article>

            {/* Barras ranqueadas: costos */}
            <article className="chart-card chart-card--bars">
              <header className="chart-header">
                <div className="chart-icon">
                  <BarsIcon />
                </div>
                <div className="chart-header-text">
                  <p className="chart-kicker">Magnitudes de gasto</p>
                  <h4>Costos electorales recientes</h4>
                </div>
              </header>
              <p className="chart-caption">
                Comparación ordenada, en millones de ARS, de los principales rubros de gasto.
              </p>

              <div className="ranked-list">
                {sortedCosts.map((item, index) => (
                  <article className="ranked-row" key={item.label}>
                    <div
                      className={`rank-badge${index === 0 ? " rank-badge--top" : ""}`}
                      aria-hidden="true"
                    >
                      {index + 1}
                    </div>
                    <div className="ranked-body">
                      <div className="ranked-head">
                        <span>{item.label}</span>
                        <strong>{formatMillions(item.value)}</strong>
                      </div>
                      <div className="bar-track">
                        <span
                          className="bar-fill"
                          style={{
                            width: `${Math.max((item.value / maxCost) * 100, 3)}%`,
                            background: item.color,
                          }}
                        />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </article>
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
