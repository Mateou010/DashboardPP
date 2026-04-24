import { dashboardData } from "./data/lawData.js";

const numberFormatter = new Intl.NumberFormat("es-AR");

const metaLine = document.querySelector("#meta-line");
const kpiList = document.querySelector("#kpi-list");
const partiesPie = document.querySelector("#parties-pie");
const partiesLegend = document.querySelector("#parties-legend");
const partiesTotal = document.querySelector("#parties-total");
const costsBars = document.querySelector("#costs-bars");
const comparisonCards = document.querySelector("#comparison-cards");
const topicFilters = document.querySelector("#topic-filters");
const changeList = document.querySelector("#change-list");
const searchInput = document.querySelector("#search-input");
const titleList = document.querySelector("#title-list");
const sourceList = document.querySelector("#source-list");

let activeTopic = "all";

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

function sectionShortLabel(label) {
  return label.replace(/^\d+\.\s*/, "");
}

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function buildMetaLine() {
  metaLine.textContent = `${dashboardData.reference} | Actualizado: ${dashboardData.updatedAt}`;
}

function renderKpis() {
  const fragment = document.createDocumentFragment();

  dashboardData.kpis.forEach((metric) => {
    const item = document.createElement("dl");
    item.className = "kpi";

    const label = document.createElement("dt");
    label.textContent = metric.label;

    const value = document.createElement("dd");
    value.textContent = formatValue(metric);

    item.append(label, value);
    fragment.appendChild(item);
  });

  kpiList.replaceChildren(fragment);
}

function renderPartiesPie() {
  const data = dashboardData.charts.partiesComposition;
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let progress = 0;

  const slices = data.map((item) => {
    const start = progress;
    const share = (item.value / total) * 100;
    progress += share;
    return `${item.color} ${start}% ${progress}%`;
  });

  partiesPie.style.background = `conic-gradient(${slices.join(",")})`;
  partiesTotal.innerHTML = `<strong>${numberFormatter.format(total)}</strong>partidos estimados`;

  const legend = document.createDocumentFragment();

  data.forEach((item) => {
    const percentage = ((item.value / total) * 100).toFixed(1);

    const row = document.createElement("li");

    const left = document.createElement("span");
    left.className = "legend-left";

    const dot = document.createElement("span");
    dot.className = "legend-dot";
    dot.style.background = item.color;

    const label = document.createElement("span");
    label.textContent = item.label;

    left.append(dot, label);

    const value = document.createElement("span");
    value.className = "legend-value";
    value.textContent = `${numberFormatter.format(item.value)} (${percentage}%)`;

    row.append(left, value);
    legend.appendChild(row);
  });

  partiesLegend.replaceChildren(legend);
}

function renderCostBars() {
  const data = dashboardData.charts.electionCosts;
  const maxValue = Math.max(...data.map((item) => item.value));
  const fragment = document.createDocumentFragment();

  data.forEach((item) => {
    const row = document.createElement("article");
    row.className = "bar-row";

    const head = document.createElement("div");
    head.className = "bar-row__head";

    const label = document.createElement("span");
    label.textContent = item.label;

    const value = document.createElement("strong");
    value.textContent = formatMillions(item.value);

    head.append(label, value);

    const track = document.createElement("div");
    track.className = "bar-track";

    const fill = document.createElement("span");
    fill.className = "bar-fill";
    fill.style.setProperty("--width", `${Math.max((item.value / maxValue) * 100, 3)}%`);
    fill.style.setProperty("--color", item.color);

    track.appendChild(fill);
    row.append(head, track);
    fragment.appendChild(row);
  });

  costsBars.replaceChildren(fragment);
}

function renderComparisons() {
  const fragment = document.createDocumentFragment();

  dashboardData.comparisons.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "comparison-card";

    const title = document.createElement("h4");
    title.className = "comparison-card__title";
    title.textContent = entry.topic;

    const body = document.createElement("div");
    body.className = "comparison-card__body";

    const current = document.createElement("div");
    current.className = "comparison-side comparison-side--current";

    const currentLabel = document.createElement("h5");
    currentLabel.textContent = "Antes";

    const currentText = document.createElement("p");
    currentText.textContent = entry.current;

    current.append(currentLabel, currentText);

    const proposal = document.createElement("div");
    proposal.className = "comparison-side comparison-side--proposal";

    const proposalLabel = document.createElement("h5");
    proposalLabel.textContent = "Propuesta";

    const proposalText = document.createElement("p");
    proposalText.textContent = entry.proposal;

    proposal.append(proposalLabel, proposalText);
    body.append(current, proposal);
    card.append(title, body);
    fragment.appendChild(card);
  });

  comparisonCards.replaceChildren(fragment);
}

function renderTopicFilters() {
  const fragment = document.createDocumentFragment();

  const totalNotes = dashboardData.sections.reduce((sum, section) => sum + section.notes.length, 0);

  const allButton = document.createElement("button");
  allButton.type = "button";
  allButton.role = "tab";
  allButton.className = "topic-card";
  allButton.dataset.topic = "all";
  allButton.setAttribute("aria-selected", "true");
  allButton.innerHTML = `
    <span class="topic-card__title">Todos los bloques</span>
    <span class="topic-card__meta"><span>Vista general</span><strong>${totalNotes} cambios</strong></span>
  `;
  fragment.appendChild(allButton);

  dashboardData.sections.forEach((section) => {
    const button = document.createElement("button");
    button.type = "button";
    button.role = "tab";
    button.className = "topic-card";
    button.dataset.topic = section.id;
    button.setAttribute("aria-selected", "false");
    button.innerHTML = `
      <span class="topic-card__title">${sectionShortLabel(section.label)}</span>
      <span class="topic-card__meta"><span>Bloque temático</span><strong>${section.notes.length} cambios</strong></span>
    `;
    fragment.appendChild(button);
  });

  topicFilters.replaceChildren(fragment);

  topicFilters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-topic]");

    if (!button) {
      return;
    }

    activeTopic = button.dataset.topic;

    topicFilters.querySelectorAll("button").forEach((node) => {
      node.setAttribute("aria-selected", String(node === button));
    });

    renderChanges();
  });
}

function renderChanges() {
  const query = normalizeText(searchInput.value.trim());
  const fragment = document.createDocumentFragment();
  let results = 0;

  dashboardData.sections.forEach((section) => {
    if (activeTopic !== "all" && section.id !== activeTopic) {
      return;
    }

    section.notes.forEach((note) => {
      const searchable = normalizeText(`${section.label} ${note.title} ${note.detail}`);

      if (query && !searchable.includes(query)) {
        return;
      }

      const details = document.createElement("details");
      details.className = "change-item";

      const summary = document.createElement("summary");

      const left = document.createElement("div");

      const scope = document.createElement("p");
      scope.className = "change-item__scope";
      scope.textContent = sectionShortLabel(section.label);

      const title = document.createElement("h4");
      title.textContent = note.title;

      left.append(scope, title);

      const action = document.createElement("span");
      action.className = "change-item__action";
      action.textContent = "Abrir detalle";

      summary.append(left, action);

      const content = document.createElement("div");
      content.className = "change-item__content";

      const detail = document.createElement("p");
      detail.textContent = note.detail;

      const tagRow = document.createElement("div");
      tagRow.className = "tag-row";

      note.tags.forEach((tag) => {
        const badge = document.createElement("span");
        badge.textContent = tag;
        tagRow.appendChild(badge);
      });

      content.append(detail, tagRow);
      details.append(summary, content);
      fragment.appendChild(details);
      results += 1;
    });
  });

  if (!results) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "No hay resultados para esa búsqueda en el bloque seleccionado.";
    changeList.replaceChildren(empty);
    return;
  }

  changeList.replaceChildren(fragment);
}

function renderLegalFramework() {
  const fragment = document.createDocumentFragment();

  dashboardData.legalFramework.forEach((entry) => {
    const item = document.createElement("li");

    const heading = document.createElement("strong");
    heading.textContent = entry.title;

    const body = document.createElement("p");
    body.textContent = entry.body;

    item.append(heading, body);
    fragment.appendChild(item);
  });

  titleList.replaceChildren(fragment);
}

function renderSources() {
  const fragment = document.createDocumentFragment();

  dashboardData.sources.forEach((source) => {
    const item = document.createElement("li");

    const link = document.createElement("a");
    link.href = `./${source.file}`;
    link.textContent = source.file;

    const note = document.createElement("p");
    note.textContent = source.note;

    item.append(link, note);
    fragment.appendChild(item);
  });

  sourceList.replaceChildren(fragment);
}

function setupSearchListener() {
  searchInput.addEventListener("input", renderChanges);
}

function setupRevealAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
}

function init() {
  buildMetaLine();
  renderKpis();
  renderPartiesPie();
  renderCostBars();
  renderComparisons();
  renderTopicFilters();
  renderChanges();
  renderLegalFramework();
  renderSources();
  setupSearchListener();
  setupRevealAnimation();
}

init();
