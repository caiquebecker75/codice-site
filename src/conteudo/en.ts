import type { Conteudo } from "./tipos";

/* English. Mirrors src/conteudo/pt.ts. */
export const en: Conteudo = {
  meta: {
    titulo: "Códice · From shelf space to insight",
    descricao:
      "Códice runs the display that sits in the store and the exposure week brands buy, in one system. Fleet, contracts, campaigns, in store sensors and proof of execution at the point of sale.",
    palavras: "retail media, in store display, shopper marketing, display management, point of sale execution",
    ogAlt: "Códice, platform for smart displays and retail media",
  },
  nav: {
    links: [
      { id: "manifesto", rotulo: "Vision" },
      { id: "desafio", rotulo: "The problem" },
      { id: "solucao", rotulo: "The shift" },
      { id: "sistema", rotulo: "The system" },
      { id: "pdv", rotulo: "In store" },
      { id: "faq", rotulo: "FAQ" },
    ],
    cta: "Book a demo",
    abrirMenu: "Open menu",
    fecharMenu: "Close menu",
    idioma: "Language",
    irParaConteudo: "Skip to content",
  },
  abertura: { palavra: "From space to insight", pular: "Skip intro" },
  heroi: {
    chapeu: "Retail media platform",
    titulo: ["From space", "to", "insight"],
    lead:
      "Every retailer sells space. Few can prove what that space delivered. Códice runs the display that sits in the store and the exposure week brands buy, with sensors, contracts and proof of execution tied to the same asset.",
    ctaPrimario: "Book a demo",
    ctaSecundario: "See how it works",
    selos: [
      { valor: "2", rotulo: "inventories on the same asset" },
      { valor: "1 week", rotulo: "is the unit of sale" },
      { valor: "42", rotulo: "product screens" },
      { valor: "11", rotulo: "access profiles" },
    ],
    rolar: "Scroll to begin",
    painel: {
      barra: "codice · operations dashboard",
      kpis: [
        { rotulo: "Media occupancy", valor: "78%", nota: "sample figures" },
        { rotulo: "Displays installed", valor: "42", nota: "8 stores" },
        { rotulo: "Recurring revenue", valor: "R$ 96.4k", nota: "current month" },
      ],
      graficoTitulo: "Revenue per week",
      gradeTitulo: "Inventory per week",
      legenda: ["Sold", "Booked", "Open"],
    },
  },
  manifesto: {
    chapeu: "The belief",
    titulo: "Store space is the most expensive asset in retail and the least measured one.",
    paragrafos: [
      "A well placed end cap costs more than the campaign advertising the product sitting on it. Even so, that space is usually negotiated over the phone, tracked in a spreadsheet and proven with a loose photo in a chat group.",
      "On the other side of the counter, brands have learned to demand proof. Selling exposure without data means losing the pricing conversation at renewal. Buying without data means paying for a promise and finding out the result too late.",
      "Códice exists to close that gap. It does not turn the spreadsheet into a screen: it replaces the spreadsheet with a system that blocks the error at the moment of sale, measures what happens inside the store and hands over the proof before anyone has to ask.",
    ],
    assinatura: "From space to insight.",
    marquee: ["Space", "Contract", "Week", "Sensor", "Proof", "Insight"],
  },
  desafio: {
    chapeu: "The problem",
    titulo: "Four silent leaks eat the margin of anyone selling exposure.",
    lead:
      "None of them show up in the monthly close. All of them show up at renewal, when the client asks what happened to their money.",
    instrucao: "Tap a leak to see the effect",
    itens: [
      {
        n: "01",
        titulo: "The same week sold twice",
        texto:
          "Two sales reps close the same exposure, on the same display, for competing brands. Nobody notices until the material reaches the store.",
        efeito: "Effect: a make good discount, a lost slot and a client who now audits every line of the contract.",
      },
      {
        n: "02",
        titulo: "The asset that drops off the map",
        texto:
          "The display leaves the distribution centre, passes through two stores and disappears from control. Still on the balance sheet, no longer generating revenue.",
        efeito: "Effect: capital tied up in idle equipment and new units bought without need.",
      },
      {
        n: "03",
        titulo: "Execution without proof",
        texto:
          "The brand asks whether the material was installed. The answer is a photo with no date, no store and no name attached.",
        efeito: "Effect: trade budget questioned, payment deducted and the next campaign going to a competitor.",
      },
      {
        n: "04",
        titulo: "Pricing by gut feel",
        texto:
          "With no measured occupancy and no cost per asset, the slot price becomes an intuition negotiation, always downward.",
        efeito: "Effect: margin evaporating through the year with nobody able to point at where it went.",
      },
    ],
  },
  solucao: {
    chapeu: "The shift",
    titulo: "One display. Two inventories. Two different locks.",
    lead:
      "This is the engine of Códice and the reason it is not an adapted CRM. The same unit can spend six months in one store and, in that window, sell twenty six weeks of exposure to six advertisers. Two independent calendars, each with its own conflict to prevent.",
    abas: [
      {
        id: "fisico",
        nome: "Physical asset",
        unidade: "Unit: serialised display",
        linhas: [
          { rotulo: "Client", valor: "The retailer renting the equipment" },
          { rotulo: "Revenue", valor: "Monthly subscription per display" },
          { rotulo: "Conflict", valor: "Two overlapping rentals of the same asset" },
        ],
        travaTitulo: "The lock",
        trava:
          "Every asset carries a schedule document with its occupied periods. Booking means reading that schedule, checking the overlap and writing it back inside the same transaction. There is no window between checking and booking.",
        demo: "Drag the period over the asset schedule",
      },
      {
        id: "midia",
        nome: "Media inventory",
        unidade: "Unit: display × week",
        linhas: [
          { rotulo: "Client", valor: "The advertiser buying exposure" },
          { rotulo: "Revenue", valor: "Weekly slot sale" },
          { rotulo: "Conflict", valor: "Two sales of the same slot" },
        ],
        travaTitulo: "The lock",
        trava:
          "A slot is identified by the asset and week pair. Two simultaneous sales compete for the same record, the transaction detects the rival write and the second one fails with the reason on screen. The campaign goes in whole or not at all.",
        demo: "Click the weeks to build a campaign",
      },
    ],
    fecho:
      "The difference between a system that warns about the problem and a system that prevents it shows up in the first month of operation.",
  },
  sistema: {
    chapeu: "The system",
    titulo: "Nine workspaces. Everyone opens in their own.",
    lead:
      "Navigation disappears for anyone without permission and the rule denies again on the server, which is where it actually counts. Pick a workspace to see what lives inside it.",
    espacos: [
      { id: "inicio", nome: "Home", resumo: "The control tower opens on what is out of place, not on what is already fine.", telas: ["Dashboard", "Exceptions"] },
      { id: "comercial", nome: "Sales", resumo: "From first contact to signed contract, including the offer the rep sends to the chain.", telas: ["Leads", "Opportunities", "Proposals", "Contracts", "Rep offers"] },
      { id: "midia", nome: "Media", resumo: "Inventory week by week, campaigns, approved creatives and proof of play.", telas: ["Media inventory", "Campaigns", "Creatives", "Screens and playlists", "Proof of play"] },
      { id: "rede", nome: "Network", resumo: "Retailers, stores and physical rentals with their own calendar. The postcode fills address and coordinates.", telas: ["Retailers", "Stores", "Physical rentals", "Rental calendar"] },
      { id: "frota", nome: "Fleet", resumo: "Every serialised display, the model, the live map, sensor modules and trackers.", telas: ["Assets", "Fleet map", "Models", "Store sensors", "Devices", "Trackers", "IoT events"] },
      { id: "pdv", nome: "Point of sale", resumo: "In store execution: who installed it, in which banner, with a storefront photo and the logistics of each piece.", telas: ["Store intelligence", "Stores and storefronts", "Material plan", "Field reps", "Movements and DCs"] },
      { id: "operacao", nome: "Operations", resumo: "Installation, inspection, incident, work order and parts stock, with field mode on the phone.", telas: ["Installations", "Inspections", "Incidents", "Work orders", "Parts stock", "Field mode", "Activate smart module"] },
      { id: "analises", nome: "Analytics", resumo: "Revenue, occupancy, fleet health and performance by chain, store and advertiser.", telas: ["Analytics"] },
      { id: "admin", nome: "Settings", resumo: "Users, roles, price table, integrations and an audit trail of everything changed.", telas: ["Users", "Roles", "Price table", "Configuration", "Integrations", "Audit trail"] },
    ],
    contagem: "screens in this workspace",
  },
  sensores: {
    chapeu: "Smart module",
    titulo: "The display stops being furniture and becomes a source of data.",
    lead:
      "A module the size of a matchbox goes into the display and starts reporting what happens around it. The technician activates it from a phone in the field, the module appears on the map and the store begins telling its own story.",
    itens: [
      { titulo: "Traffic in front of the shelf", texto: "Passage and presence measured by a distance sensor, with the radius calibrated store by store. It is movement, and the system says so in plain words." },
      { titulo: "Temperature and humidity", texto: "Store climate logged all day. Useful for sensitive categories and for explaining sales swings during a heat wave." },
      { titulo: "Signal health and remote updates", texto: "A watchdog checks the modules every five minutes. If one drops, the incident opens by itself and closes by itself when the signal returns. Firmware ships over the air, with no site visit." },
      { titulo: "Telemetry that becomes a chart", texto: "Every reading adds to the daily history and feeds the sensor screen, the analysis by chain and the pricing conversation with the advertiser." },
    ],
    legenda: "Códice display with the smart module installed",
  },
  pdv: {
    chapeu: "Point of sale execution",
    titulo: "The material left the DC. Now prove it arrived.",
    lead:
      "Every piece carries a printed code. The field rep scans it with their own phone, no app to install, and the installation is stamped at birth. What used to be a photo album becomes a database.",
    passos: [
      { titulo: "Identified material", texto: "Every point of sale piece leaves the distribution centre with its own code, linked to the project and the store plan." },
      { titulo: "Scan in store", texto: "The rep points the camera. The piece page opens, with assembly, video, measurements and checklist." },
      { titulo: "Automatic stamp", texto: "Rep, banner, city, coordinates and storefront photo enter the system at the moment of the scan." },
      { titulo: "Measured penetration", texto: "Plan meets reality: how much of the plan was executed, by banner, by state and by field rep." },
    ],
    camadas: [
      { nome: "Display", texto: "The unit installed in the store, with its history and module health." },
      { nome: "Tracker", texto: "The tag travelling with the piece, showing its position along the route." },
      { nome: "Execution", texto: "The rep stamp, with coordinates and a storefront photo taken on the spot." },
    ],
  },
  metodo: {
    chapeu: "How it enters your operation",
    titulo: "Four stages to the first week sold inside the system.",
    lead:
      "Rollout follows the pace of your operation, without stopping sales. Each stage ends with something working, not with a report.",
    etapas: [
      { prazo: "Stage 01", titulo: "Operation design", texto: "We map how your company rents, sells exposure and works in the field today. Roles, price table and rules go into the system as they really are." },
      { prazo: "Stage 02", titulo: "Network and fleet live", texto: "Retailers, stores, models and every serialised display. Address and coordinates come from the postcode, with no manual typing." },
      { prazo: "Stage 03", titulo: "Instrumented field", texto: "Smart modules activated in priority stores and codes printed on the materials. The map starts receiving real data." },
      { prazo: "Stage 04", titulo: "Assisted operation", texto: "Team trained by profile, first media grid generated and support through the first sales inside the system." },
    ],
  },
  honestidade: {
    chapeu: "Honest data",
    titulo: "What Códice refuses to claim.",
    lead:
      "Retail media is full of inflated numbers. The platform was written with the opposite rule: every metric says exactly what it measured and nothing beyond it. That is what holds the conversation with brands in the second year of the contract.",
    itens: [
      { afirma: "Passages measured by the sensor", naoAfirma: "Not unique people" },
      { afirma: "Dwell time near the display", naoAfirma: "Not visual attention" },
      { afirma: "Position at the moment of the scan", naoAfirma: "Not continuous tracking" },
      { afirma: "Product picked from the shelf", naoAfirma: "Not a sale" },
      { afirma: "Proof of play for the creative", naoAfirma: "Not audience" },
      { afirma: "Conversion with integrated sales data", naoAfirma: "No sales data, no estimate" },
    ],
  },
  perfis: {
    chapeu: "Who it is for",
    titulo: "Three businesses in one system, each seeing only what is theirs.",
    lead:
      "Access does not come from the login, it comes from the membership recorded by the administrator. The chain sees its chain. The advertiser sees its campaigns. Nobody sees the neighbour, not even by editing the address bar.",
    cartoes: [
      {
        tipo: "Media operator",
        nome: "Whoever rents out the display",
        pergunta: "How much does each asset return per month and where is it right now?",
        ganhos: [
          "Pipeline, proposal and contract in one flow",
          "Serialised fleet with cost and subscription per display",
          "Break even occupancy and margin by model",
          "Work orders, parts stock and the history of every asset",
        ],
      },
      {
        tipo: "Retail",
        nome: "Whoever owns the store",
        pergunta: "How do I turn my space into revenue without becoming an agency?",
        ganhos: [
          "Dedicated portal, released by the rep to a confirmed email",
          "Offers received on screen, with acceptance or refusal recorded",
          "Selling your own exposure slots to brands",
          "Tickets opened by the store, with deadline and owner visible",
        ],
      },
      {
        tipo: "Brands",
        nome: "Whoever buys exposure",
        pergunta: "Which store did my trade budget actually reach?",
        ganhos: [
          "Campaigns by week, store and display, with creatives approved before they run",
          "Proof of play and execution photos without chasing anyone",
          "Real penetration of the material plan, store by store",
          "Traffic and climate readings where a module is installed",
        ],
      },
    ],
  },
  numeros: {
    chapeu: "The platform in numbers",
    titulo: "What is already built and running.",
    itens: [
      { valor: 42, sufixo: "", rotulo: "product screens", nota: "spread across nine workspaces" },
      { valor: 9, sufixo: "", rotulo: "workspaces", nota: "each with its own audience" },
      { valor: 11, sufixo: "", rotulo: "access profiles", nota: "from super admin to advertiser" },
      { valor: 2, sufixo: "", rotulo: "independent inventories", nota: "on the same display" },
    ],
  },
  faq: {
    chapeu: "Frequently asked",
    titulo: "What people ask before starting.",
    itens: [
      { pergunta: "Do I need to replace my displays to use Códice?", resposta: "No. The system manages any serialised display, with or without electronics. The smart module is optional and can arrive later, in the stores where measurement makes a difference." },
      { pergunta: "Does the sensor identify the people walking by?", resposta: "No. The module measures distance, presence and climate. There is no camera, no recognition and nothing that identifies a person. What the system reports is movement, and it repeats that on every screen where the number appears." },
      { pergunta: "How does access work for retailers and advertisers?", resposta: "By release. The rep creates a release for an email address, the person signs in with that confirmed email and sees only their chain or their campaigns. Access comes from the membership recorded by the administrator, not from the login." },
      { pergunta: "My operation uses a different price table. Can it be adapted?", resposta: "Yes. Price by model category, monthly equipment subscription and weekly slot are all configurable, and the pricing screen shows break even occupancy and margin in each scenario." },
      { pergunta: "Will my data sit next to another company's?", resposta: "No. The structure is multi company from the first line of code, and the database rules deny any read outside the organisation. The interface hides for convenience and the server denies for real." },
      { pergunta: "How long does it take to go live?", resposta: "It depends on the size of the network and the quality of the current records. The path is described in four stages on this page and each one ends with something working. In the demo we build the schedule with your numbers." },
    ],
  },
  conversao: {
    chapeu: "Next step",
    titulo: "See Códice running with your operation.",
    lead:
      "A forty minute demo, with the scenario built from your network: displays, stores, exposure weeks and in store execution as it works today.",
    campos: { nome: "Name", empresa: "Company", email: "Email", lojas: "Number of stores served", mensagem: "What is your challenge today?" },
    ajuda: { nome: "What should we call you", email: "Used only to reply", mensagem: "The more specific, the better we prepare the demo" },
    enviar: "Request a demo",
    enviando: "Preparing",
    sucesso: "Ready to send",
    sucessoDetalhe: "We opened your email client with the message written. Just confirm the send. If nothing opened, write to",
    erro: "Check the highlighted fields",
    alternativaTitulo: "Prefer another route?",
    alternativaEmail: "Write an email",
    alternativaPlataforma: "Sign in to the platform",
    consentimento: "By sending, you agree that Códice uses this data only to reply to your message.",
  },
  rodape: {
    frase: "Smart displays for serious results.",
    navegacao: "Navigation",
    contato: "Contact",
    legal: "Legal",
    privacidade: "Privacy policy",
    creditos: "Platform built and operated by 75 LAB.",
    direitos: "All rights reserved.",
  },
  privacidade: {
    titulo: "Privacy policy",
    atualizado: "Updated September 2026",
    blocos: [
      { titulo: "What this site collects", texto: "This site is static and uses no tracking cookies, advertising pixels or third party analytics. Nothing you read here is sent outside your browser." },
      { titulo: "The contact form", texto: "The form composes a message in your own email client. The data only leaves your device when you confirm the send, and it arrives only in the 75 LAB inbox." },
      { titulo: "What we use it for", texto: "Name, company, email and message are used only to reply and to prepare the demo. We do not sell, trade or share this data with third parties." },
      { titulo: "How long we keep it", texto: "We keep the conversation while it is useful to the commercial relationship. You can request deletion at any time by writing to our contact address." },
      { titulo: "Your rights", texto: "You may request access, correction or deletion of the data you sent, under the Brazilian General Data Protection Law. Requests are handled through the same contact address." },
      { titulo: "The Códice platform", texto: "This policy covers the public website. Client use of the platform is governed by the service agreement and the access rules described in it." },
    ],
    voltar: "Back to the site",
  },
  erro404: {
    titulo: "This page left the map.",
    texto: "The address you opened no longer exists or never did. It happens even to a well managed display.",
    voltar: "Back to the start",
  },
};
