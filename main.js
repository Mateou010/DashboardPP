import { dashboardData } from "./data/lawData.js";

const numberFormatter = new Intl.NumberFormat("es-AR");

const metaLine = document.querySelector("#meta-line");
const kpiList = document.querySelector("#kpi-list");
const partiesPie = document.querySelector("#parties-pie");
const partiesLegend = document.querySelector("#parties-legend");
const partiesTotal = document.querySelector("#parties-total");
const costsBars = document.querySelector("#costs-bars");
const keyJumpsBars = document.querySelector("#key-jumps-bars");
const segmentJump = document.querySelector("#segment-jump");
const segmentBlocks = document.querySelector("#segment-blocks");
const titleList = document.querySelector("#title-list");
const sourceList = document.querySelector("#source-list");

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

function renderKeyJumps() {
  const data = dashboardData.charts.keyJumps;
  const maxValue = Math.max(...data.map((item) => Math.max(item.beforeValue, item.nowValue)));
  const fragment = document.createDocumentFragment();

  data.forEach((item) => {
    const row = document.createElement("article");
    row.className = "bar-row";

    const head = document.createElement("div");
    head.className = "bar-row__head";

    const label = document.createElement("span");
    label.textContent = item.label;

    const value = document.createElement("strong");
    value.textContent = `${item.beforeText} → ${item.nowText}`;

    head.append(label, value);

    const beforeTrack = document.createElement("div");
    const beforeLabel = document.createElement("span");
    beforeLabel.className = "bar-subtitle";
    beforeLabel.textContent = `Antes: ${item.beforeText}`;
    row.appendChild(beforeLabel);

    beforeTrack.className = "bar-track";
    const beforeFill = document.createElement("span");
    beforeFill.className = "bar-fill";
    beforeFill.style.setProperty("--width", `${Math.max((item.beforeValue / maxValue) * 100, 3)}%`);
    beforeFill.style.setProperty("--color", "#87a6cd");
    beforeTrack.appendChild(beforeFill);

    const nowTrack = document.createElement("div");
    const nowLabel = document.createElement("span");
    nowLabel.className = "bar-subtitle";
    nowLabel.textContent = `Ahora: ${item.nowText}`;
    row.appendChild(nowLabel);

    nowTrack.className = "bar-track";
    const nowFill = document.createElement("span");
    nowFill.className = "bar-fill";
    nowFill.style.setProperty("--width", `${Math.max((item.nowValue / maxValue) * 100, 3)}%`);
    nowFill.style.setProperty("--color", "#1f4e8c");
    nowTrack.appendChild(nowFill);

    row.append(head, beforeTrack, nowTrack);
    fragment.appendChild(row);
  });

  keyJumpsBars.replaceChildren(fragment);
}

function renderSegmentJump() {
  const fragment = document.createDocumentFragment();

  dashboardData.segmentGroups.forEach((group, index) => {
    const link = document.createElement("a");
    link.href = `#segmento-${group.id}`;
    link.textContent = `S${index + 1} · ${group.title.split("·")[1].trim()}`;
    fragment.appendChild(link);
  });

  segmentJump.replaceChildren(fragment);
}

function renderSegmentBlocks() {
  const fragment = document.createDocumentFragment();

  dashboardData.segmentGroups.forEach((group) => {
    const block = document.createElement("section");
    block.className = "segment-block";
    block.id = `segmento-${group.id}`;

    const head = document.createElement("header");
    head.className = "segment-head";

    const title = document.createElement("h4");
    title.textContent = group.title;

    const summary = document.createElement("p");
    summary.textContent = group.summary;

    head.append(title, summary);

    const items = document.createElement("div");
    items.className = "segment-items";

    [...group.items]
      .sort((a, b) => (a.priority ?? 99) - (b.priority ?? 99))
      .forEach((item) => {
      const article = document.createElement("article");
      article.className = "segment-item";

      const itemTitle = document.createElement("h5");
      itemTitle.textContent = item.topic;

      const matrix = document.createElement("div");
      matrix.className = "segment-matrix";

      const before = document.createElement("div");
      before.className = "segment-cell";
      before.innerHTML = `<span>Antes</span><p>${item.before}</p>`;

      const now = document.createElement("div");
      now.className = "segment-cell";
      now.innerHTML = `<span>Ahora</span><p>${item.now}</p>`;

      const example = document.createElement("div");
      example.className = "segment-cell";
      example.innerHTML = `<span>Ejemplo</span><p>${item.example}</p>`;

      matrix.append(before, now, example);
      article.append(itemTitle, matrix);
      items.appendChild(article);
      });

    block.append(head, items);
    fragment.appendChild(block);
  });

  segmentBlocks.replaceChildren(fragment);
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
  renderKeyJumps();
  renderSegmentJump();
  renderSegmentBlocks();
  renderLegalFramework();
  renderSources();
  setupRevealAnimation();
}

init();
