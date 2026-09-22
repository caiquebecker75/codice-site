import type { NomeIcone } from "../componentes/Icones";

/* =====================================================================
   Forma do conteúdo.

   Regra de escrita deste site: título curto e UMA frase de apoio.
   Se o texto não couber em uma linha de leitura, ele não entra aqui,
   vai para a conversa com o vendedor.
   ===================================================================== */

export interface Conteudo {
  meta: { titulo: string; descricao: string; palavras: string; ogAlt: string };
  nav: {
    links: { id: string; rotulo: string }[];
    cta: string;
    abrirMenu: string;
    fecharMenu: string;
    idioma: string;
    irParaConteudo: string;
  };
  heroi: {
    chapeu: string;
    titulo: [string, string];
    lead: string;
    ctaPrimario: string;
    ctaSecundario: string;
    selos: { valor: string; rotulo: string }[];
    legendaFoto: string;
  };
  prova: { frase: string; marcas: string };
  como: {
    chapeu: string;
    titulo: string;
    passos: { n: string; icone: NomeIcone; titulo: string; texto: string; foto: string; alt: string }[];
    regra: string;
  };
  entrega: {
    chapeu: string;
    titulo: string;
    lead: string;
    itens: { icone: NomeIcone; titulo: string; texto: string }[];
  };
  plataforma: {
    chapeu: string;
    titulo: string;
    lead: string;
    telas: { arquivo: string; nome: string; texto: string }[];
    ampliar: string;
    fechar: string;
    anterior: string;
    proxima: string;
    aviso: string;
  };
  displays: {
    chapeu: string;
    titulo: string;
    lead: string;
    instrucao: string;
    formatos: { id: string; rotulo: string; nome: string; texto: string; medidas: string }[];
  };
  planos: {
    chapeu: string;
    titulo: string;
    lead: string;
    porMes: string;
    itens: { id: string; nome: string; preco: number; selo: string; quem: string; recursos: { icone: NomeIcone; texto: string }[] }[];
    cta: string;
    nota: string;
  };
  conta: {
    chapeu: string;
    titulo: string;
    lead: string;
    comprar: { titulo: string; valor: number; nota: string };
    assinar: { titulo: string; valor: number; nota: string; selo: string };
    grafico: { titulo: string; serieComprar: string; serieAssinar: string; virada: string; mes: string };
    argumento: string[];
    simulador: {
      titulo: string;
      campos: { lojas: string; displays: string; cota: string; ocupacao: string };
      saidas: { receita: string; aluguel: string; lucro: string };
      periodo: string;
      nota: string;
      cta: string;
    };
  };
  numeros: { itens: { valor: number; sufixo: string; rotulo: string }[]; nota: string };
  faq: { chapeu: string; titulo: string; itens: { pergunta: string; resposta: string }[] };
  conversao: {
    chapeu: string;
    titulo: string;
    lead: string;
    campos: { nome: string; empresa: string; email: string; lojas: string; mensagem: string };
    enviar: string;
    enviando: string;
    sucesso: string;
    sucessoDetalhe: string;
    erro: string;
    whatsapp: string;
    email: string;
    consentimento: string;
  };
  rodape: {
    frase: string;
    navegacao: string;
    contato: string;
    privacidade: string;
    creditos: string;
    direitos: string;
  };
  privacidade: { titulo: string; atualizado: string; blocos: { titulo: string; texto: string }[]; voltar: string };
  erro404: { titulo: string; texto: string; voltar: string };
}
