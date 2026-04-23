import { dashboardData } from "./data/lawData.js";

const numberFormatter = new Intl.NumberFormat("es-AR");

const metaLine = document.querySelector("#meta-line");
const kpiList = document.querySelector("#kpi-list");
const comparisonBody = document.querySelector("#comparison-body");
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

function renderComparisons() {
  const fragment = document.createDocumentFragment();

  dashboardData.comparisons.forEach((entry) => {
    const row = document.createElement("tr");

    const topic = document.createElement("td");
    topic.textContent = entry.topic;

    const current = document.createElement("td");
    current.textContent = entry.current;

    const proposal = document.createElement("td");
    proposal.textContent = entry.proposal;

    row.append(topic, current, proposal);
    fragment.appendChild(row);
  });

  comparisonBody.replaceChildren(fragment);
}

function renderTopicFilters() {
  const allButton = document.createElement("button");
  allButton.type = "button";
  allButton.role = "tab";
  allButton.setAttribute("aria-selected", "true");
  allButton.dataset.topic = "all";
  allButton.textContent = "Todos";

  const nodes = [allButton];

  dashboardData.sections.forEach((section) => {
    const button = document.createElement("button");
    button.type = "button";
    button.role = "tab";
    button.setAttribute("aria-selected", "false");
    button.dataset.topic = section.id;
    button.textContent = section.label;
    nodes.push(button);
  });

  topicFilters.replaceChildren(...nodes);

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

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
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

      const article = document.createElement("article");
      article.className = "change-item";

      const title = document.createElement("h4");
      title.textContent = `${section.label} | ${note.title}`;

      const detail = document.createElement("p");
      detail.textContent = note.detail;

      const tagRow = document.createElement("div");
      tagRow.className = "tag-row";

      note.tags.forEach((tag) => {
        const badge = document.createElement("span");
        badge.textContent = tag;
        tagRow.appendChild(badge);
      });

      article.append(title, detail, tagRow);
      fragment.appendChild(article);
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
  renderComparisons();
  renderTopicFilters();
  renderChanges();
  renderLegalFramework();
  renderSources();
  setupSearchListener();
  setupRevealAnimation();
}

init();
