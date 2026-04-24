export const dashboardData = {
  projectName: "Reforma Electoral Integral",
  reference: "INLEG-2026-40722643-APN-PTE",
  updatedAt: "24/04/2026",
  summary:
    "Proyecto de reforma integral con cambios en la ley de partidos, código electoral, financiamiento de campaña, régimen Parlasur y disposiciones de transición.",
  kpis: [
    { label: "Electores nacionales", value: 36477204, format: "number" },
    { label: "Partidos nacionales (estimado)", value: "40-45" },
    { label: "Partidos distritales", value: "> 700" },
    { label: "Costo elección legislativa 2025", value: 395133, format: "millions_ars" },
    { label: "Gasto elección 2023", value: 422537, format: "millions_ars" },
    { label: "Contrato Correo Argentino 2025", value: 223006358830, format: "ars" },
    { label: "Escrutinio + telegramas (INDRA)", value: 21000, format: "millions_ars_iva" },
    { label: "Confección BUP", value: 43000, format: "millions_ars_iva" },
    { label: "Adecuación partidos vigentes", value: "Hasta 30/06/2027" }
  ],
  charts: {
    partiesComposition: [
      { label: "Partidos distritales", value: 700, color: "#1f4e8c" },
      { label: "Partidos nacionales", value: 45, color: "#7f9fc7" }
    ],
    electionCosts: [
      { label: "Elección 2023 (total)", value: 422537, color: "#163f78" },
      { label: "Elección 2025 (total)", value: 395133, color: "#2c5a9d" },
      { label: "Correo 2025", value: 223006, color: "#5a7fb1" },
      { label: "INDRA 2025", value: 21000, color: "#8aa7cd" },
      { label: "BUP 2025", value: 43000, color: "#3f6ca5" }
    ]
  },
  segmentGroups: [
    {
      id: "partidos",
      title: "Segmento 1 · Partidos Políticos",
      summary: "Requisitos de creación, reconocimiento nacional y continuidad partidaria.",
      items: [
        {
          topic: "Creación de partidos distritales",
          before: "Piso de afiliados de 4 por mil del padrón del distrito.",
          now: "Pasa a 0,5% del padrón, con base de cálculo máxima de 2.000.000 de electores.",
          example:
            "Distrito de 100.000 electores: antes 400 afiliados; ahora 500. Distrito con tope de 2 millones: antes 4.000; ahora 10.000."
        },
        {
          topic: "Reconocimiento de partido nacional",
          before: "Se requerían 5 distritos con personería vigente.",
          now: "Se exigen 10 distritos y afiliación mínima equivalente al 0,1% del Registro Nacional de Electores.",
          example:
            "Tomando 36.477.204 electores nacionales, el 0,1% representa aproximadamente 36.477 afiliaciones."
        },
        {
          topic: "PASO",
          before: "Había Primarias Abiertas, Simultáneas y Obligatorias para ordenar candidaturas.",
          now: "Se eliminan las PASO y cada fuerza define su mecanismo interno de selección.",
          example:
            "Un partido puede optar por internas cerradas, congreso partidario o sistema digital propio para definir listas."
        }
      ]
    },
    {
      id: "codigo",
      title: "Segmento 2 · Código Electoral",
      summary: "Reglas de listas, avales y reemplazos en candidaturas.",
      items: [
        {
          topic: "Lista única por categoría",
          before: "Se permitían configuraciones múltiples para una misma categoría en un distrito.",
          now: "Cada agrupación puede presentar solo una lista por categoría de cargos.",
          example:
            "Una candidatura presidencial ya no podría llevar dos listas diferentes de diputados nacionales en la misma provincia."
        },
        {
          topic: "Avales para candidaturas",
          before: "No había este esquema digital unificado con umbrales específicos por categoría.",
          now: "Se exige 0,5% distrital para diputados/senadores y 0,1% nacional para presidente/vice, en plataforma CNE.",
          example:
            "Para una elección nacional, los avales presidenciales se cargan en sistema digital y cada ciudadano avala una sola opción nacional."
        },
        {
          topic: "Reemplazo de candidatos",
          before: "La norma no explicitaba con ese alcance el efecto inmediato del fallo de inelegibilidad.",
          now: "Si la Cámara Electoral determina inelegibilidad, el recurso extraordinario no suspende el cumplimiento.",
          example:
            "Ante una baja judicial, corre automáticamente el orden de lista para cubrir el lugar vacante."
        }
      ]
    },
    {
      id: "financiamiento",
      title: "Segmento 3 · Financiamiento de Campaña",
      summary: "Topes, origen de fondos, destino obligatorio y controles periódicos.",
      items: [
        {
          topic: "Destino mínimo de fondos de capacitación",
          before: "20% obligatorio para capacitación en función pública, con subcupos para jóvenes y mujeres.",
          now: "Se reduce a 10% y se eliminan los subcupos obligatorios por edad y género.",
          example:
            "Por cada $100 asignados, antes $20 debían ir a capacitación con distribución interna; ahora serían $10 sin esos subcupos."
        },
        {
          topic: "Límite de aportes privados",
          before: "Tope del 2% sobre la base legal de cálculo.",
          now: "Se eleva al 35% sobre la nueva base definida en la reforma.",
          example:
            "El techo de financiamiento privado sube de forma muy significativa respecto del régimen anterior, con impacto directo en escala de campaña."
        },
        {
          topic: "Sujetos prohibidos y transparencia",
          before: "Régimen más acotado de prohibiciones y sin reporte semanal obligatorio.",
          now: "Amplía prohibiciones para ciertos aportantes y obliga a informar aportes semanalmente al juzgado federal electoral.",
          example:
            "Durante campaña, el partido debería remitir cada semana el detalle de aportes recibidos para control judicial."
        }
      ]
    },
    {
      id: "parlasur-otras",
      title: "Segmento 4 · Parlasur y Disposiciones de Transición",
      summary: "Cambios de representación y plazos de adecuación institucional.",
      items: [
        {
          topic: "Representación en Parlasur",
          before: "Los parlamentarios del Mercosur se elegían por voto directo.",
          now: "Pasan a ser designados por el Congreso hasta nueva definición regional.",
          example:
            "El elector dejaría de votar una boleta específica de Parlasur en elección general, mientras rija la transición."
        },
        {
          topic: "Adecuación de partidos vigentes",
          before: "No existía esta ventana específica de adecuación sobre nuevos requisitos.",
          now: "Plazo hasta 30/06/2027 para adecuación general y 180 días para adecuar cartas orgánicas.",
          example:
            "Una fuerza con personería vigente debe ajustar estructura y carta orgánica dentro de esos plazos para mantener cumplimiento formal."
        }
      ]
    }
  ],
  legalFramework: [
    {
      title: "Título I",
      body: "Reforma de la Ley Orgánica de los Partidos Políticos N° 23.298 (arranque del articulado en Art. 1)."
    },
    {
      title: "Título II",
      body: "Reforma de la Ley N° 26.571 (democratización, transparencia y equidad electoral)."
    },
    {
      title: "Título III",
      body: "Reforma del Código Electoral Nacional (en el PDF aparece desde Art. 20)."
    },
    {
      title: "Título IV",
      body: "Reforma de la Ley N° 26.215 de Financiamiento de los Partidos Políticos (en el PDF aparece desde Art. 34)."
    },
    {
      title: "Título V",
      body: "Modificación a la Ley N° 27.120 de elección de parlamentarios del MERCOSUR (en el PDF aparece desde Art. 70)."
    },
    {
      title: "Título VI",
      body: "Otras modificaciones complementarias."
    },
    {
      title: "Título VII",
      body: "Disposiciones finales y régimen de adecuación de partidos vigentes."
    }
  ],
  sources: [
    {
      file: "INLEG-2026-40722643-APN-PTE.pdf",
      note: "Texto del proyecto de ley (Poder Ejecutivo Nacional)."
    }
  ]
};
