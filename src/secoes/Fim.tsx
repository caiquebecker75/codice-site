import { useId, useState } from "react";
import { Acordeao, BotaoMagnetico, Revelar, TituloCortina } from "../componentes/Base";
import { partirTitulo } from "./Narrativa";
import { Logotipo, Hexagono } from "../componentes/Marca";
import { CONTATO, IDIOMAS, PLATAFORMA, SITE, type Idioma } from "../conteudo/config";
import type { Conteudo } from "../conteudo/tipos";

/* =====================================================================
   Dúvidas, conversão e rodapé.
   O formulário não depende de servidor: valida no navegador e entrega
   a mensagem pronta no programa de e-mail da pessoa. Nada sai do
   dispositivo sem a confirmação dela.
   ===================================================================== */

export function Faq({ c }: { c: Conteudo }) {
  return (
    <section id="faq" className="secao bg-papel">
      <div className="env grid gap-12 lg:grid-cols-[.36fr_.64fr] lg:gap-20">
        <div>
          <p className="chapeu">{c.faq.chapeu}</p>
          <TituloCortina className="titulo-menor mt-6" linhas={partirTitulo(c.faq.titulo)} />
          <Hexagono className="mt-10 hidden h-32 w-32 text-azul/20 lg:block" />
        </div>
        <Acordeao itens={c.faq.itens} />
      </div>
    </section>
  );
}

type Estado = "parado" | "enviando" | "pronto";

export function Conversao({ c }: { c: Conteudo }) {
  const base = useId();
  const [estado, setEstado] = useState<Estado>("parado");
  const [erros, setErros] = useState<Record<string, boolean>>({});
  const [dados, setDados] = useState({ nome: "", empresa: "", email: "", lojas: "", mensagem: "", sobra: "" });

  const mudar = (campo: keyof typeof dados) => (evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDados((atual) => ({ ...atual, [campo]: evento.target.value }));
    setErros((atual) => ({ ...atual, [campo]: false }));
  };

  const enviar = (evento: React.FormEvent) => {
    evento.preventDefault();
    if (dados.sobra) return; // armadilha para robô de formulário

    const novos: Record<string, boolean> = {
      nome: dados.nome.trim().length < 2,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(dados.email.trim()),
      mensagem: dados.mensagem.trim().length < 10,
    };
    setErros(novos);
    if (Object.values(novos).some(Boolean)) {
      document.getElementById(`${base}-${Object.keys(novos).find((k) => novos[k])}`)?.focus();
      return;
    }

    setEstado("enviando");
    const assunto = `Demonstração da Códice · ${dados.empresa || dados.nome}`;
    const corpo = [
      `${c.conversao.campos.nome}: ${dados.nome}`,
      `${c.conversao.campos.empresa}: ${dados.empresa || "-"}`,
      `${c.conversao.campos.email}: ${dados.email}`,
      `${c.conversao.campos.lojas}: ${dados.lojas || "-"}`,
      "",
      `${c.conversao.campos.mensagem}`,
      dados.mensagem,
    ].join("\n");

    window.setTimeout(() => {
      window.location.href = `mailto:${CONTATO.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
      setEstado("pronto");
    }, 450);
  };

  return (
    <section id="falar" className="secao bg-papel-2">
      <div className="env">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-navy-700 to-navy p-8 text-white shadow-[var(--shadow-alta)] sm:p-12 lg:p-16">
          <Hexagono className="pointer-events-none absolute -right-20 -top-16 h-[420px] w-[420px] text-white/8" />

          <div className="relative grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="chapeu">{c.conversao.chapeu}</p>
              <h2 className="titulo-menor mt-6 max-w-[16ch]">{c.conversao.titulo}</h2>
              <p className="lead mt-6 text-white/70">{c.conversao.lead}</p>

              <div className="mt-10">
                <p className="text-[12px] font-bold uppercase tracking-[.16em] text-white/40">
                  {c.conversao.alternativaTitulo}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a href={`mailto:${CONTATO.email}`} className="botao botao-vazado">
                    {c.conversao.alternativaEmail}
                  </a>
                  <a href={PLATAFORMA} target="_blank" rel="noopener noreferrer" className="botao botao-vazado">
                    {c.conversao.alternativaPlataforma}
                  </a>
                </div>
              </div>
            </div>

            <form noValidate onSubmit={enviar} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Campo
                  id={`${base}-nome`}
                  rotulo={c.conversao.campos.nome}
                  ajuda={c.conversao.ajuda.nome}
                  valor={dados.nome}
                  aoMudar={mudar("nome")}
                  erro={erros.nome}
                  mensagemErro={c.conversao.erro}
                  obrigatorio
                  autoComplete="name"
                />
                <Campo
                  id={`${base}-empresa`}
                  rotulo={c.conversao.campos.empresa}
                  valor={dados.empresa}
                  aoMudar={mudar("empresa")}
                  autoComplete="organization"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Campo
                  id={`${base}-email`}
                  tipo="email"
                  rotulo={c.conversao.campos.email}
                  ajuda={c.conversao.ajuda.email}
                  valor={dados.email}
                  aoMudar={mudar("email")}
                  erro={erros.email}
                  mensagemErro={c.conversao.erro}
                  obrigatorio
                  autoComplete="email"
                />
                <Campo
                  id={`${base}-lojas`}
                  tipo="text"
                  inputMode="numeric"
                  rotulo={c.conversao.campos.lojas}
                  valor={dados.lojas}
                  aoMudar={mudar("lojas")}
                />
              </div>
              <Campo
                id={`${base}-mensagem`}
                rotulo={c.conversao.campos.mensagem}
                ajuda={c.conversao.ajuda.mensagem}
                valor={dados.mensagem}
                aoMudar={mudar("mensagem")}
                erro={erros.mensagem}
                mensagemErro={c.conversao.erro}
                obrigatorio
                area
              />

              {/* campo invisível para humanos, atraente para robôs */}
              <label className="absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true">
                Não preencha
                <input tabIndex={-1} autoComplete="off" value={dados.sobra} onChange={mudar("sobra")} />
              </label>

              <p className="text-[12.5px] leading-relaxed text-white/45">{c.conversao.consentimento}</p>

              <div className="flex flex-wrap items-center gap-4">
                <BotaoMagnetico type="submit" className="botao botao-teal" disabled={estado === "enviando"}>
                  {estado === "enviando" ? c.conversao.enviando : c.conversao.enviar}
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 12h15M13 6l6 6-6 6" />
                  </svg>
                </BotaoMagnetico>
              </div>

              <p aria-live="polite" className="min-h-[24px] text-[14.5px] text-teal">
                {estado === "pronto" && (
                  <>
                    <b className="font-semibold">{c.conversao.sucesso}.</b>{" "}
                    <span className="text-white/70">
                      {c.conversao.sucessoDetalhe}{" "}
                      <a className="underline decoration-teal/60 underline-offset-4" href={`mailto:${CONTATO.email}`}>
                        {CONTATO.email}
                      </a>
                      .
                    </span>
                  </>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Campo({
  id,
  rotulo,
  ajuda,
  valor,
  aoMudar,
  erro,
  mensagemErro,
  obrigatorio,
  area,
  tipo = "text",
  autoComplete,
  inputMode,
}: {
  id: string;
  rotulo: string;
  ajuda?: string;
  valor: string;
  aoMudar: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  erro?: boolean;
  mensagemErro?: string;
  obrigatorio?: boolean;
  area?: boolean;
  tipo?: string;
  autoComplete?: string;
  inputMode?: "numeric" | "text";
}) {
  const descricao = ajuda ? `${id}-ajuda` : undefined;
  const classe = `w-full rounded-2xl bg-white/8 px-5 py-4 text-[16px] text-white placeholder-white/30 outline-none transition-colors ${
    erro ? "bg-[#FF6B6B]/15 ring-2 ring-[#FF8A8A]" : "focus:bg-white/14"
  }`;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[13px] font-semibold text-white/70">
        {rotulo}
        {obrigatorio && <span className="ml-1 text-teal" aria-hidden="true">*</span>}
      </label>
      {area ? (
        <textarea
          id={id}
          rows={4}
          value={valor}
          onChange={aoMudar}
          required={obrigatorio}
          aria-invalid={erro || undefined}
          aria-describedby={descricao}
          className={`${classe} resize-y`}
        />
      ) : (
        <input
          id={id}
          type={tipo}
          value={valor}
          onChange={aoMudar}
          required={obrigatorio}
          aria-invalid={erro || undefined}
          aria-describedby={descricao}
          autoComplete={autoComplete}
          inputMode={inputMode}
          className={classe}
        />
      )}
      {ajuda && (
        <p id={descricao} className="mt-2 text-[12.5px] text-white/40">
          {erro ? <span className="text-[#FFB4AB]">{mensagemErro}</span> : ajuda}
        </p>
      )}
    </div>
  );
}

export function Rodape({
  c,
  idioma,
  caminhoIdioma,
  linkPrivacidade,
  inicio = "#topo",
  ancora = "",
}: {
  c: Conteudo;
  idioma: Idioma;
  caminhoIdioma: (destino: Idioma) => string;
  linkPrivacidade: string;
  inicio?: string;
  ancora?: string;
}) {
  const ano = new Date().getFullYear();
  return (
    <footer className="bg-navy-900 pt-16 text-white/60">
      <div className="env grid gap-12 pb-12 md:grid-cols-[1.3fr_.9fr_.9fr_1fr]">
        <div>
          <a href={inicio} aria-label="Códice">
            <Logotipo />
          </a>
          <p className="mt-5 max-w-[30ch] text-[15px] leading-relaxed">{c.rodape.frase}</p>
          <p className="mt-5 text-[13.5px] text-white/35">{CONTATO.base}</p>
        </div>

        <nav aria-label={c.rodape.navegacao}>
          <h2 className="mb-4 text-[12px] font-bold uppercase tracking-[.16em] text-white/35">{c.rodape.navegacao}</h2>
          <ul className="grid gap-2.5 text-[15px]">
            {c.nav.links.map((link) => (
              <li key={link.id}>
                <a className="transition-colors hover:text-teal" href={`${ancora}#${link.id}`}>
                  {link.rotulo}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-[12px] font-bold uppercase tracking-[.16em] text-white/35">{c.rodape.contato}</h2>
          <ul className="grid gap-2.5 text-[15px]">
            <li>
              <a className="transition-colors hover:text-teal" href={`mailto:${CONTATO.email}`}>
                {CONTATO.email}
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-teal" href={CONTATO.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-teal" href={CONTATO.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-teal" href={CONTATO.site75lab} target="_blank" rel="noopener noreferrer">
                {SITE.operadora}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-[12px] font-bold uppercase tracking-[.16em] text-white/35">{c.rodape.legal}</h2>
          <ul className="grid gap-2.5 text-[15px]">
            <li>
              <a className="transition-colors hover:text-teal" href={linkPrivacidade}>
                {c.rodape.privacidade}
              </a>
            </li>
          </ul>
          <div className="mt-6 flex gap-2" role="group" aria-label={c.nav.idioma}>
            {IDIOMAS.map((item) => (
              <a
                key={item.id}
                href={caminhoIdioma(item.id)}
                hrefLang={item.htmlLang}
                lang={item.htmlLang}
                aria-current={item.id === idioma ? "true" : undefined}
                className={`rounded-full px-3 py-1.5 text-[12.5px] font-semibold transition-colors ${
                  item.id === idioma ? "bg-white text-navy" : "bg-white/8 text-white/60 hover:text-white"
                }`}
              >
                {item.rotulo}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="env flex flex-wrap items-center justify-between gap-4 py-7 text-[13px] text-white/35">
          <p>
            © {ano} {SITE.marca}. {c.rodape.direitos}
          </p>
          <p>{c.rodape.creditos}</p>
        </div>
      </div>
    </footer>
  );
}

export { Revelar };
