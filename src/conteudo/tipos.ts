/* =====================================================================
   Forma do conteúdo. Os três idiomas obedecem a este contrato, então
   uma seção nova aparece como erro de tipo nos arquivos que faltarem.

   O conteúdo comercial vem da apresentação de venda da Códice
   (repo neoband-retail-media): preços, formatos, pacotes, tecnologia
   e a conta da rede são os mesmos do deck.
   ===================================================================== */

export interface Selo { valor: string; rotulo: string }

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
  abertura: { palavra: string; pular: string };
  heroi: {
    chapeu: string;
    titulo: [string, string, string];
    lead: string;
    ctaPrimario: string;
    ctaSecundario: string;
    selos: Selo[];
    rolar: string;
    legendaFoto: string;
  };
  mudou: {
    chapeu: string;
    titulo: string;
    lead: string;
    investimento: { valor: number; prefixo: string; sufixo: string; separador: string; rotulo: string; fonte: string };
    crescimento: { valor: number; sufixo: string; rotulo: string };
    canais: { nome: string; nota: string }[];
    calculadora: {
      titulo: string;
      lojas: string;
      displays: string;
      cota: string;
      ocupacao: string;
      resultado: string;
      porAno: string;
      nota: string;
    };
  };
  comoFunciona: {
    chapeu: string;
    titulo: string;
    lead: string;
    passos: { n: string; titulo: string; texto: string; foto: string; alt: string }[];
    destaque: { valor: string; rotulo: string; nota: string };
    regra: string;
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
    entrar: string;
  };
  displays: {
    chapeu: string;
    titulo: string;
    lead: string;
    instrucao: string;
    formatos: { id: string; rotulo: string; nome: string; texto: string; uso: string; medidas: string }[];
    rotulos: { uso: string; medidas: string; ver3d: string };
  };
  pacotes: {
    chapeu: string;
    titulo: string;
    lead: string;
    porMes: string;
    itens: { id: string; nome: string; preco: number; selo: string; quem: string; recursos: string[] }[];
    nota: string;
  };
  tecnologia: {
    chapeu: string;
    titulo: string;
    lead: string;
    instrucao: string;
    camadas: { interna: string; externa: string };
    modulos: { camada: "interna" | "externa"; plano: string; titulo: string; texto: string; decide: string }[];
    rotulos: { entra: string; decide: string };
  };
  contas: {
    chapeu: string;
    titulo: string;
    lead: string;
    comprar: {
      titulo: string;
      valor: number;
      unidade: string;
      linhas: string[];
      contras: string[];
    };
    assinar: {
      titulo: string;
      valor: number;
      unidade: string;
      selo: string;
      linhas: string[];
    };
    cota: { titulo: string; texto: string; meses: string };
    fiscal: {
      titulo: string;
      lead: string;
      regimes: { nome: string; nota: string; custo: number; volta: number }[];
      rotulos: { custoEfetivo: string; volta: string; semEfeito: string };
      ressalva: string;
    };
  };
  industria: {
    chapeu: string;
    titulo: string;
    lead: string;
    linhas: { dor: string; dorTexto: string; solucao: string; solucaoTexto: string }[];
    etapas: { proprio: { titulo: string; itens: string[] }; codice: { titulo: string; itens: string[] } };
  };
  simulador: {
    chapeu: string;
    titulo: string;
    lead: string;
    campos: { pacote: string; displays: string; lojas: string; cota: string; ocupacao: string; periodo: string };
    periodos: { rotulo: string; meses: number }[];
    saidas: { receita: string; aluguel: string; lucro: string };
    grafico: string;
    nota: string;
    enviar: string;
  };
  grupo: {
    chapeu: string;
    titulo: string;
    lead: string;
    empresas: { nome: string; papel: string; texto: string; numeros: { valor: string; rotulo: string }[] }[];
    ressalva: string;
  };
  honestidade: {
    chapeu: string;
    titulo: string;
    lead: string;
    itens: { afirma: string; naoAfirma: string }[];
  };
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
    alternativaWhatsapp: string;
    alternativaEmail: string;
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
