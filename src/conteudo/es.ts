import type { Conteudo } from "./tipos";

/* Español. Refleja src/conteudo/pt.ts. */
export const es: Conteudo = {
  meta: {
    titulo: "Códice · Del espacio al insight",
    descricao:
      "Códice controla el display que está en la tienda y la semana de exposición que compra la industria, en el mismo sistema. Flota, contratos, campañas, sensores y prueba de ejecución en el punto de venta.",
    palavras: "retail media, display de PDV, trade marketing, gestión de displays, ejecución en punto de venta",
    ogAlt: "Códice, plataforma de displays inteligentes y retail media",
  },
  nav: {
    links: [
      { id: "manifesto", rotulo: "Visión" },
      { id: "desafio", rotulo: "El problema" },
      { id: "solucao", rotulo: "El giro" },
      { id: "sistema", rotulo: "El sistema" },
      { id: "pdv", rotulo: "En tienda" },
      { id: "faq", rotulo: "Preguntas" },
    ],
    cta: "Agendar demostración",
    abrirMenu: "Abrir menú",
    fecharMenu: "Cerrar menú",
    idioma: "Idioma",
    irParaConteudo: "Ir al contenido",
  },
  abertura: { palavra: "Del espacio al insight", pular: "Saltar apertura" },
  heroi: {
    chapeu: "Plataforma de retail media",
    titulo: ["Del espacio", "al", "insight"],
    lead:
      "Todo comercio vende espacio. Pocos pueden probar lo que ese espacio entregó. Códice controla el display que está en la tienda y la semana de exposición que compra la industria, con sensor, contrato y prueba de ejecución ligados al mismo activo.",
    ctaPrimario: "Agendar demostración",
    ctaSecundario: "Ver cómo funciona",
    selos: [
      { valor: "2", rotulo: "inventarios en el mismo activo" },
      { valor: "1 semana", rotulo: "es la unidad de venta" },
      { valor: "42", rotulo: "pantallas de producto" },
      { valor: "11", rotulo: "perfiles de acceso" },
    ],
    rolar: "Desplázate para empezar",
    painel: {
      barra: "codice · panel de operación",
      kpis: [
        { rotulo: "Ocupación de medios", valor: "78%", nota: "datos de ejemplo" },
        { rotulo: "Displays instalados", valor: "42", nota: "8 tiendas" },
        { rotulo: "Ingreso recurrente", valor: "R$ 96,4 mil", nota: "mes en curso" },
      ],
      graficoTitulo: "Ingreso por semana",
      gradeTitulo: "Inventario por semana",
      legenda: ["Vendida", "Reservada", "Libre"],
    },
  },
  manifesto: {
    chapeu: "La creencia",
    titulo: "El espacio de la tienda es el activo más caro del retail y el menos medido.",
    paragrafos: [
      "Una cabecera de góndola bien ubicada cuesta más que la campaña que anuncia el producto expuesto en ella. Aun así, ese espacio suele negociarse por teléfono, controlarse en una planilla y comprobarse con una foto suelta en un grupo de mensajes.",
      "Del otro lado del mostrador, la industria aprendió a exigir prueba. Quien vende exposición sin dato pierde la conversación de precio en la renovación. Quien compra sin dato paga por una promesa y descubre el resultado demasiado tarde.",
      "Códice existe para cerrar esa distancia. No convierte la planilla en pantalla: reemplaza la planilla por un sistema que impide el error en el acto de la venta, mide lo que pasa dentro de la tienda y devuelve la prueba antes de que alguien la pida.",
    ],
    assinatura: "Del espacio al insight.",
    marquee: ["Espacio", "Contrato", "Semana", "Sensor", "Prueba", "Insight"],
  },
  desafio: {
    chapeu: "El problema",
    titulo: "Cuatro fugas silenciosas se comen el margen de quien vende exposición.",
    lead:
      "Ninguna aparece en el cierre del mes. Todas aparecen en la renovación, cuando el cliente pregunta qué pasó con su dinero.",
    instrucao: "Toca una fuga para ver el efecto",
    itens: [
      {
        n: "01",
        titulo: "La misma semana vendida dos veces",
        texto: "Dos vendedores cierran la misma exposición, en el mismo display, para marcas competidoras. Nadie lo nota hasta que el material llega a la tienda.",
        efeito: "Efecto: descuento de compensación, cupo perdido y un cliente que pasa a revisar cada línea del contrato.",
      },
      {
        n: "02",
        titulo: "El activo que sale del mapa",
        texto: "El display sale del centro de distribución, pasa por dos tiendas y desaparece del control. Sigue en el balance, pero dejó de generar ingreso.",
        efeito: "Efecto: capital inmovilizado en equipo ocioso y compra de activos nuevos sin necesidad.",
      },
      {
        n: "03",
        titulo: "Ejecución sin prueba",
        texto: "La industria pregunta si el material fue instalado. La respuesta es una foto sin fecha, sin tienda y sin responsable.",
        efeito: "Efecto: presupuesto de trade cuestionado, descuento en el pago y la próxima campaña yendo a la competencia.",
      },
      {
        n: "04",
        titulo: "Precio a ojo",
        texto: "Sin ocupación medida y sin costo por activo, el cupo se vuelve una negociación de intuición, siempre hacia abajo.",
        efeito: "Efecto: margen que se evapora durante el año sin que nadie logre señalar dónde quedó.",
      },
    ],
  },
  solucao: {
    chapeu: "El giro",
    titulo: "Un display. Dos inventarios. Dos bloqueos distintos.",
    lead:
      "Este es el motor de Códice y la razón por la que no es un CRM adaptado. El mismo equipo puede pasar seis meses en la misma tienda y, en ese período, vender veintiséis semanas de exposición a seis anunciantes. Son dos calendarios independientes, cada uno con su propio conflicto que evitar.",
    abas: [
      {
        id: "fisico",
        nome: "Activo físico",
        unidade: "Unidad: display serializado",
        linhas: [
          { rotulo: "Cliente", valor: "El comercio que alquila el equipo" },
          { rotulo: "Ingreso", valor: "Suscripción mensual por display" },
          { rotulo: "Conflicto", valor: "Dos alquileres superpuestos del mismo activo" },
        ],
        travaTitulo: "El bloqueo",
        trava:
          "Cada activo tiene un documento de agenda con los períodos ocupados. Reservar es leer esa agenda, verificar la superposición y grabarla de vuelta dentro de la misma transacción. No existe ventana entre verificar y reservar.",
        demo: "Arrastra el período sobre la agenda del activo",
      },
      {
        id: "midia",
        nome: "Inventario de medios",
        unidade: "Unidad: display × semana",
        linhas: [
          { rotulo: "Cliente", valor: "El anunciante que compra exposición" },
          { rotulo: "Ingreso", valor: "Venta del cupo semanal" },
          { rotulo: "Conflicto", valor: "Dos ventas del mismo cupo" },
        ],
        travaTitulo: "El bloqueo",
        trava:
          "El cupo se identifica por el par activo y semana. Dos ventas simultáneas compiten por el mismo registro, la transacción detecta la escritura rival y la segunda falla con el motivo en pantalla. La campaña entra entera o no entra.",
        demo: "Haz clic en las semanas para armar una campaña",
      },
    ],
    fecho:
      "La diferencia entre un sistema que avisa del problema y uno que lo impide aparece en el primer mes de operación.",
  },
  sistema: {
    chapeu: "El sistema",
    titulo: "Nueve espacios de trabajo. Cada persona abre en el suyo.",
    lead:
      "La navegación desaparece para quien no tiene permiso y la regla vuelve a negar en el servidor, que es donde realmente importa. Elige un espacio para ver lo que hay dentro.",
    espacos: [
      { id: "inicio", nome: "Inicio", resumo: "La torre de control abre en lo que está fuera de lugar, no en lo que ya está bien.", telas: ["Panel", "Excepciones"] },
      { id: "comercial", nome: "Comercial", resumo: "Del primer contacto al contrato firmado, con la oferta que el vendedor envía a la cadena.", telas: ["Leads", "Oportunidades", "Propuestas", "Contratos", "Ofertas del vendedor"] },
      { id: "midia", nome: "Medios", resumo: "El inventario semana a semana, las campañas, las piezas aprobadas y la prueba de exhibición.", telas: ["Inventario de medios", "Campañas", "Piezas", "Pantallas y playlists", "Prueba de exhibición"] },
      { id: "rede", nome: "Red", resumo: "Comercios, tiendas y alquileres físicos con calendario propio. El código postal completa dirección y coordenada.", telas: ["Comercios", "Tiendas", "Alquileres físicos", "Calendario físico"] },
      { id: "frota", nome: "Flota", resumo: "Cada display serializado, el modelo, el mapa en vivo, los módulos de sensor y los rastreadores.", telas: ["Activos", "Mapa de la flota", "Modelos", "Sensores de tienda", "Dispositivos", "Rastreadores", "Eventos IoT"] },
      { id: "pdv", nome: "Punto de venta", resumo: "La ejecución en tienda: quién instaló, en qué bandera, con foto de fachada y la logística de las piezas.", telas: ["Inteligencia de PDV", "Tiendas y fachadas", "Plan de piezas", "Promotores", "Movimientos y CDs"] },
      { id: "operacao", nome: "Operación", resumo: "Instalación, inspección, incidencia, orden de servicio y stock, con modo campo desde el celular.", telas: ["Instalaciones", "Inspecciones", "Incidencias", "Órdenes de servicio", "Stock de piezas", "Modo campo", "Activar módulo smart"] },
      { id: "analises", nome: "Análisis", resumo: "Ingreso, ocupación, salud de la flota y desempeño por cadena, tienda y anunciante.", telas: ["Análisis"] },
      { id: "admin", nome: "Ajustes", resumo: "Usuarios, roles, tabla de precios, integraciones y auditoría de todo lo que se modificó.", telas: ["Usuarios", "Roles", "Tabla de precios", "Configuración", "Integraciones", "Auditoría"] },
    ],
    contagem: "pantallas en este espacio",
  },
  sensores: {
    chapeu: "Módulo smart",
    titulo: "El display deja de ser un mueble y se vuelve una fuente de datos.",
    lead:
      "Un módulo del tamaño de una caja de fósforos entra en el display y empieza a enviar lo que pasa a su alrededor. El técnico lo activa desde el celular en campo, el módulo aparece en el mapa y la tienda empieza a contar su propia historia.",
    itens: [
      { titulo: "Flujo frente a la góndola", texto: "Paso y presencia medidos por sensor de distancia, con radio calibrado tienda por tienda. Es movimiento, y el sistema lo dice con todas las letras." },
      { titulo: "Temperatura y humedad", texto: "El clima de la tienda registrado todo el día. Sirve para categorías sensibles y para explicar la variación de venta en semana de calor." },
      { titulo: "Salud de la señal y actualización remota", texto: "Un vigía revisa los módulos cada cinco minutos. Si uno cae, la incidencia se abre sola y se cierra sola cuando la señal vuelve. El firmware sube por la red, sin visita técnica." },
      { titulo: "Telemetría que se vuelve gráfico", texto: "Cada envío suma al histórico del día y alimenta la pantalla de sensores, el análisis por cadena y la conversación de precio con el anunciante." },
    ],
    legenda: "Display Códice con el módulo smart instalado",
  },
  pdv: {
    chapeu: "Ejecución en el punto de venta",
    titulo: "La pieza salió del CD. Ahora prueba que llegó.",
    lead:
      "Cada material lleva un código impreso. El promotor lo lee con su propio celular, sin instalar aplicación, y la instalación nace sellada. Lo que era un álbum de fotos se vuelve base de datos.",
    passos: [
      { titulo: "Pieza identificada", texto: "Cada material de PDV sale del centro de distribución con un código propio, ligado al proyecto y al plan de tiendas." },
      { titulo: "Lectura en tienda", texto: "El promotor apunta la cámara. Se abre la página de la pieza, con montaje, video, medidas y checklist." },
      { titulo: "Sello automático", texto: "Promotor, bandera, ciudad, coordenada y foto de fachada entran al sistema en el acto de la lectura." },
      { titulo: "Penetración medida", texto: "Lo planificado se encuentra con lo realizado: cuánto del plan se ejecutó, por bandera, por estado y por promotor." },
    ],
    camadas: [
      { nome: "Display", texto: "El equipo instalado en la tienda, con historial y salud del módulo." },
      { nome: "Rastreador", texto: "La etiqueta que viaja con la pieza y muestra la posición a lo largo del trayecto." },
      { nome: "Ejecución", texto: "El sello del promotor, con coordenada y foto de fachada tomada en el momento." },
    ],
  },
  metodo: {
    chapeu: "Cómo entra en tu operación",
    titulo: "Cuatro etapas hasta la primera semana vendida dentro del sistema.",
    lead:
      "La implantación sigue el ritmo de tu operación, sin frenar la venta. Cada etapa termina con algo funcionando, no con un informe.",
    etapas: [
      { prazo: "Etapa 01", titulo: "Diseño de la operación", texto: "Mapeamos cómo tu empresa alquila, vende exposición y opera en campo hoy. Roles, tabla de precios y reglas entran al sistema como son." },
      { prazo: "Etapa 02", titulo: "Red y flota en el aire", texto: "Comercios, tiendas, modelos y cada display serializado. Dirección y coordenada entran por el código postal, sin digitación manual." },
      { prazo: "Etapa 03", titulo: "Campo instrumentado", texto: "Módulos smart activados en las tiendas prioritarias y códigos impresos en las piezas. El mapa empieza a recibir dato real." },
      { prazo: "Etapa 04", titulo: "Operación asistida", texto: "Equipo capacitado por perfil, primera grilla de medios generada y acompañamiento de las primeras ventas dentro del sistema." },
    ],
  },
  honestidade: {
    chapeu: "Honestidad de los datos",
    titulo: "Lo que Códice se niega a afirmar.",
    lead:
      "El retail media está lleno de números inflados. La plataforma fue escrita con la regla contraria: cada métrica dice exactamente lo que midió y nada más. Eso es lo que sostiene la conversación con la industria en el segundo año de contrato.",
    itens: [
      { afirma: "Pasos medidos por el sensor", naoAfirma: "No son personas únicas" },
      { afirma: "Permanencia cerca del display", naoAfirma: "No es atención visual" },
      { afirma: "Posición en el momento de la lectura", naoAfirma: "No es rastreo continuo" },
      { afirma: "Producto retirado del estante", naoAfirma: "No es una venta" },
      { afirma: "Prueba de exhibición de la pieza", naoAfirma: "No es audiencia" },
      { afirma: "Conversión con dato de venta integrado", naoAfirma: "Sin venta en la base, no estima" },
    ],
  },
  perfis: {
    chapeu: "Para quién",
    titulo: "Tres negocios en el mismo sistema, cada uno viendo solo lo suyo.",
    lead:
      "El acceso no viene del login, viene del vínculo registrado por la administración. La cadena entra y ve su cadena. El anunciante entra y ve sus campañas. Nadie ve al vecino, ni cambiando la dirección en el navegador.",
    cartoes: [
      {
        tipo: "Operadora de medios",
        nome: "Quien alquila el display",
        pergunta: "¿Cuánto me da cada activo por mes y dónde está ahora?",
        ganhos: [
          "Embudo, propuesta y contrato en el mismo flujo",
          "Flota serializada con costo y suscripción por display",
          "Ocupación de equilibrio y margen por modelo",
          "Orden de servicio, stock e historial de cada activo",
        ],
      },
      {
        tipo: "Retail",
        nome: "Quien tiene la tienda",
        pergunta: "¿Cómo convierto mi espacio en ingreso sin volverme agencia?",
        ganhos: [
          "Portal propio, liberado por el vendedor con correo confirmado",
          "Oferta recibida en pantalla, con aceptación o rechazo registrados",
          "Venta del propio cupo de exposición a la industria",
          "Ticket abierto por la tienda, con plazo y responsable visibles",
        ],
      },
      {
        tipo: "Industria",
        nome: "Quien compra exposición",
        pergunta: "¿En qué tienda terminó mi presupuesto de trade?",
        ganhos: [
          "Campaña por semana, tienda y display, con pieza aprobada antes de salir",
          "Prueba de exhibición y foto de ejecución sin perseguir a nadie",
          "Penetración real del plan de piezas, tienda por tienda",
          "Lectura de flujo y clima donde hay módulo instalado",
        ],
      },
    ],
  },
  numeros: {
    chapeu: "La plataforma en números",
    titulo: "Lo que ya está construido y funcionando.",
    itens: [
      { valor: 42, sufixo: "", rotulo: "pantallas de producto", nota: "distribuidas en nueve espacios" },
      { valor: 9, sufixo: "", rotulo: "espacios de trabajo", nota: "cada uno con su público" },
      { valor: 11, sufixo: "", rotulo: "perfiles de acceso", nota: "del super admin al anunciante" },
      { valor: 2, sufixo: "", rotulo: "inventarios independientes", nota: "en el mismo display" },
    ],
  },
  faq: {
    chapeu: "Preguntas frecuentes",
    titulo: "Lo que preguntan antes de empezar.",
    itens: [
      { pergunta: "¿Necesito cambiar mis displays para usar Códice?", resposta: "No. El sistema controla cualquier display serializado, con o sin electrónica. El módulo smart es opcional y puede entrar después, en las tiendas donde la medición marque diferencia." },
      { pergunta: "¿El sensor identifica a las personas que pasan?", resposta: "No. El módulo mide distancia, presencia y clima. No hay cámara, no hay reconocimiento y nada que identifique a una persona. Lo que el sistema informa es movimiento, y lo repite en cada pantalla donde aparece el número." },
      { pergunta: "¿Cómo funciona el acceso del comercio y del anunciante?", resposta: "Por liberación. El vendedor crea la liberación para un correo, la persona entra con ese correo confirmado y ve solo su cadena o sus campañas. El acceso viene del vínculo registrado por la administración, no del login." },
      { pergunta: "Mi operación usa otra tabla de precios. ¿Se puede adaptar?", resposta: "Sí. Precio por categoría de modelo, suscripción mensual del equipo y cupo semanal son configurables, y la pantalla de precios muestra la ocupación de equilibrio y el margen en cada escenario." },
      { pergunta: "¿Mis datos quedan mezclados con los de otra empresa?", resposta: "No. La estructura es multiempresa desde la primera línea de código, y las reglas de la base niegan cualquier lectura fuera de la organización. La interfaz esconde por conveniencia y el servidor niega de verdad." },
      { pergunta: "¿Cuánto tarda en estar en el aire?", resposta: "Depende del tamaño de la red y de la calidad del registro actual. El camino está descrito en cuatro etapas en esta página y cada una termina con algo funcionando. En la demostración armamos el cronograma con tus números." },
    ],
  },
  conversao: {
    chapeu: "Próximo paso",
    titulo: "Mira Códice funcionando con tu operación.",
    lead:
      "Una demostración de cuarenta minutos, con el escenario armado a partir de tu red: displays, tiendas, semanas de exposición y la ejecución en tienda como es hoy.",
    campos: { nome: "Nombre", empresa: "Empresa", email: "Correo", lojas: "Número de tiendas atendidas", mensagem: "¿Cuál es tu desafío hoy?" },
    ajuda: { nome: "Cómo debemos llamarte", email: "Lo usamos solo para responder", mensagem: "Cuanto más específico, mejor preparamos la demostración" },
    enviar: "Solicitar demostración",
    enviando: "Preparando",
    sucesso: "Listo para enviar",
    sucessoDetalhe: "Abrimos tu programa de correo con el mensaje escrito. Solo falta confirmar el envío. Si no se abrió nada, escribe a",
    erro: "Revisa los campos destacados",
    alternativaTitulo: "¿Prefieres otro camino?",
    alternativaEmail: "Escribir un correo",
    alternativaPlataforma: "Entrar a la plataforma",
    consentimento: "Al enviar, aceptas que Códice use estos datos solo para responder a tu contacto.",
  },
  rodape: {
    frase: "Displays inteligentes para grandes resultados.",
    navegacao: "Navegación",
    contato: "Contacto",
    legal: "Legal",
    privacidade: "Política de privacidad",
    creditos: "Plataforma desarrollada y operada por 75 LAB.",
    direitos: "Todos los derechos reservados.",
  },
  privacidade: {
    titulo: "Política de privacidad",
    atualizado: "Actualizada en septiembre de 2026",
    blocos: [
      { titulo: "Qué recoge este sitio", texto: "Este sitio es estático y no usa cookies de rastreo, píxeles de publicidad ni analítica de terceros. Nada de lo que lees aquí sale de tu navegador." },
      { titulo: "El formulario de contacto", texto: "El formulario arma un mensaje en tu propio programa de correo. Los datos solo salen de tu dispositivo cuando confirmas el envío, y llegan únicamente a la bandeja de 75 LAB." },
      { titulo: "Para qué lo usamos", texto: "Nombre, empresa, correo y mensaje se usan solo para responder al contacto y preparar la demostración. No vendemos, no intercambiamos y no compartimos estos datos con terceros." },
      { titulo: "Cuánto tiempo lo guardamos", texto: "Mantenemos la conversación mientras sea útil a la relación comercial. En cualquier momento puedes pedir la eliminación escribiendo a nuestro correo de contacto." },
      { titulo: "Tus derechos", texto: "Puedes pedir acceso, corrección o eliminación de los datos que enviaste, conforme a la Ley General de Protección de Datos de Brasil. El pedido se atiende por el mismo correo de contacto." },
      { titulo: "La plataforma Códice", texto: "Esta política cubre el sitio institucional. El uso de la plataforma por parte de clientes se rige por el contrato de prestación de servicio y por las reglas de acceso descritas en él." },
    ],
    voltar: "Volver al sitio",
  },
  erro404: {
    titulo: "Esta página salió del mapa.",
    texto: "La dirección que abriste ya no existe o nunca existió. Le pasa hasta a un display bien gestionado.",
    voltar: "Volver al inicio",
  },
};
