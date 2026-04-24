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
      { label: "Partidos distritales", value: 700, color: "#fde500" },
      { label: "Partidos nacionales", value: 45, color: "#b4b3b8" }
    ],
    electionCosts: [
      { label: "Elección 2023 (total)", value: 422537, color: "#fde500" },
      { label: "Elección 2025 (total)", value: 395133, color: "#d2d1d5" },
      { label: "Correo 2025", value: 223006, color: "#b4b3b8" },
      { label: "INDRA 2025", value: 21000, color: "#94939a" },
      { label: "BUP 2025", value: 43000, color: "#74737b" }
    ]
  },
  comparisons: [
    {
      topic: "Creación de partidos distritales",
      current: "Piso de afiliados: 4 por mil del padrón del distrito.",
      proposal:
        "Piso de afiliados: 0,5% del padrón del distrito, con tope de cálculo sobre 2.000.000 electores."
    },
    {
      topic: "Partidos de orden nacional",
      current: "Personería nacional con presencia en 5 distritos.",
      proposal:
        "Sube a 10 distritos + afiliados equivalentes al 0,1% del registro nacional (hoy, aprox. 365.000)."
    },
    {
      topic: "Alianzas",
      current:
        "Partidos distritales y nacionales pueden combinarse para distintos acuerdos.",
      proposal:
        "Elimina alianzas entre partidos de distrito y nacionales; partidos nacionales deben definir adjudicación de votos."
    },
    {
      topic: "Primarias (PASO)",
      current: "Sistema de Primarias Abiertas, Simultáneas y Obligatorias.",
      proposal:
        "Se eliminan PASO; cada partido define internamente su mecanismo de selección de candidaturas."
    },
    {
      topic: "Caducidad por desempeño electoral",
      current: "Caducidad con 2 elecciones consecutivas debajo del 2% de votos.",
      proposal:
        "Eleva piso al 3% y exige cumplirlo en al menos una de dos elecciones nacionales sucesivas."
    },
    {
      topic: "Avales para candidaturas",
      current: "No se exigía este esquema digital estandarizado para avales.",
      proposal:
        "Diputados/Senadores: 0,5% del distrito. Presidente/Vice: 0,1% nacional. Carga digital en plataforma CNE."
    },
    {
      topic: "Límite de aportes privados",
      current: "Límite del 2% sobre base legal vigente.",
      proposal:
        "Pasa al 35% sobre la base definida por electores x 35, con incremento fuerte del techo de aportes."
    },
    {
      topic: "Veda de sondeos",
      current: "Desde 8 días antes hasta 3 horas después de la elección.",
      proposal: "Desde 48 horas antes hasta 2 horas después de la elección."
    }
  ],
  sections: [
    {
      id: "partidos",
      label: "1. Reforma de Partidos Políticos",
      notes: [
        {
          title: "Fundadores y afiliaciones",
          detail:
            "Exige 50 fundadores individualizados, sin pertenencia a otros partidos, y eleva el umbral de afiliados para reconocimiento.",
          tags: ["Institucional", "Operativo"]
        },
        {
          title: "Responsabilidad de apoderados",
          detail:
            "Los apoderados pasan a tener responsabilidad solidaria por trámites ante la justicia electoral.",
          tags: ["Riesgo legal"]
        },
        {
          title: "Orden nacional",
          detail:
            "Aumenta de 5 a 10 distritos para personería nacional y exige mínimo agregado de afiliados.",
          tags: ["Escala federal"]
        },
        {
          title: "Afiliación electrónica",
          detail:
            "Habilita autenticación biométrica y ficha electrónica, con implementación delegada a reglamentación.",
          tags: ["Digitalización"]
        },
        {
          title: "Ficha limpia ampliada",
          detail:
            "Inhabilita candidaturas con condenas en supuestos definidos y extiende alcance a cargos ejecutivos y autoridades de entes estatales.",
          tags: ["Integridad pública"]
        }
      ]
    },
    {
      id: "codigo",
      label: "2. Código Electoral",
      notes: [
        {
          title: "Lista única por categoría",
          detail: "Cada agrupación política solo puede presentar una lista por categoría de cargo.",
          tags: ["Oferta electoral"]
        },
        {
          title: "Un candidato, una agrupación, una categoría",
          detail:
            "Restringe simultaneidad de postulaciones en distintos espacios o categorías.",
          tags: ["Ordenamiento"]
        },
        {
          title: "Avales digitalizados",
          detail:
            "Obliga presentación de avales con porcentajes mínimos y carga mediante plataforma digital de la CNE.",
          tags: ["Control"]
        },
        {
          title: "Sustitución de candidatos",
          detail:
            "Si la Cámara Electoral declara inelegibilidad, el recurso extraordinario no suspende efectos y corre el orden de lista.",
          tags: ["Procedimiento"]
        },
        {
          title: "Boleta única y campaña",
          detail:
            "Incorpora casillero de lista completa, sorteo de orden y cambios en plazos y sanciones de publicidad electoral.",
          tags: ["Gestión electoral", "Comunicación"]
        }
      ]
    },
    {
      id: "aportes",
      label: "3. Aportes de Campaña",
      notes: [
        {
          title: "Renuncia a aporte público anual",
          detail:
            "Habilita a partidos a renunciar al aporte público anual que les corresponda.",
          tags: ["Financiamiento"]
        },
        {
          title: "Destino de fondos",
          detail:
            "Reduce el mínimo de capacitación en función pública de 20% a 10% y elimina cupos obligatorios por edad y género.",
          tags: ["Capacitación"]
        },
        {
          title: "Nuevos sujetos prohibidos",
          detail:
            "Amplía restricciones para aportantes extranjeros, controlados por extranjeros y condenados o procesados por delitos específicos.",
          tags: ["Compliance"]
        },
        {
          title: "Suba del tope privado",
          detail:
            "Eleva límite de aportes privados del 2% al 35% sobre la base de cálculo legal, con alto impacto de escala.",
          tags: ["Impacto financiero"]
        },
        {
          title: "Transparencia semanal",
          detail:
            "Incorpora obligación de informar semanalmente aportes al juzgado federal electoral.",
          tags: ["Reporte"]
        }
      ]
    },
    {
      id: "parlasur",
      label: "4. Parlasur",
      notes: [
        {
          title: "Fin de elección directa",
          detail:
            "Los parlamentarios del Mercosur pasarían a ser designados por el Congreso hasta definición regional.",
          tags: ["Representación"]
        },
        {
          title: "Privilegios e inmunidades",
          detail:
            "Elimina equiparación de privilegios con diputados nacionales y modifica esquema de viáticos y salarios.",
          tags: ["Régimen institucional"]
        }
      ]
    },
    {
      id: "otras",
      label: "5. Otras disposiciones",
      notes: [
        {
          title: "Espacios gratuitos en medios",
          detail: "Elimina obligación de cesión gratuita de espacios para campaña.",
          tags: ["Medios", "Campaña"]
        },
        {
          title: "Ventana de adecuación",
          detail:
            "Partidos vigentes tendrían plazo hasta el 30 de junio de 2027 para adecuarse, más 180 días para cartas orgánicas.",
          tags: ["Implementación"]
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
