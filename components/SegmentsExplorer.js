"use client";

import { useEffect, useMemo, useRef, useState } from "react";

function ArrowIcon({ size = 20, direction = "right" }) {
  const rotation =
    direction === "left" ? 180 : direction === "up" ? -90 : direction === "down" ? 90 : 0;
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

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="12"
      height="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="12"
      height="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="12"
      height="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 3l1.5 4.5L15 9l-4.5 1.5L9 15l-1.5-4.5L3 9l4.5-1.5z" />
      <path d="M17 14l.9 2.1L20 17l-2.1.9L17 20l-.9-2.1L14 17l2.1-.9z" />
    </svg>
  );
}

export default function SegmentsExplorer({ segmentGroups }) {
  const [activeSegment, setActiveSegment] = useState(null);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const focusPanelRef = useRef(null);

  const sortedItemsBySegment = useMemo(() => {
    const map = {};
    segmentGroups.forEach((group) => {
      map[group.id] = [...group.items].sort(
        (a, b) => (a.priority ?? 99) - (b.priority ?? 99)
      );
    });
    return map;
  }, [segmentGroups]);

  const currentGroup = useMemo(
    () => segmentGroups.find((g) => g.id === activeSegment) ?? null,
    [segmentGroups, activeSegment]
  );

  const currentItems = currentGroup ? sortedItemsBySegment[currentGroup.id] : [];
  const currentItem = currentItems[activeItemIndex] ?? null;

  function openSegment(id) {
    setActiveSegment(id);
    setActiveItemIndex(0);

    // Scroll suave al panel focal
    requestAnimationFrame(() => {
      if (focusPanelRef.current) {
        focusPanelRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }

  function closeSegment() {
    setActiveSegment(null);
    setActiveItemIndex(0);
  }

  function nextItem() {
    if (!currentItems.length) return;
    setActiveItemIndex((i) => (i + 1) % currentItems.length);
  }

  function prevItem() {
    if (!currentItems.length) return;
    setActiveItemIndex((i) => (i - 1 + currentItems.length) % currentItems.length);
  }

  // Accesibilidad: flechas del teclado para navegar dentro del segmento activo
  useEffect(() => {
    if (!activeSegment) return undefined;

    function onKey(e) {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextItem();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevItem();
      } else if (e.key === "Escape") {
        closeSegment();
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSegment, currentItems.length]);

  return (
    <div className="segments-explorer">
      {/* Grilla de las 5 tarjetas de segmento, siempre visibles */}
      <div className="segments-grid" role="list">
        {segmentGroups.map((group, index) => {
          const isActive = activeSegment === group.id;
          const shortTitle = group.title.includes("·")
            ? group.title.split("·")[1].trim()
            : group.title;

          return (
            <button
              key={group.id}
              type="button"
              className={`segment-card${isActive ? " is-active" : ""}`}
              onClick={() => (isActive ? closeSegment() : openSegment(group.id))}
              aria-expanded={isActive}
              aria-controls="segment-focus-panel"
              role="listitem"
            >
              <div className="segment-card__top">
                <span className="segment-card__number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="segment-card__count">
                  {group.items.length}{" "}
                  {group.items.length === 1 ? "cambio" : "cambios"}
                </span>
              </div>
              <h4 className="segment-card__title">{shortTitle}</h4>
              <p className="segment-card__summary">{group.summary}</p>
              <span className="segment-card__cta" aria-hidden="true">
                {isActive ? "Cerrar" : "Explorar"}
                <ArrowIcon size={16} direction={isActive ? "down" : "right"} />
              </span>
            </button>
          );
        })}
      </div>

      {/* Panel focal: aparece al elegir un segmento */}
      <div
        id="segment-focus-panel"
        ref={focusPanelRef}
        className={`segment-focus${currentGroup ? " is-open" : ""}`}
        aria-live="polite"
      >
        {currentGroup && currentItem && (
          <article className="segment-focus__card" aria-label={`Detalle del segmento ${currentGroup.title}`}>
            <header className="segment-focus__head">
              <div>
                <p className="segment-focus__kicker">
                  Segmento{" "}
                  {segmentGroups.findIndex((g) => g.id === currentGroup.id) + 1} ·{" "}
                  {currentGroup.title.split("·")[1]?.trim() ?? currentGroup.title}
                </p>
                <h4 className="segment-focus__topic">{currentItem.topic}</h4>
              </div>
              <button
                type="button"
                className="segment-focus__close"
                onClick={closeSegment}
                aria-label="Cerrar detalle"
              >
                <CloseIcon />
              </button>
            </header>

            <div className="segment-focus__counter" aria-hidden="true">
              <span className="segment-focus__counter-index">
                {String(activeItemIndex + 1).padStart(2, "0")}
              </span>
              <span className="segment-focus__counter-sep">/</span>
              <span className="segment-focus__counter-total">
                {String(currentItems.length).padStart(2, "0")}
              </span>
              {currentItem.priority === 1 && (
                <span className="segment-focus__priority">Cambio clave</span>
              )}
            </div>

            <div className="segment-focus__compare">
              <div className="focus-cell focus-cell--before">
                <div className="focus-cell__head">
                  <span className="focus-cell__icon">
                    <ClockIcon />
                  </span>
                  <span>Antes</span>
                </div>
                <p>{currentItem.before}</p>
              </div>
              <div className="focus-cell__arrow" aria-hidden="true">
                <ArrowIcon size={22} />
              </div>
              <div className="focus-cell focus-cell--now">
                <div className="focus-cell__head">
                  <span className="focus-cell__icon">
                    <CheckIcon />
                  </span>
                  <span>Ahora</span>
                </div>
                <p>{currentItem.now}</p>
              </div>
            </div>

            <div className="focus-cell focus-cell--example">
              <div className="focus-cell__head">
                <span className="focus-cell__icon">
                  <SparkIcon />
                </span>
                <span>Ejemplo operativo</span>
              </div>
              <p>{currentItem.example}</p>
            </div>

            <footer className="segment-focus__nav">
              <button
                type="button"
                className="nav-btn"
                onClick={prevItem}
                disabled={currentItems.length <= 1}
                aria-label="Cambio anterior"
              >
                <ArrowIcon size={18} direction="left" />
                <span>Anterior</span>
              </button>

              <div className="nav-dots" role="tablist" aria-label="Seleccionar cambio">
                {currentItems.map((item, i) => (
                  <button
                    key={item.topic}
                    type="button"
                    className={`nav-dot${i === activeItemIndex ? " is-active" : ""}`}
                    onClick={() => setActiveItemIndex(i)}
                    aria-label={`Ir al cambio ${i + 1}: ${item.topic}`}
                    aria-selected={i === activeItemIndex}
                    role="tab"
                  />
                ))}
              </div>

              <button
                type="button"
                className="nav-btn nav-btn--primary"
                onClick={nextItem}
                disabled={currentItems.length <= 1}
                aria-label="Siguiente cambio"
              >
                <span>Siguiente</span>
                <ArrowIcon size={18} />
              </button>
            </footer>
          </article>
        )}
      </div>
    </div>
  );
}
