export const dashboardData = {
  projectName: "Reforma Electoral Integral",
  reference: "INLEG-2026-40722643-APN-PTE",
  updatedAt: "24/04/2026",
  summary:
    "Síntesis integral del proyecto con foco en requisitos partidarios, régimen electoral, financiamiento, Parlasur y disposiciones de implementación.",
  kpis: [
    { label: "Electores nacionales", value: 36477204, format: "number" },
    { label: "Partidos nacionales", value: 48, format: "number" },
    { label: "Partidos distritales", value: 713, format: "number" },
    { label: "Costo elección legislativa 2025", value: 395133, format: "millions_ars" },
    { label: "Gasto elección 2023", value: 422537, format: "millions_ars" },
    { label: "Contrato Correo Argentino 2025", value: 223006358830, format: "ars" },
    { label: "Escrutinio + telegramas (INDRA)", value: 21000, format: "millions_ars_iva" },
    { label: "Confección BUP", value: 43000, format: "millions_ars_iva" },
    { label: "Tope aportes privados (nacional)", value: "de $280 M a ~ $5.000 M" },
    { label: "Adecuación partidos vigentes", value: "Hasta 30/06/2027 + 180 días" }
  ],
  charts: {
    partiesComposition: [
      { label: "Partidos nacionales", value: 48, color: "#1f4e8c" },
      { label: "Partidos distritales", value: 713, color: "#7f9fc7" }
    ],
    electionCosts: [
      { label: "Elección 2023 (total)", value: 422537, color: "#163f78" },
      { label: "Elección 2025 (total)", value: 395133, color: "#2c5a9d" },
      { label: "Correo 2025", value: 223006, color: "#5a7fb1" },
      { label: "INDRA 2025", value: 21000, color: "#8aa7cd" },
      { label: "BUP 2025", value: 43000, color: "#3f6ca5" }
    ],
    keyJumps: [
      {
        label: "Afiliados para crear partido",
        segment: "partidos",
        beforeValue: 0.4,
        beforeText: "0,4% (4 por mil)",
        nowValue: 0.5,
        nowText: "0,5%"
      },
      {
        label: "Distritos para orden nacional",
        segment: "partidos",
        beforeValue: 5,
        beforeText: "5",
        nowValue: 10,
        nowText: "10"
      },
      {
        label: "Caducidad por votos",
        segment: "partidos",
        beforeValue: 2,
        beforeText: "2%",
        nowValue: 3,
        nowText: "3%"
      },
      {
        label: "Límite aporte privado",
        segment: "financiamiento",
        beforeValue: 2,
        beforeText: "2%",
        nowValue: 35,
        nowText: "35%"
      },
      {
        label: "Veda electoral y anuncios en medios",
        segment: "financiamiento",
        beforeValue: 35,
        beforeText: "35 días (avisos) / 8 días (sondeos)",
        nowValue: 2,
        nowText: "Sin plazo previo (avisos) / 48 hs (sondeos)"
      }
    ]
  },
  segmentGroups: [
    {
      id: "partidos",
      title: "Segmento 1 · Reforma de los Partidos Políticos",
      summary:
        "Más exigencias para creación, reconocimiento y sostenimiento de personerías partidarias.",
      coreIdea:
        "Establece criterios más restrictivos para la creación de partidos políticos, alianzas y confederaciones, para convertir partidos distritales en nacionales y moderniza mecanismos de afiliación.",
      items: [
        {
          topic: "Creación de partidos: fundadores y afiliados",
          priority: 1,
          before:
            "No se exigía piso de 50 fundadores y el requisito de afiliados era de 4 por mil del padrón del distrito.",
          now:
            "Se requieren 50 fundadores individualizados, no afiliados a otros partidos. El piso de afiliados sube a 0,5% con tope de cálculo de 2.000.000 de electores.",
          example:
            "Distrito de 100.000 electores: antes 400 afiliados; ahora 500. Distrito tope 2.000.000: antes 4.000; ahora 10.000."
        },
        {
          topic: "Apoderados",
          priority: 2,
          before: "El régimen no establecía con esta claridad responsabilidad solidaria por sus presentaciones.",
          now:
            "Los apoderados pasan a ser solidariamente responsables por los trámites ante la justicia electoral.",
          example:
            "Una presentación irregular puede comprometer responsabilidad conjunta de quienes actúen como apoderados."
        },
        {
          topic: "Partidos de orden nacional",
          priority: 1,
          before: "Bastaba tener personería en 5 distritos.",
          now:
            "Sube a 10 distritos y se exige además afiliación mínima equivalente al 0,1% de electores nacionales.",
          example:
            "Según el resumen aportado para el tablero, ese umbral se estima en torno a 365.000 afiliados."
        },
        {
          topic: "Alianzas y confederaciones",
          priority: 1,
          before:
            "Partidos distritales podían aliarse con partidos nacionales, mecanismo utilizado para evitar caducidad nacional por desempeño.",
          now:
            "Se elimina esa posibilidad. Alianzas nacionales entre partidos nacionales siguen posibles, pero deben pactar adjudicación de votos para el cálculo de caducidad.",
          example:
            "Una fuerza de distrito ya no podría sostener estrategia nacional aliándose con un partido de orden nacional."
        },
        {
          topic: "Modernización de la participación política (afiliación digital y biométrica)",
          priority: 2,
          before: "El esquema tradicional no explicitaba afiliación electrónica con autenticación biométrica.",
          now:
            "Se habilitan factores biométricos y ficha electrónica; la reglamentación definirá modalidades de aplicación.",
          example:
            "La validación de identidad podría realizarse por canales digitales definidos por la reglamentación."
        },
        {
          topic: "Caducidad de partidos",
          priority: 1,
          before:
            "Caducidad cuando un partido obtenía menos del 2% en 2 elecciones consecutivas de forma individual.",
          now:
            "El piso sube al 3% y debe cumplirse en al menos una de dos elecciones nacionales sucesivas.",
          example:
            "Si en dos elecciones nacionales consecutivas no alcanza al menos una vez el 3%, queda expuesto a caducidad."
        }
      ]
    },
    {
      id: "codigo",
      title: "Segmento 2 · Código Electoral y Reglas de Competencia",
      summary:
        "Reordenamiento de oferta electoral, avales, reemplazos, boleta única y reglas de competencia electoral.",
      coreIdea:
        "Reordena la oferta electoral y el régimen de candidaturas con nuevas exigencias de avales, lista única por categoría y cambios en selección e inelegibilidad.",
      items: [
        {
          topic: "Candidatos y listas",
          priority: 1,
          before:
            "Podían darse esquemas con más de una lista por categoría en un mismo armado partidario territorial.",
          now:
            "Cada agrupación sólo puede presentar una lista por categoría; cada candidato sólo por una agrupación y una categoría.",
          example:
            "Un candidato presidencial no podría tener dos listas distintas de diputados nacionales en la misma provincia."
        },
        {
          topic: "Avales para candidaturas",
          priority: 1,
          before: "No había este diseño unificado de umbrales y carga digital obligatoria.",
          now:
            "Se exigen avales: 0,5% distrital para diputados/senadores y 0,1% nacional para presidente/vice; ciudadano avala un solo partido nacional y uno distrital.",
          example:
            "La carga de avales se canaliza por plataforma digital de la Cámara Nacional Electoral."
        },
        {
          topic: "Reemplazo de candidatos",
          priority: 2,
          before:
            "El efecto inmediato de sentencia de inelegibilidad no estaba explicitado en los mismos términos.",
          now:
            "Ante sentencia de inelegibilidad, sólo cabe recurso extraordinario y su interposición no suspende el cumplimiento; se corre el orden de lista.",
          example:
            "La cuestión de paridad/género del reemplazo queda sin precisión adicional específica en el texto comparado."
        },
        {
          topic: "Boleta única",
          priority: 2,
          before: "No contemplaba estas opciones específicas en el mismo formato.",
          now:
            "Se incorpora casillero de Lista Completa, elección de color por agrupación (si no, blanco) y sorteo de orden en listas.",
          example:
            "Dos agrupaciones con idéntica categoría podrían diferenciarse por color elegido y posición sorteada."
        },
        {
          topic: "PASO",
          priority: 1,
          before: "Regían Primarias Abiertas, Simultáneas y Obligatorias.",
          now: "Se eliminan PASO; cada partido define internamente su sistema de selección de candidatos.",
          example:
            "Una agrupación podría elegir candidaturas mediante congreso partidario, internas cerradas u otro mecanismo interno."
        },
        {
          topic: "Ficha Limpia",
          priority: 1,
          before: "No regía esta inhabilidad con los mismos supuestos y alcance institucional.",
          now:
            "No pueden ser candidatos condenados por delitos dolosos con segunda instancia dictada antes del 31/12 del año no electoral. Recursos no suspenden efectos. La inelegibilidad rige hasta cumplimiento o revocación.",
          example:
            "También se extiende a designaciones en cargos como Jefatura de Gabinete, ministros, secretarios, autoridades de entes y directores con participación estatal."
        }
      ]
    },
    {
      id: "financiamiento",
      title: "Segmento 3 · Campañas Electorales y Aportes",
      summary:
        "Cambios en reglas de campaña, pauta en medios, origen de fondos, topes, controles, veda y gastos.",
      coreIdea:
        "Reconfigura la campaña electoral en medios y el esquema de financiamiento político, con menos obligaciones públicas y mayor centralidad de aportes privados.",
      items: [
        {
          topic: "Campaña electoral y sanciones",
          priority: 1,
          before:
            "Había plazos de restricción para avisos (35 días) y publicidad de actos de gobierno (25 días), con sanciones adicionales para medios y financiamiento.",
          now:
            "Se eliminan esos plazos previos; se agregan multas de 2.000 a 50.000 módulos por infracciones, se aumentan multas a personas humanas y se eliminan sanciones a dueños de medios; se elimina la inhabilitación temporal para recibir cierto financiamiento de campaña.",
          example:
            "Una infracción publicitaria podría derivar en multa económica alta sin activar sanción de bloqueo de financiamiento por 1-2 años."
        },
        {
          topic: "Veda electoral (anuncios y sondeos)",
          priority: 1,
          before:
            "La pauta publicitaria tenía plazos previos de restricción (35 días) y los sondeos quedaban vedados desde 8 días antes hasta 3 horas después de la elección.",
          now:
            "Se eliminan los plazos previos para avisos en medios y la veda de sondeos se reduce a 48 horas antes y 2 horas después.",
          example:
            "La comunicación electoral puede extenderse más cerca de la elección, con ventana más corta de restricción para sondeos."
        },
        {
          topic: "Eliminación de campaña en medios gratis",
          priority: 1,
          before: "Existía obligación de ceder espacios gratuitos de campaña en medios.",
          now: "Se elimina esa obligación de cesión gratuita.",
          example:
            "La planificación de campaña deja de contar con una cuota obligatoria de espacios gratuitos en radio y TV."
        },
        {
          topic: "Renuncia al aporte público anual",
          priority: 2,
          before: "No estaba prevista esta renuncia en el mismo alcance operativo.",
          now: "Se habilita que partidos renuncien al aporte público anual que les corresponda.",
          example:
            "Una agrupación podría sostener su estrategia con financiamiento permitido de otra fuente y desistir del aporte anual estatal."
        },
        {
          topic: "Destino de fondos de capacitación",
          priority: 1,
          before:
            "20% obligatorio para capacitación en función pública y obligación de destinar 30% a menores de 30 y 30% a mujeres.",
          now:
            "El mínimo baja al 10% y se eliminan las asignaciones obligatorias por edad y género.",
          example:
            "Sobre $100 de fondos, antes $20 eran obligatorios para capacitación con subcupos; ahora $10 sin esos subcupos."
        },
        {
          topic: "Prohibiciones para recibir aportes",
          priority: 1,
          before:
            "Se permitían algunos aportes de extranjeros domiciliados en el país y el listado de sujetos alcanzados era más acotado.",
          now:
            "Se prohíben aportes de personas extranjeras, firmas locales controladas por extranjeros y condenados/procesados por delitos específicos (lavado, narcotráfico, contrabando, asociaciones ilícitas, delitos contra administración pública, trata, terrorismo, extorsión, entre otros).",
          example:
            "Estos sujetos tampoco pueden contratar, por sí o terceros, publicidad político-electoral."
        },
        {
          topic: "Montos máximos de aportes privados",
          priority: 1,
          before: "Límite del 2% sobre la base legal vigente.",
          now: "La base se calcula como electores x 35 y el límite sube al 35%.",
          example:
            "Según los datos del tablero, el máximo nacional pasaría de alrededor de $280.000.000 a cerca de $5.000.000.000."
        },
        {
          topic: "Reporte semanal y nuevos criterios de control",
          priority: 1,
          before: "No había obligación de informar semanalmente aportes al juzgado.",
          now:
            "Se agrega reporte semanal de aportes, regla sobre gastos independientes y prohibición de contratación de servicios de personas extranjeras.",
          example:
            "El informe de campaña debería incorporar de manera continua los ingresos y gastos de terceros en los términos definidos."
        },
        {
          topic: "Bancos y normativa UIF",
          priority: 2,
          before: "El circuito estaba más concentrado en BNA.",
          now: "Se habilitan aportes vía bancos distintos al BNA, con adecuación a normativa UIF.",
          example:
            "La entidad financiera interviniente debería aplicar controles compatibles con prevención de lavado y trazabilidad."
        },
        {
          topic: "Gastos de terceros",
          priority: 2,
          before: "Estaba prohibido que terceros realicen ciertos gastos de publicidad electoral.",
          now:
            "Se elimina esa prohibición y se agrega obligación de detallar contratación de terceras personas en informe final de gastos.",
          example:
            "Un gasto de tercero podría ser admisible, pero debe quedar identificado y rendido en la trazabilidad final."
        },
        {
          topic: "Capítulos derogados",
          priority: 1,
          before:
            "Regían límite de gastos de campaña y capítulos de financiamiento público y publicidad oficial en medios.",
          now:
            "Se derogan límite de gastos de campaña, capítulo de financiamiento público y capítulo de publicidad oficial en medios.",
          example:
            "El marco operativo de control se desplaza desde topes clásicos hacia nuevas reglas de origen, reporte y trazabilidad."
        }
      ]
    },
    {
      id: "parlasur",
      title: "Segmento 4 · Parlasur",
      summary:
        "Cambios en estatus, inmunidades y modalidad de integración de parlamentarios.",
      coreIdea:
        "Elimina la elección directa al Parlasur y redefine su estatus institucional, inmunidades y régimen de viáticos.",
      items: [
        {
          topic: "Estatus e inmunidades",
          priority: 2,
          before: "Había equiparación de privilegios e inmunidades con diputados nacionales.",
          now: "Se elimina ese emparejamiento.",
          example:
            "Las condiciones institucionales de los representantes del Parlasur dejan de replicar automáticamente a las de diputados nacionales."
        },
        {
          topic: "Elección de parlamentarios",
          priority: 1,
          before: "Elección directa por voto popular.",
          now:
            "Se elimina la elección directa; pasan a ser elegidos proporcionalmente entre diputados nacionales hasta que Mercosur defina el día del Mercosur ciudadano.",
          example:
            "En transición, la integración no se resolvería por boleta específica de voto directo."
        },
        {
          topic: "Viáticos y remuneración",
          priority: 2,
          before: "El esquema incluía régimen económico distinto bajo el modelo previo.",
          now: "La Cámara de Diputados cubre viáticos y no perciben salarios.",
          example:
            "El costo directo se orienta a viáticos operativos en lugar de salario periódico."
        }
      ]
    },
    {
      id: "otras",
      title: "Segmento 5 · Otras Disposiciones",
      summary:
        "Disposiciones transitorias y plazos de adecuación para fuerzas vigentes.",
      coreIdea:
        "Fija plazos concretos para que los partidos vigentes adecuen su funcionamiento al nuevo régimen.",
      items: [
        {
          topic: "Adecuación de partidos vigentes",
          priority: 1,
          before: "No existía este cronograma específico de adecuación integral.",
          now:
            "Plazo hasta el 30 de junio de 2027 para adecuarse a los nuevos requisitos y 180 días para adecuar cartas orgánicas.",
          example:
            "Una fuerza vigente debería completar adecuaciones estatutarias y administrativas dentro de ambas ventanas temporales."
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
  importantArticles: [
    {
      article: "Artículo 1",
      title: "Solicitud de creación de partido",
      literal:
        "Cambia el requisito del cuatro por mil para presentar la solicitud de creación del partido, establece un mínimo de Cincuenta (50) ciudadanos. Y agrega la obligación de que los fundadores estén individualizados y con DDJJ de que no están afiliados a ningún otro partido. (art. 7, ley 23.298).",
      comment:
        "Eleva la barrera inicial de entrada y refuerza controles de identidad y exclusividad de afiliación desde la constitución del partido."
    },
    {
      article: "Artículo 2",
      title: "Personería",
      literal:
        "Aumenta al 0,5% el número de electores necesarios para ser reconocido. Se considerará que ningún distrito cuenta con más de dos millones de electores. (art. 7 bis, ley 23.298).",
      comment:
        "Incrementa el umbral de afiliados para lograr personería y fija tope de cálculo para distritos de mayor tamaño."
    },
    {
      article: "Artículo 7",
      title: "Partidos nacionales",
      literal:
        "Eleva el requisito de estar reconocido en 5 a 10 distritos para transformarse en partidos nacionales y que la suma de sus afiliados represente al menos el 0,1% del Registro. Para conservar la personería jurídica el partido deberá cumplir permanentemente los requisitos (10 distritos + 0,1% del Registro).",
      comment:
        "Endurece la transición de partido distrital a nacional y vuelve permanente el cumplimiento de los requisitos para sostener la personería."
    },
    {
      article: "Artículo 11",
      title: "Moderniza la afiliación",
      literal:
        "Incorpora la posibilidad de comprobar la identidad por autenticación biométrica y la inscripción por medios electrónicos (a reglamentar).",
      comment:
        "Digitaliza el proceso de afiliación y habilita validación biométrica para trazabilidad e identificación."
    },
    {
      article: "Artículo 14",
      title: "Restricciones para ser candidato (Ficha Limpia)",
      literal:
        "Incorpora la prohibición de ser candidatos a las personas condenadas por delitos dolosos, con condena en segunda instancia, dictada antes del 31/12 del año anterior al proceso electoral. Si la condena es posterior, solo tendrá efecto con posterioridad al proceso electoral. La inelegibilidad durará hasta la revocación o el cumplimiento de la pena correspondiente.",
      comment:
        "Introduce una regla de inelegibilidad con corte temporal específico y mantiene el efecto hasta revocación o cumplimiento de pena."
    },
    {
      article: "Artículo 16",
      title: "Caducidad de los partidos",
      literal:
        "Eleva del 2% al 3% la cantidad de votos que debe obtener en al menos una de las dos últimas elecciones por cada partido. En el caso de alianzas electorales, los porcentajes por partido se adjudicarán conforme a lo acordado en la formación de la alianza.",
      comment:
        "Aumenta el umbral de supervivencia electoral y obliga a definir distribución de votos entre aliados."
    },
    {
      article: "Artículo 23",
      title: "Listas y avales",
      literal:
        "Las agrupaciones políticas solo podrán presentar UNA lista por categoría y los candidatos solo podrán serlo en UNA lista y en UNA categoría. Para presentar candidatos las agrupaciones deberán reunir avales: Senadores y Diputados Nacionales, cantidad de avales equivalente a su número de afiliados requerido por ley 23.298; para Presidente y Vicepresidente, lo mismo más lo requerido para obtener personería jurídica definitiva en al menos 10 distritos electorales. Un solo aval por elector. La CNE instrumentará una plataforma digital para el registro de avales.",
      comment:
        "Limita la multiplicidad de boletas por categoría y endurece la condición de avales para competir."
    },
    {
      article: "Artículo 25",
      title: "Boleta única",
      literal:
        "Elimina referencia a las PASO. Incorpora un casillero para votar lista completa.",
      comment:
        "Ajusta la boleta única al nuevo esquema sin PASO y simplifica el voto por oferta partidaria integral."
    },
    {
      article: "Artículo 30",
      title: "Campaña electoral y debate presidencial",
      literal:
        "Reemplaza el capítulo IV bis, de la campaña electoral y el debate presidencial obligatorio. Habilita la posibilidad de realizar publicidad en medios de comunicación incluso fuera del plazo de la campaña electoral. Elimina el debate presidencial obligatorio.",
      comment:
        "Amplía márgenes de comunicación política en medios y elimina la obligatoriedad del debate presidencial."
    },
    {
      article: "Artículo 52",
      title: "Tope de aportes privados",
      literal:
        "Eleva el monto máximo permitido por persona física o jurídica del 2% al 35% del monto que surja de multiplicar el valor del módulo electoral por la cantidad de electores registrados.",
      comment:
        "Expande de forma significativa el aporte privado máximo permitido por aportante."
    },
    {
      article: "Artículo 55",
      title: "Gastos en publicidad",
      literal:
        "Elimina la prohibición de realizar gastos en publicidad.",
      comment:
        "Desregula el gasto publicitario en campaña respecto de la restricción previa."
    },
    {
      article: "Artículo 69",
      title: "Derogaciones en financiamiento y campaña",
      literal:
        "Elimina el límite de gastos de campaña. Elimina el capítulo vinculado al financiamiento público de las campañas electorales y elimina el capítulo referido a la publicidad oficial en medios.",
      comment:
        "Desarma pilares del régimen de control previo y reduce instrumentos públicos de financiamiento y pauta."
    },
    {
      article: "Artículo 71",
      title: "ParlaSur",
      literal:
        "Los diputados del ParlaSur serán designados de entre los legisladores del Congreso Nacional hasta tanto el Consejo del Mercado Común establezca el \"Día del Mercosur\". La Cámara de Diputados cubrirá las vacantes de forma proporcional a la composición de la cámara. No recibirán un salario extra; la HCDN se hará cargo de los viáticos en los que incurrieren en ejercicio de su función. Entra en vigencia al vencimiento de los mandatos de los actuales diputados del ParlaSur.",
      comment:
        "Pasa de elección directa a designación legislativa transitoria y redefine su régimen económico."
    },
    {
      article: "Artículo 75",
      title: "Adecuación de agrupaciones vigentes",
      literal:
        "Otorga plazo hasta el 30 de junio de 2027 para adecuar las agrupaciones políticas existentes al cumplimiento de los nuevos requisitos para lograr y mantener su personería jurídica.",
      comment:
        "Establece una ventana de transición concreta para adaptación al nuevo marco."
    },
    {
      article: "Artículo 77",
      title: "Alcance ampliado de Ficha Limpia",
      literal:
        "Las personas inhibidas para ser candidatos conforme a lo establecido en esta ley (Ficha Limpia), no podrán ser designadas como Jefe de Gabinete de Ministros, Ministros, Secretarios, Subsecretarios, autoridades de entes y organismos descentralizados e instituciones de la seguridad social, integrantes de cuerpos colegiados, personal diplomático en actividad, directores de empresas o entes de participación estatal o funcionales equivalentes.",
      comment:
        "Extiende la inhabilitación más allá de las candidaturas, alcanzando nombramientos en alta función pública."
    }
  ],
  sources: [
    {
      file: "INLEG-2026-40722643-APN-PTE.pdf",
      note: "Texto del proyecto de ley (Poder Ejecutivo Nacional)."
    }
  ]
};
