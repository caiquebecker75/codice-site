import type { Conteudo } from "./tipos";

/* Português do Brasil. Números e argumentos vêm da apresentação de venda. */
export const pt: Conteudo = {
  meta: {
    titulo: "Códice · A sua loja já é um veículo de mídia",
    descricao:
      "A Códice aluga displays inteligentes para a sua rede vender espaço para as marcas. Display, manutenção e plataforma em uma assinatura de R$ 499 por display por mês.",
    palavras: "retail media, display de PDV, aluguel de display, mídia de varejo, trade marketing, cota de exposição",
    ogAlt: "Display Códice instalado em supermercado",
  },
  nav: {
    links: [
      { id: "mudou", rotulo: "O que mudou" },
      { id: "como", rotulo: "Como funciona" },
      { id: "plataforma", rotulo: "Plataforma" },
      { id: "displays", rotulo: "Displays" },
      { id: "contas", rotulo: "A conta" },
      { id: "simulador", rotulo: "Simulador" },
    ],
    cta: "Falar com a Códice",
    abrirMenu: "Abrir menu",
    fecharMenu: "Fechar menu",
    idioma: "Idioma",
    irParaConteudo: "Ir para o conteúdo",
  },
  abertura: { palavra: "Displays inteligentes para grandes resultados", pular: "Pular abertura" },
  heroi: {
    chapeu: "Displays inteligentes · Varejo 2026",
    titulo: ["A sua loja já é", "um veículo", "de mídia"],
    lead:
      "A Códice aluga o display, mantém o ponto e entrega a plataforma. A sua rede vende a semana de exposição para as marcas. Sem comprar móvel, sem capital parado, sem equipe nova.",
    ctaPrimario: "Simular a minha rede",
    ctaSecundario: "Ver a plataforma",
    selos: [
      { valor: "R$ 499", rotulo: "por display, por mês" },
      { valor: "1 cota", rotulo: "= 1 semana de 1 display" },
      { valor: "3 meses", rotulo: "de aluguel pagos por 1 cota" },
      { valor: "0", rotulo: "capital imobilizado" },
    ],
    rolar: "Role para entender",
    legendaFoto: "Display Códice instalado em supermercado",
  },
  mudou: {
    chapeu: "O que mudou",
    titulo: "A verba de mídia desceu para o corredor. A loja ainda não aprendeu a cobrar por isso.",
    lead:
      "A indústria já trata o ponto de venda como canal de mídia e reserva verba para ele todo ano. Quem tem a loja continua cedendo o melhor espaço por acordo de gôndola, sem tabela e sem receita.",
    investimento: {
      valor: 48,
      prefixo: "R$ ",
      sufixo: " bi",
      separador: ",",
      rotulo: "investidos em retail media no Brasil em 2025",
      fonte: "Fonte: IAB Brasil e Propmark, Digital Adspend 2026.",
    },
    crescimento: { valor: 37, sufixo: "%", rotulo: "de crescimento ao ano" },
    canais: [
      { nome: "TV aberta", nota: "Alcance amplo, longe da compra" },
      { nome: "Display online", nota: "Barato, disputado e ignorado" },
      { nome: "Mídia exterior", nota: "Impacto sem conversão medida" },
      { nome: "A sua loja", nota: "O shopper com o carrinho na mão" },
    ],
    calculadora: {
      titulo: "Quanto a sua rede deixa na mesa",
      lojas: "Lojas da rede",
      displays: "Displays por loja",
      cota: "Preço da cota",
      ocupacao: "Agenda vendida no ano",
      resultado: "Fica na mesa",
      porAno: "por ano, todo ano",
      nota: "1 cota = 1 semana de 1 display. O valor já desconta R$ 499 por display por mês de assinatura.",
    },
  },
  comoFunciona: {
    chapeu: "Como funciona",
    titulo: "A Códice instala e mantém. A sua rede vende a semana.",
    lead:
      "Três movimentos, um contrato só. A rede não compra móvel, não contrata manutenção e não monta time de mídia para começar a faturar com o próprio espaço.",
    passos: [
      {
        n: "01",
        titulo: "A Códice instala o display",
        texto: "Projeto, produção, montagem na loja e treinamento da equipe. A rede não desembolsa capital para começar.",
        foto: "/fotos/foto-instalacao.jpg",
        alt: "Equipe técnica instalando o display na loja",
      },
      {
        n: "02",
        titulo: "A rede vende a semana para as marcas",
        texto: "A indústria compra a cota semanal com a comunicação inclusa. Tabela, calendário e reserva ficam na plataforma.",
        foto: "/fotos/foto-ilha-supermercado.jpg",
        alt: "Display Códice com a comunicação de uma marca em supermercado",
      },
      {
        n: "03",
        titulo: "A Códice mantém e mede",
        texto: "Manutenção programada, troca de comunicação e relatório com prova de execução para a marca comprar de novo.",
        foto: "/fotos/foto-monitoramento.jpg",
        alt: "Central de monitoramento acompanhando a operação",
      },
    ],
    destaque: { valor: "R$ 499", rotulo: "por display, por mês", nota: "Instalação, manutenção e plataforma na mesma assinatura." },
    regra: "1 cota = 1 semana de 1 display",
  },
  plataforma: {
    chapeu: "A plataforma",
    titulo: "Tudo o que acontece na loja, em uma plataforma só.",
    lead:
      "A mesma tela serve a rede, a indústria e o time de campo. Clique em uma tela para ampliar, ou use as setas do teclado.",
    telas: [
      { arquivo: "sis-painel", nome: "Painel", texto: "Ocupação, receita e prazos da semana em uma tela." },
      { arquivo: "sis-inventario", nome: "Inventário de mídia", texto: "Cada display vira cotas semanais, com preço e status." },
      { arquivo: "sis-campanhas", nome: "Campanhas", texto: "Da reserva da marca à veiculação, com a peça aprovada antes de subir." },
      { arquivo: "sis-sensores", nome: "Sensores das lojas", texto: "Passagem e permanência medidas no ponto, loja a loja." },
      { arquivo: "sis-mapa", nome: "Mapa da frota", texto: "Cada loja e cada display no mapa, com a saúde do equipamento." },
      { arquivo: "sis-excecoes", nome: "Exceções", texto: "O que saiu do esperado vira tarefa com prazo e responsável." },
      { arquivo: "sis-campo", nome: "Modo campo", texto: "Instalação e vistoria pelo celular, com leitura de QR e foto." },
    ],
    ampliar: "Ver em tela cheia",
    fechar: "Fechar",
    anterior: "Tela anterior",
    proxima: "Próxima tela",
    aviso: "Telas reais do sistema, em modo demonstração com dados fictícios.",
    entrar: "Entrar na plataforma",
  },
  displays: {
    chapeu: "O produto",
    titulo: "Seis formatos. Gire e veja cada um.",
    lead:
      "Todo display é modular e fabricado no Brasil. A comunicação é cambiável, então a mesma estrutura serve a marca de agora e a de daqui a três semanas.",
    instrucao: "Arraste para girar",
    formatos: [
      { id: "essencial", rotulo: "Ponta", nome: "Ponta de gôndola", texto: "O ponto mais disputado da loja, com testeira e banners laterais.", uso: "Campanha de marca e oferta", medidas: "202 × 104 × 55 cm" },
      { id: "ilha", rotulo: "Ilha", nome: "Ilha dupla face", texto: "Duas frentes de venda no mesmo display, para corredor largo.", uso: "Dominar uma categoria", medidas: "190 × 120 × 96 cm" },
      { id: "painel", rotulo: "Painel", nome: "Painel de acessórios", texto: "Painel canaletado com ganchos para item pequeno de alto valor.", uso: "Acessórios e conveniência", medidas: "195 × 122 × 42 cm" },
      { id: "vitrine", rotulo: "Vitrine", nome: "Vitrine premium", texto: "Portas de vidro que protegem o produto e valorizam a cota.", uso: "Lançamento e premium", medidas: "192 × 122 × 54 cm" },
      { id: "categoria", rotulo: "Categoria", nome: "Expositor de categoria", texto: "Prateleiras com acrílico e faixa de marca na base.", uso: "Cosméticos e higiene", medidas: "200 × 100 × 46 cm" },
      { id: "multiuso", rotulo: "Multiuso", nome: "Multiuso com gavetas", texto: "Prateleiras em cima e estoque de apoio embaixo.", uso: "Alto giro e volume", medidas: "195 × 74 × 52 cm" },
    ],
    rotulos: { uso: "Indicado para", medidas: "Medidas", ver3d: "Modelo 3D, gire com o dedo ou com o mouse" },
  },
  pacotes: {
    chapeu: "Pacotes",
    titulo: "Três níveis de tecnologia no mesmo display.",
    lead:
      "A estrutura é a mesma. O que muda é quanto o display consegue medir e provar, e isso muda quanto a rede pode cobrar pela cota.",
    porMes: "por display, por mês",
    itens: [
      {
        id: "essencial",
        nome: "Essencial",
        preco: 499,
        selo: "Ideal para começar",
        quem: "Para começar a vender espaço já, com baixa complexidade.",
        recursos: ["Display modular", "Comunicação cambiável", "QR patrimonial", "Manutenção inclusa"],
      },
      {
        id: "sense",
        nome: "Sense",
        preco: 849,
        selo: "Mais vendido",
        quem: "Para pontos de maior fluxo, com prova de que o público passou.",
        recursos: ["Tudo do Essencial", "Sensor de proximidade", "Alertas de conexão", "Painel de execução"],
      },
      {
        id: "media",
        nome: "Media",
        preco: 1290,
        selo: "Maior valor por cota",
        quem: "Para lançamentos e campanhas premium, com vídeo dentro da loja.",
        recursos: ["Tudo do Sense", "Tela e player", "Conteúdo remoto", "Prova de veiculação"],
      },
    ],
    nota: "Valores por display, por mês, com instalação, manutenção e plataforma inclusas.",
  },
  tecnologia: {
    chapeu: "Tecnologia embarcada",
    titulo: "Sensor só entra quando gera uma decisão.",
    lead:
      "A camada interna já vem nos pacotes. A camada externa entra por projeto, quando a categoria justifica. Nada aqui identifica uma pessoa.",
    instrucao: "Clique em um módulo para ler",
    camadas: { interna: "Camada interna", externa: "Camada externa" },
    modulos: [
      { camada: "interna", plano: "Essencial", titulo: "QR patrimonial e do shopper", texto: "Um código controla ativo, loja, campanha e check-in da equipe. O outro leva o shopper para cupom, pesquisa ou página da marca.", decide: "Prova de instalação e interesse" },
      { camada: "interna", plano: "Essencial", titulo: "Geolocalização de visita", texto: "Registra a coordenada no check-in da equipe, com a precisão informada pelo aparelho. O QR sozinho não rastreia ninguém.", decide: "Comprovação de rota e visita" },
      { camada: "interna", plano: "Sense", titulo: "Sensor de proximidade", texto: "Mede passagens na zona do display e permanência aproximada. Serve para precificar posição, não para prometer audiência.", decide: "Preço da cota por posição" },
      { camada: "interna", plano: "Sense", titulo: "Conectividade e alertas", texto: "O display avisa quando cai, quando a campanha muda e quando alguma coisa precisa de visita técnica.", decide: "Uptime e rota de manutenção" },
      { camada: "interna", plano: "Media", titulo: "Tela e conteúdo remoto", texto: "Playlist por dia, loja e categoria, trocada sem visita técnica, com registro de arquivo, horário e falhas.", decide: "Venda premium e prova de veiculação" },
      { camada: "interna", plano: "Media", titulo: "Iluminação inteligente", texto: "LED que destaca o ponto com baixo consumo e reporta o próprio estado de funcionamento.", decide: "Destaque e saúde do ativo" },
      { camada: "externa", plano: "Projeto", titulo: "Prateleira com peso", texto: "Variação de peso indica retirada, reposição e possível ruptura. Retirada não é venda confirmada.", decide: "Ruptura e reposição" },
      { camada: "externa", plano: "Projeto", titulo: "Integração de sell-out", texto: "Cruza a campanha com a venda agregada por SKU, loja e data para avaliar impacto comercial com rigor.", decide: "Impacto real da campanha" },
      { camada: "externa", plano: "Projeto", titulo: "Visão computacional", texto: "Confere planograma e disponibilidade por imagem de produto e prateleira. Nunca reconhecimento facial.", decide: "Conformidade de execução" },
      { camada: "externa", plano: "Projeto", titulo: "Temperatura", texto: "Para categorias refrigeradas e sensíveis, com histórico e alerta de desvio.", decide: "Segurança da categoria" },
    ],
    rotulos: { entra: "Entra no plano", decide: "Decide" },
  },
  contas: {
    chapeu: "A conta",
    titulo: "Comprar exige capital antes de vender. Assinar custa R$ 499 por mês.",
    lead:
      "A comparação abaixo usa as premissas do plano de negócio, no primeiro mês de operação, por display.",
    comprar: {
      titulo: "Comprar sozinho",
      valor: 3620,
      unidade: "por display, no 1º mês",
      linhas: ["Display R$ 3.200", "Instalação R$ 350", "Manutenção e operação R$ 70"],
      contras: ["Capital parado antes da primeira venda", "Manutenção e reparos por conta da rede", "Tecnologia que envelhece no balanço"],
    },
    assinar: {
      titulo: "Assinar a Códice",
      valor: 499,
      unidade: "por display, por mês",
      selo: "86% menos no 1º mês",
      linhas: ["Assinatura com tudo incluso", "Nenhum capital imobilizado", "Instalação e manutenção inclusas", "Tecnologia que evolui por camada"],
    },
    cota: {
      titulo: "Uma cota vendida paga três meses de aluguel",
      texto: "1 cota = 1 semana de 1 display, vendida para a marca a R$ 1.500 na referência do plano.",
      meses: "Mês",
    },
    fiscal: {
      titulo: "Na assinatura, o gasto vira despesa que reduz imposto",
      lead: "Escolha o regime da sua rede e veja o custo efetivo da mensalidade.",
      regimes: [
        { nome: "Simples ou Presumido", nota: "Sem efeito no imposto", custo: 499, volta: 0 },
        { nome: "Lucro Real · 24%", nota: "IRPJ 15% + CSLL 9%", custo: 379, volta: 120 },
        { nome: "Lucro Real · 34%", nota: "Com adicional de IRPJ", custo: 329, volta: 170 },
      ],
      rotulos: { custoEfetivo: "Custo efetivo por mês", volta: "Volta em imposto", semEfeito: "Sem efeito no imposto" },
      ressalva:
        "Vale para o Lucro Real, quando a despesa é necessária, usual e comprovada. Na compra, o display vira imobilizado e deprecia cerca de 10% ao ano. Confirme com a sua contabilidade.",
    },
  },
  industria: {
    chapeu: "Para a indústria",
    titulo: "Display próprio custa caro e ninguém mantém. Com a Códice, a marca compra só a semana.",
    lead: "A mesma estrutura que gera receita para a rede resolve seis dores antigas de quem investe em ponto de venda.",
    linhas: [
      { dor: "Display caro", dorTexto: "Produzido por campanha e descartado depois", solucao: "Compra só a semana", solucaoTexto: "Cota semanal com a comunicação inclusa" },
      { dor: "Sem manutenção", dorTexto: "Quebrado, sujo e fora do padrão da marca", solucao: "Manutenção programada", solucaoTexto: "A Códice mantém o ponto sempre em ordem" },
      { dor: "Logística loja a loja", dorTexto: "Produzir, enviar e montar em cada PDV", solucao: "Display já instalado", solucaoTexto: "A marca envia só a arte" },
      { dor: "Espaço negociado caso a caso", dorTexto: "Sem tabela, sem calendário, sem padrão", solucao: "Agenda com tabela", solucaoTexto: "Reserva por semana, posição e loja" },
      { dor: "Sem prova de execução", dorTexto: "Não sabe se montaram nem onde ficou", solucao: "Prova com foto e QR", solucaoTexto: "Evidência de instalação por loja" },
      { dor: "Sem dado de resultado", dorTexto: "Investe sem medir o retorno", solucao: "Sensores e relatório", solucaoTexto: "Fluxo e veiculação por campanha" },
    ],
    etapas: {
      proprio: { titulo: "Display próprio: 5 etapas por conta da marca", itens: ["Projeto", "Produção", "Frete", "Montagem", "Manutenção"] },
      codice: { titulo: "Cota Códice: 3 etapas, display pronto", itens: ["Reserva", "Arte", "No ar"] },
    },
  },
  simulador: {
    chapeu: "Simulador",
    titulo: "Coloque a sua rede e veja quando o lucro chega.",
    lead: "Os números mudam enquanto você mexe. Nada aqui é enviado para lugar nenhum.",
    campos: {
      pacote: "Pacote",
      displays: "Displays por loja",
      lojas: "Lojas da rede",
      cota: "Preço da cota",
      ocupacao: "Agenda vendida",
      periodo: "Período do contrato",
    },
    periodos: [
      { rotulo: "1 mês", meses: 1 },
      { rotulo: "6 meses", meses: 6 },
      { rotulo: "12 meses", meses: 12 },
    ],
    saidas: { receita: "Receita com cotas", aluguel: "Aluguel Códice", lucro: "Lucro potencial" },
    grafico: "Lucro acumulado mês a mês",
    nota: "A marca compra a semana do display, com a comunicação inclusa. Valores antes de impostos. Mês médio de 4,3 semanas.",
    enviar: "Enviar esta simulação",
  },
  grupo: {
    chapeu: "Quem entrega",
    titulo: "A Códice nasce dentro de um grupo que já faz o varejo acontecer.",
    lead: "A fábrica produz, o trade desenha e mede, e a Códice une as duas pontas em um contrato por display.",
    empresas: [
      {
        nome: "NeoBand",
        papel: "A fábrica",
        texto: "Fabrica cada display da Códice, com quatro décadas de mobiliário de ponto de venda.",
        numeros: [
          { valor: "40+", rotulo: "anos de fabricação" },
          { valor: "100%", rotulo: "produção no Brasil" },
          { valor: "FSC", rotulo: "materiais certificados" },
          { valor: "2025", rotulo: "Fornecedor do Ano" },
        ],
      },
      {
        nome: "75 LAB",
        papel: "Trade e tecnologia",
        texto: "Desenha a experiência na loja, constrói a plataforma e mede o resultado no ponto de venda.",
        numeros: [
          { valor: "15+", rotulo: "anos no trade marketing" },
          { valor: "15.000+", rotulo: "PDVs positivados" },
          { valor: "95%", rotulo: "projetos aprovados" },
          { valor: "84", rotulo: "cases entregues" },
        ],
      },
    ],
    ressalva: "Os números acima são das empresas do grupo. A Códice é a operação nova que une as duas.",
  },
  honestidade: {
    chapeu: "Honestidade dos dados",
    titulo: "O que a Códice se recusa a afirmar.",
    lead:
      "Retail media está cheio de número inflado. Cada métrica aqui diz o que mediu e nada além disso. É isso que sustenta a conversa com a marca na renovação.",
    itens: [
      { afirma: "Passagens medidas pelo sensor", naoAfirma: "Não é pessoa única" },
      { afirma: "Permanência perto do display", naoAfirma: "Não é atenção visual" },
      { afirma: "Posição no momento da leitura do QR", naoAfirma: "Não é rastreamento contínuo" },
      { afirma: "Retirada do produto da prateleira", naoAfirma: "Não é venda" },
      { afirma: "Prova de veiculação da peça", naoAfirma: "Não é audiência" },
      { afirma: "Contagem agregada de fluxo", naoAfirma: "Sem reconhecimento facial" },
    ],
  },
  faq: {
    chapeu: "Dúvidas frequentes",
    titulo: "O que perguntam antes de fechar.",
    itens: [
      {
        pergunta: "A minha rede precisa comprar alguma coisa para começar?",
        resposta:
          "Não. O display, a instalação, a manutenção e a plataforma entram na assinatura de R$ 499 por display por mês. Nenhum capital sai do caixa antes da primeira cota vendida.",
      },
      {
        pergunta: "Quem vende a cota para a indústria?",
        resposta:
          "A rede vende o próprio espaço e fica com a receita. A plataforma entrega a tabela, o calendário e a prova de execução para a conversa com a marca. A Códice também apoia comercialmente quando a rede pede.",
      },
      {
        pergunta: "O sensor identifica as pessoas que passam pela loja?",
        resposta:
          "Não. A contagem é agregada, sem reconhecimento facial e sem identificar o shopper. O sistema informa passagem e permanência aproximada, e repete esse limite em toda tela onde o número aparece.",
      },
      {
        pergunta: "E se o display quebrar ou a campanha mudar?",
        resposta:
          "Manutenção e troca de comunicação estão na assinatura. O próprio display avisa quando cai a conexão, e a ocorrência vira tarefa com prazo dentro da plataforma.",
      },
      {
        pergunta: "Dá para começar com poucas lojas?",
        resposta:
          "Dá. O contrato é por display, então a rede pode começar por uma praça ou por um grupo de lojas, medir o resultado e ampliar depois.",
      },
      {
        pergunta: "Em quanto tempo o display se paga?",
        resposta:
          "Na referência do plano, uma cota de R$ 1.500 cobre três meses de assinatura do pacote Essencial. O simulador desta página mostra o mês em que o lucro acumulado da sua rede vira positivo.",
      },
    ],
  },
  conversao: {
    chapeu: "Próximo passo",
    titulo: "Leve a Códice para a sua rede.",
    lead:
      "Conversa de quarenta minutos com o seu número de lojas na mesa: formatos, tabela de cota e o mês em que a operação começa a dar lucro.",
    campos: { nome: "Nome", empresa: "Rede ou empresa", email: "E-mail", lojas: "Número de lojas", mensagem: "Conte o seu cenário" },
    ajuda: { nome: "Como devemos chamar você", email: "Usamos apenas para responder", mensagem: "Quanto mais específico, melhor preparamos a conversa" },
    enviar: "Quero uma proposta",
    enviando: "Preparando",
    sucesso: "Tudo pronto para enviar",
    sucessoDetalhe: "Abrimos o seu programa de e-mail com a mensagem escrita. Basta confirmar o envio. Se nada abrir, escreva para",
    erro: "Confira os campos destacados",
    alternativaTitulo: "Prefere outro caminho?",
    alternativaWhatsapp: "Falar pelo WhatsApp",
    alternativaEmail: "Escrever um e-mail",
    consentimento: "Ao enviar, você concorda que a Códice use estes dados apenas para responder ao seu contato.",
  },
  rodape: {
    frase: "Displays inteligentes para grandes resultados.",
    navegacao: "Navegação",
    contato: "Contato",
    legal: "Legal",
    privacidade: "Política de privacidade",
    creditos: "Fabricação NeoBand. Trade e tecnologia 75 LAB.",
    direitos: "Todos os direitos reservados.",
  },
  privacidade: {
    titulo: "Política de privacidade",
    atualizado: "Atualizada em setembro de 2026",
    blocos: [
      { titulo: "O que este site coleta", texto: "Este site é estático e não usa cookie de rastreamento, pixel de publicidade nem analytics de terceiros. Nada do que você lê ou simula aqui sai do seu navegador." },
      { titulo: "O simulador", texto: "Os números que você digita no simulador ficam apenas na memória do seu navegador. Nenhum deles é enviado para a Códice, a menos que você escolha enviar a simulação por e-mail." },
      { titulo: "O formulário de contato", texto: "O formulário monta uma mensagem no seu próprio programa de e-mail. Os dados só saem do seu dispositivo quando você confirma o envio." },
      { titulo: "Para que usamos", texto: "Nome, empresa, e-mail e mensagem são usados apenas para responder ao contato e preparar a proposta. Não vendemos e não compartilhamos esses dados com terceiros." },
      { titulo: "Dados na operação", texto: "Os sensores dos displays fazem contagem agregada de fluxo, sem reconhecimento facial e sem identificar o shopper. Nenhuma pessoa é identificada em nenhuma etapa." },
      { titulo: "Seus direitos", texto: "Você pode pedir acesso, correção ou exclusão dos dados que enviou, conforme a Lei Geral de Proteção de Dados. O pedido é atendido pelo mesmo e-mail de contato." },
    ],
    voltar: "Voltar para o site",
  },
  erro404: {
    titulo: "Esta página saiu do mapa.",
    texto: "O endereço que você abriu não existe mais ou nunca existiu. Acontece até com display bem gerenciado.",
    voltar: "Voltar para o início",
  },
};
