"use client";

import { useMemo, useState } from "react";

function ArrowIcon({ direction = "right", size = 18 }) {
  const rotation = direction === "left" ? 180 : 0;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export default function ImportantArticlesCarousel({ items }) {
  const safeItems = useMemo(() => items ?? [], [items]);
  const [index, setIndex] = useState(0);

  if (!safeItems.length) return null;

  const current = safeItems[index];

  function prev() {
    setIndex((i) => (i - 1 + safeItems.length) % safeItems.length);
  }

  function next() {
    setIndex((i) => (i + 1) % safeItems.length);
  }

  return (
    <article className="articles-carousel">
      <header className="articles-carousel__head">
        <div>
          <p className="articles-carousel__kicker">{current.article}</p>
          <h4>{current.title}</h4>
        </div>
        <div className="articles-carousel__counter" aria-label="Progreso">
          {String(index + 1).padStart(2, "0")} / {String(safeItems.length).padStart(2, "0")}
        </div>
      </header>

      <div className="articles-carousel__content">
        <section className="article-pane article-pane--literal">
          <h5>Texto legal (literal)</h5>
          <p>{current.literal}</p>
        </section>
        <section className="article-pane article-pane--comment">
          <h5>Comentario</h5>
          <p>{current.comment}</p>
        </section>
      </div>

      <footer className="articles-carousel__nav">
        <button type="button" className="nav-btn" onClick={prev} aria-label="Artículo anterior">
          <ArrowIcon direction="left" />
          <span>Anterior</span>
        </button>
        <button type="button" className="nav-btn nav-btn--primary" onClick={next} aria-label="Artículo siguiente">
          <span>Siguiente</span>
          <ArrowIcon />
        </button>
      </footer>
    </article>
  );
}
