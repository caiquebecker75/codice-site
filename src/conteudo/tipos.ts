/* =====================================================================
   Forma do conteúdo. Os três idiomas obedecem a este contrato, então
   uma seção nova aparece como erro de tipo nos arquivos que faltarem.
   ===================================================================== */

export interface Selo { valor: string; rotulo: string }
export interface Item { titulo: string; texto: string }

export interface Conteudo {
  meta: {
    titulo: string;
    descricao: string;
    palavras: string;
    ogAlt: string;
  };
  nav: {
    links: { id: string; rotulo: string }[];
    cta: string;
    abrirMenu: string;
    fecharMenu: string;
    idioma: string;
    irParaConteudo: string;
  };
  abertura: { palavra: string; pular: string };
  heroi: {
    chapeu: string;
    titulo: [string, string, string];
    lead: string;
    ctaPrimario: string;
    ctaSecundario: string;
    selos: Selo[];
    rolar: string;
    painel: {
      barra: string;
      kpis: { rotulo: string; valor: string; nota: string }[];
      graficoTitulo: string;
      gradeTitulo: string;
      legenda: [string, string, string];
    };
  };
  manifesto: {
    chapeu: string;
    titulo: string;
    paragrafos: string[];
    assinatura: string;
    marquee: string[];
  };
  desafio: {
    chapeu: string;
    titulo: string;
    lead: string;
    instrucao: string;
    itens: { n: string; titulo: string; texto: string; efeito: string }[];
  };
  solucao: {
    chapeu: string;
    titulo: string;
    lead: string;
    abas: {
      id: "fisico" | "midia";
      nome: string;
      unidade: string;
      linhas: { rotulo: string; valor: string }[];
      travaTitulo: string;
      trava: string;
      demo: string;
    }[];
    fecho: string;
  };
  sistema: {
    chapeu: string;
    titulo: string;
    lead: string;
    espacos: { id: string; nome: string; resumo: string; telas: string[] }[];
    contagem: string;
  };
  sensores: {
    chapeu: string;
    titulo: string;
    lead: string;
    itens: Item[];
    legenda: string;
  };
  pdv: {
    chapeu: string;
    titulo: string;
    lead: string;
    passos: Item[];
    camadas: { nome: string; texto: string }[];
  };
  metodo: {
    chapeu: string;
    titulo: string;
    lead: string;
    etapas: { prazo: string; titulo: string; texto: string }[];
  };
  honestidade: {
    chapeu: string;
    titulo: string;
    lead: string;
    itens: { afirma: string; naoAfirma: string }[];
  };
  perfis: {
    chapeu: string;
    titulo: string;
    lead: string;
    cartoes: { tipo: string; nome: string; pergunta: string; ganhos: string[] }[];
  };
  numeros: { chapeu: string; titulo: string; itens: { valor: number; sufixo: string; rotulo: string; nota: string }[] };
  faq: { chapeu: string; titulo: string; itens: { pergunta: string; resposta: string }[] };
  conversao: {
    chapeu: string;
    titulo: string;
    lead: string;
    campos: { nome: string; empresa: string; email: string; lojas: string; mensagem: string };
    ajuda: { nome: string; email: string; mensagem: string };
    enviar: string;
    enviando: string;
    sucesso: string;
    sucessoDetalhe: string;
    erro: string;
    alternativaTitulo: string;
    alternativaEmail: string;
    alternativaPlataforma: string;
    consentimento: string;
  };
  rodape: {
    frase: string;
    navegacao: string;
    contato: string;
    legal: string;
    privacidade: string;
    creditos: string;
    direitos: string;
  };
  privacidade: { titulo: string; atualizado: string; blocos: { titulo: string; texto: string }[]; voltar: string };
  erro404: { titulo: string; texto: string; voltar: string };
}
