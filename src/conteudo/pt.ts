import type { Conteudo } from "./tipos";

/* Português do Brasil. Texto original; os outros idiomas seguem este. */
export const pt: Conteudo = {
  meta: {
    titulo: "Códice · Do espaço ao insight",
    descricao:
      "A Códice controla o display que fica na loja e a semana de exposição que a indústria compra, no mesmo sistema. Frota, contratos, campanhas, sensores e prova de execução no ponto de venda.",
    palavras: "mídia de varejo, retail media, display de PDV, trade marketing, gestão de displays, execução no PDV",
    ogAlt: "Códice, plataforma de displays inteligentes e mídia de varejo",
  },
  nav: {
    links: [
      { id: "manifesto", rotulo: "Visão" },
      { id: "desafio", rotulo: "O desafio" },
      { id: "solucao", rotulo: "A virada" },
      { id: "sistema", rotulo: "O sistema" },
      { id: "pdv", rotulo: "No PDV" },
      { id: "faq", rotulo: "Dúvidas" },
    ],
    cta: "Agendar demonstração",
    abrirMenu: "Abrir menu",
    fecharMenu: "Fechar menu",
    idioma: "Idioma",
    irParaConteudo: "Ir para o conteúdo",
  },
  abertura: { palavra: "Do espaço ao insight", pular: "Pular abertura" },
  heroi: {
    chapeu: "Plataforma de mídia de varejo",
    titulo: ["Do espaço", "ao", "insight"],
    lead:
      "Todo varejo vende espaço. Poucos conseguem provar o que aquele espaço entregou. A Códice controla o display que fica na loja e a semana de exposição que a indústria compra, com sensor, contrato e prova de execução ligados ao mesmo ativo.",
    ctaPrimario: "Agendar demonstração",
    ctaSecundario: "Ver como funciona",
    selos: [
      { valor: "2", rotulo: "inventários no mesmo ativo" },
      { valor: "1 semana", rotulo: "é a unidade de venda" },
      { valor: "42", rotulo: "telas de produto" },
      { valor: "11", rotulo: "perfis de acesso" },
    ],
    rolar: "Role para começar",
    painel: {
      barra: "codice · painel da operação",
      kpis: [
        { rotulo: "Ocupação de mídia", valor: "78%", nota: "exemplo ilustrativo" },
        { rotulo: "Displays instalados", valor: "42", nota: "8 lojas" },
        { rotulo: "Receita recorrente", valor: "R$ 96,4 mil", nota: "mês corrente" },
      ],
      graficoTitulo: "Receita por semana",
      gradeTitulo: "Inventário por semana",
      legenda: ["Vendida", "Reservada", "Livre"],
    },
  },
  manifesto: {
    chapeu: "A crença",
    titulo: "O espaço da loja é o ativo mais caro do varejo e o menos medido.",
    paragrafos: [
      "Uma ponta de gôndola bem posicionada custa mais do que a campanha que anuncia o produto exposto nela. Mesmo assim, esse espaço costuma ser negociado por telefone, controlado em planilha e comprovado por uma foto solta em grupo de mensagem.",
      "Do outro lado do balcão, a indústria aprendeu a exigir prova. Quem vende exposição sem dado perde a conversa de preço na renovação. Quem compra sem dado paga por promessa e descobre o resultado tarde demais.",
      "A Códice existe para fechar essa distância. Ela não transforma a planilha em tela: troca a planilha por um sistema que impede o erro no ato da venda, mede o que acontece dentro da loja e devolve a prova antes que alguém precise pedir.",
    ],
    assinatura: "Do espaço ao insight.",
    marquee: ["Espaço", "Contrato", "Semana", "Sensor", "Prova", "Insight"],
  },
  desafio: {
    chapeu: "O desafio",
    titulo: "Quatro furos silenciosos comem a margem de quem vende exposição.",
    lead:
      "Nenhum deles aparece no fechamento do mês. Todos aparecem na renovação do contrato, quando o cliente pergunta o que aconteceu com o dinheiro dele.",
    instrucao: "Toque em um furo para ver o efeito",
    itens: [
      {
        n: "01",
        titulo: "A mesma semana vendida duas vezes",
        texto:
          "Dois vendedores fecham a mesma exposição, no mesmo display, para marcas concorrentes. Ninguém percebe até a peça chegar na loja.",
        efeito: "Efeito: desconto de reparação, cota perdida e um cliente que passa a conferir cada linha do contrato.",
      },
      {
        n: "02",
        titulo: "O ativo que sai do mapa",
        texto:
          "O display sai do centro de distribuição, passa por duas lojas e some do controle. Continua no balanço, mas parou de gerar receita.",
        efeito: "Efeito: capital imobilizado em equipamento ocioso e compra de ativo novo sem necessidade.",
      },
      {
        n: "03",
        titulo: "Execução sem prova",
        texto:
          "A indústria pergunta se a peça foi instalada. A resposta é uma foto sem data, sem loja e sem quem esteve lá.",
        efeito: "Efeito: verba de trade questionada, glosa no pagamento e a próxima campanha indo para o concorrente.",
      },
      {
        n: "04",
        titulo: "Preço no chute",
        texto:
          "Sem ocupação medida e sem custo por ativo, a cota vira negociação de intuição, sempre para baixo.",
        efeito: "Efeito: margem que evapora ao longo do ano sem que ninguém consiga apontar onde ela foi parar.",
      },
    ],
  },
  solucao: {
    chapeu: "A virada",
    titulo: "Um display. Dois inventários. Duas travas diferentes.",
    lead:
      "Este é o motor da Códice e a razão de ela não ser um CRM adaptado. O mesmo equipamento pode passar seis meses na mesma loja e, nesse período, vender vinte e seis semanas de exposição para seis anunciantes. São dois calendários independentes, cada um com o seu próprio conflito a evitar.",
    abas: [
      {
        id: "fisico",
        nome: "Ativo físico",
        unidade: "Unidade: display serializado",
        linhas: [
          { rotulo: "Cliente", valor: "O varejista que aluga o equipamento" },
          { rotulo: "Receita", valor: "Assinatura mensal por display" },
          { rotulo: "Conflito", valor: "Duas locações sobrepostas do mesmo ativo" },
        ],
        travaTitulo: "A trava",
        trava:
          "Cada ativo tem um documento de agenda com os períodos ocupados. Reservar é ler essa agenda, conferir a sobreposição e gravar de volta dentro da mesma transação. Não existe janela entre conferir e reservar.",
        demo: "Arraste o período sobre a agenda do ativo",
      },
      {
        id: "midia",
        nome: "Inventário de mídia",
        unidade: "Unidade: display × semana",
        linhas: [
          { rotulo: "Cliente", valor: "O anunciante que compra exposição" },
          { rotulo: "Receita", valor: "Venda da cota semanal" },
          { rotulo: "Conflito", valor: "Duas vendas da mesma cota" },
        ],
        travaTitulo: "A trava",
        trava:
          "A cota é identificada pelo par ativo e semana. Duas vendas simultâneas disputam o mesmo registro, a transação detecta a concorrente e a segunda falha com o motivo na tela. A campanha entra inteira ou não entra.",
        demo: "Clique nas semanas para montar uma campanha",
      },
    ],
    fecho:
      "A diferença entre um sistema que avisa do problema e um sistema que impede o problema aparece no primeiro mês de operação.",
  },
  sistema: {
    chapeu: "O sistema",
    titulo: "Nove espaços de trabalho. Cada pessoa abre no que é dela.",
    lead:
      "A navegação some para quem não tem permissão e a regra nega de novo no servidor, que é onde de fato importa. Escolha um espaço para ver o que existe dentro dele.",
    espacos: [
      { id: "inicio", nome: "Início", resumo: "A torre de controle abre no que está fora do lugar, não no que já está certo.", telas: ["Painel", "Exceções"] },
      { id: "comercial", nome: "Comercial", resumo: "Do primeiro contato ao contrato assinado, com a oferta que o vendedor envia para a rede.", telas: ["Leads", "Oportunidades", "Propostas", "Contratos", "Ofertas do vendedor"] },
      { id: "midia", nome: "Mídia", resumo: "O inventário semana a semana, as campanhas, as peças aprovadas e a prova de exibição.", telas: ["Inventário de mídia", "Campanhas", "Peças", "Telas e playlists", "Prova de exibição"] },
      { id: "rede", nome: "Rede", resumo: "Varejistas, lojas e locações físicas com calendário próprio. O CEP preenche endereço e coordenada.", telas: ["Varejistas", "Lojas", "Locações físicas", "Calendário físico"] },
      { id: "frota", nome: "Frota", resumo: "Cada display serializado, o modelo, o mapa ao vivo, os módulos de sensor e os rastreadores.", telas: ["Ativos", "Mapa da frota", "Modelos", "Sensores das lojas", "Dispositivos", "Rastreadores", "Eventos IoT"] },
      { id: "pdv", nome: "PDV", resumo: "A execução em loja: quem instalou, em que bandeira, com foto da fachada e a logística das peças.", telas: ["Inteligência de PDV", "Lojas e fachadas", "Plano de peças", "Promotores", "Movimentos e CDs"] },
      { id: "operacao", nome: "Operação", resumo: "Instalação, inspeção, ocorrência, ordem de serviço e estoque, com modo campo pelo celular.", telas: ["Instalações", "Inspeções", "Ocorrências", "Ordens de serviço", "Estoque de peças", "Modo campo", "Ativar módulo smart"] },
      { id: "analises", nome: "Análises", resumo: "Receita, ocupação, saúde da frota e desempenho por rede, loja e anunciante.", telas: ["Análises"] },
      { id: "admin", nome: "Ajustes", resumo: "Usuários, papéis, tabela de preços, integrações e auditoria de tudo que foi alterado.", telas: ["Usuários", "Papéis", "Tabela de preços", "Configurações", "Integrações", "Auditoria"] },
    ],
    contagem: "telas neste espaço",
  },
  sensores: {
    chapeu: "Módulo smart",
    titulo: "O display deixa de ser um móvel e vira uma fonte de dados.",
    lead:
      "Um módulo do tamanho de uma caixa de fósforo entra no display e passa a enviar o que acontece em volta dele. O técnico ativa pelo celular em campo, o módulo aparece no mapa e a loja começa a contar a própria história.",
    itens: [
      {
        titulo: "Fluxo na frente da gôndola",
        texto: "Passagem e presença medidas por sensor de distância, com raio calibrado loja a loja. É movimento, e o sistema diz isso com todas as letras.",
      },
      {
        titulo: "Temperatura e umidade",
        texto: "O clima da loja registrado o dia inteiro. Serve para categoria sensível e para explicar a variação de venda na semana de calor.",
      },
      {
        titulo: "Saúde do sinal e atualização remota",
        texto: "Um vigia confere os módulos a cada cinco minutos. Se um cai, a ocorrência abre sozinha e fecha sozinha quando o sinal volta. O firmware sobe pela rede, sem visita técnica.",
      },
      {
        titulo: "Telemetria que vira gráfico",
        texto: "Cada envio soma no histórico do dia e alimenta a tela de sensores, a análise por rede e a conversa de preço com o anunciante.",
      },
    ],
    legenda: "Display da linha Códice com módulo smart instalado",
  },
  pdv: {
    chapeu: "Execução no ponto de venda",
    titulo: "A peça saiu do CD. Agora prove que ela chegou.",
    lead:
      "Cada material leva um código impresso. O promotor lê com o próprio celular, sem instalar aplicativo, e a instalação nasce carimbada. O que era álbum de fotos vira base de dados.",
    passos: [
      { titulo: "Peça identificada", texto: "Cada material de PDV sai do centro de distribuição com um código próprio, ligado ao projeto e ao plano de lojas." },
      { titulo: "Leitura na loja", texto: "O promotor aponta a câmera. Abre a página da peça, com montagem, vídeo, medidas e checklist." },
      { titulo: "Carimbo automático", texto: "Promotor, bandeira, cidade, coordenada e foto da fachada entram no sistema no ato da leitura." },
      { titulo: "Penetração medida", texto: "O planejado encontra o realizado: quanto do plano foi positivado, por bandeira, por estado e por promotor." },
    ],
    camadas: [
      { nome: "Display", texto: "O equipamento instalado na loja, com histórico e saúde do módulo." },
      { nome: "Rastreador", texto: "A etiqueta que viaja com a peça e mostra a posição ao longo do trajeto." },
      { nome: "Positivação", texto: "O carimbo do promotor, com coordenada e foto da fachada tirada na hora." },
    ],
  },
  metodo: {
    chapeu: "Como entra na sua operação",
    titulo: "Quatro etapas até a primeira semana vendida dentro do sistema.",
    lead:
      "A implantação segue o ritmo da sua operação, sem parar a venda. Cada etapa termina com algo funcionando, não com um relatório.",
    etapas: [
      { prazo: "Etapa 01", titulo: "Desenho da operação", texto: "Mapeamos como a sua empresa aluga, vende exposição e opera em campo hoje. Papéis, tabela de preços e regras entram no sistema como elas são." },
      { prazo: "Etapa 02", titulo: "Rede e frota no ar", texto: "Varejistas, lojas, modelos e cada display serializado. Endereço e coordenada entram pelo CEP, sem digitação manual." },
      { prazo: "Etapa 03", titulo: "Campo instrumentado", texto: "Módulos smart ativados nas lojas prioritárias e códigos impressos nas peças. O mapa começa a receber dado real." },
      { prazo: "Etapa 04", titulo: "Operação assistida", texto: "Time treinado por perfil, primeira grade de mídia gerada e acompanhamento das primeiras vendas dentro do sistema." },
    ],
  },
  honestidade: {
    chapeu: "Honestidade dos dados",
    titulo: "O que a Códice se recusa a afirmar.",
    lead:
      "Mídia de varejo está cheia de número inflado. A plataforma foi escrita com a regra contrária: cada métrica diz exatamente o que mediu e nada além disso. É isso que sustenta a conversa com a indústria no segundo ano de contrato.",
    itens: [
      { afirma: "Passagem medida pelo sensor", naoAfirma: "Não é pessoa única" },
      { afirma: "Tempo de permanência perto do display", naoAfirma: "Não é atenção visual" },
      { afirma: "Posição no momento da leitura do código", naoAfirma: "Não é rastreamento contínuo" },
      { afirma: "Retirada do produto da prateleira", naoAfirma: "Não é venda" },
      { afirma: "Prova de exibição da peça", naoAfirma: "Não é audiência" },
      { afirma: "Conversão com dado de PDV integrado", naoAfirma: "Sem venda na base, não estima" },
    ],
  },
  perfis: {
    chapeu: "Para quem",
    titulo: "Três negócios no mesmo sistema, cada um vendo só o que é dele.",
    lead:
      "O acesso não vem do login, vem do vínculo gravado pela administração. A rede entra e vê a rede dela. O anunciante entra e vê as campanhas dele. Ninguém enxerga o vizinho, nem trocando endereço no navegador.",
    cartoes: [
      {
        tipo: "Operadora de mídia",
        nome: "Quem aluga o display",
        pergunta: "Quanto cada ativo me dá por mês e onde ele está agora?",
        ganhos: [
          "Funil, proposta e contrato no mesmo fluxo",
          "Frota serializada com custo e assinatura por display",
          "Ocupação de equilíbrio e margem por modelo",
          "Ordem de serviço, estoque e histórico de cada ativo",
        ],
      },
      {
        tipo: "Varejo",
        nome: "Quem tem a loja",
        pergunta: "Como transformo meu espaço em receita sem virar agência?",
        ganhos: [
          "Portal próprio, liberado pelo vendedor por e-mail confirmado",
          "Oferta recebida na tela, com aceite ou recusa registrados",
          "Venda da própria cota de exposição para a indústria",
          "Chamado aberto pela loja, com prazo e responsável visíveis",
        ],
      },
      {
        tipo: "Indústria",
        nome: "Quem compra exposição",
        pergunta: "A minha verba de trade virou peça instalada em qual loja?",
        ganhos: [
          "Campanha por semana, loja e display, com peça aprovada antes de subir",
          "Prova de exibição e foto de execução sem pedir por mensagem",
          "Penetração real do plano de peças, loja a loja",
          "Leitura de fluxo e clima onde existe módulo instalado",
        ],
      },
    ],
  },
  numeros: {
    chapeu: "A plataforma em números",
    titulo: "O que já está construído e rodando.",
    itens: [
      { valor: 42, sufixo: "", rotulo: "telas de produto", nota: "distribuídas em nove espaços" },
      { valor: 9, sufixo: "", rotulo: "espaços de trabalho", nota: "cada um com o seu público" },
      { valor: 11, sufixo: "", rotulo: "perfis de acesso", nota: "do super admin ao anunciante" },
      { valor: 2, sufixo: "", rotulo: "inventários independentes", nota: "no mesmo display" },
    ],
  },
  faq: {
    chapeu: "Dúvidas frequentes",
    titulo: "O que perguntam antes de começar.",
    itens: [
      {
        pergunta: "Preciso trocar os meus displays para usar a Códice?",
        resposta:
          "Não. O sistema controla qualquer display serializado, com ou sem eletrônica. O módulo smart é opcional e pode entrar depois, nas lojas onde a medição fizer diferença.",
      },
      {
        pergunta: "O sensor identifica as pessoas que passam pela loja?",
        resposta:
          "Não. O módulo mede distância, presença e clima. Não há câmera, não há reconhecimento e nada que identifique uma pessoa. O que o sistema informa é movimento, e ele repete isso em toda tela onde o número aparece.",
      },
      {
        pergunta: "Como funciona o acesso do varejista e do anunciante?",
        resposta:
          "Por liberação. O vendedor cria a liberação para um e-mail, a pessoa entra com o e-mail confirmado e passa a ver apenas a rede ou as campanhas dela. O acesso vem do vínculo gravado pela administração, não do login.",
      },
      {
        pergunta: "A minha operação usa uma tabela de preços diferente. Dá para adaptar?",
        resposta:
          "Sim. Preço por categoria de modelo, assinatura mensal do equipamento e cota semanal são configuráveis, e a tela de preços mostra a ocupação de equilíbrio e a margem em cada cenário.",
      },
      {
        pergunta: "Os meus dados ficam misturados com os de outra empresa?",
        resposta:
          "Não. A estrutura é multiempresa desde a primeira linha de código, e as regras do banco negam leitura fora da organização. A interface esconde por conveniência e o servidor nega de fato.",
      },
      {
        pergunta: "Quanto tempo leva para entrar no ar?",
        resposta:
          "Depende do tamanho da rede e da qualidade do cadastro atual. O caminho está descrito em quatro etapas aqui na página, e cada uma termina com algo funcionando. Na conversa de demonstração montamos o cronograma com os seus números.",
      },
    ],
  },
  conversao: {
    chapeu: "Próximo passo",
    titulo: "Veja a Códice rodando com a sua operação.",
    lead:
      "Uma demonstração de quarenta minutos, com o cenário montado a partir da sua rede: displays, lojas, semanas de exposição e a execução em loja como ela é hoje.",
    campos: {
      nome: "Nome",
      empresa: "Empresa",
      email: "E-mail",
      lojas: "Número de lojas atendidas",
      mensagem: "Qual é o seu desafio hoje?",
    },
    ajuda: {
      nome: "Como devemos chamar você",
      email: "Usamos apenas para responder",
      mensagem: "Quanto mais específico, melhor preparamos a demonstração",
    },
    enviar: "Solicitar demonstração",
    enviando: "Preparando",
    sucesso: "Tudo pronto para enviar",
    sucessoDetalhe:
      "Abrimos o seu programa de e-mail com a mensagem escrita. Basta confirmar o envio. Se nada abrir, escreva para",
    erro: "Confira os campos destacados",
    alternativaTitulo: "Prefere outro caminho?",
    alternativaEmail: "Escrever um e-mail",
    alternativaPlataforma: "Entrar na plataforma",
    consentimento: "Ao enviar, você concorda que a Códice use estes dados apenas para responder ao seu contato.",
  },
  rodape: {
    frase: "Displays inteligentes para grandes resultados.",
    navegacao: "Navegação",
    contato: "Contato",
    legal: "Legal",
    privacidade: "Política de privacidade",
    creditos: "Plataforma desenvolvida e operada pela 75 LAB.",
    direitos: "Todos os direitos reservados.",
  },
  privacidade: {
    titulo: "Política de privacidade",
    atualizado: "Atualizada em setembro de 2026",
    blocos: [
      { titulo: "O que este site coleta", texto: "Este site é estático e não usa cookie de rastreamento, pixel de publicidade nem analytics de terceiros. Nada que você lê aqui é enviado para fora do seu navegador." },
      { titulo: "O formulário de contato", texto: "O formulário monta uma mensagem no seu próprio programa de e-mail. Os dados só saem do seu dispositivo quando você confirma o envio, e chegam apenas na caixa de entrada da 75 LAB." },
      { titulo: "Para que usamos", texto: "Nome, empresa, e-mail e mensagem são usados apenas para responder ao contato e preparar a demonstração. Não vendemos, não trocamos e não compartilhamos esses dados com terceiros." },
      { titulo: "Por quanto tempo guardamos", texto: "Mantemos a conversa enquanto ela for útil ao relacionamento comercial. A qualquer momento você pode pedir a exclusão escrevendo para o nosso e-mail de contato." },
      { titulo: "Seus direitos", texto: "Você pode pedir acesso, correção ou exclusão dos dados que enviou, conforme a Lei Geral de Proteção de Dados. O pedido é atendido pelo mesmo e-mail de contato." },
      { titulo: "A plataforma Códice", texto: "Esta política cobre o site institucional. O uso da plataforma por clientes é regido pelo contrato de prestação de serviço e pelas regras de acesso descritas nele." },
    ],
    voltar: "Voltar para o site",
  },
  erro404: {
    titulo: "Esta página saiu do mapa.",
    texto: "O endereço que você abriu não existe mais ou nunca existiu. Acontece até com display bem gerenciado.",
    voltar: "Voltar para o início",
  },
};
