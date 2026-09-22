import { useId, useState } from "react";
import { Acordeao, BotaoMagnetico } from "../componentes/Base";
import { Icone } from "../componentes/Icones";
import { Simbolo } from "../componentes/Marca";
import { Cabeca } from "./Home";
import { CONTATO, IDIOMAS, SITE, type Idioma } from "../conteudo/config";
import type { Conteudo } from "../conteudo/tipos";

/* =====================================================================
   Dúvidas, contato e rodapé.
   O formulário não depende de servidor: valida no navegador e entrega
   a mensagem pronta no programa de e-mail da pessoa.
   ===================================================================== */

export function Faq({ c }: { c: Conteudo }) {
  return (
    <section id="faq" className="secao bg-papel">
      <div className="env grid gap-10 lg:grid-cols-[.36fr_.64fr] lg:gap-16">
        <Cabeca chapeu={c.faq.chapeu} titulo={c.faq.titulo} />
        <Acordeao itens={c.faq.itens} />
      </div>
    </section>
  );
}

type Estado = "parado" | "enviando" | "pronto";

export function Conversao({ c }: { c: Conteudo }) {
  const base = useId().replace(/:/g, "");
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
    };
    setErros(novos);
    if (Object.values(novos).some(Boolean)) {
      document.getElementById(`${base}-${Object.keys(novos).find((k) => novos[k])}`)?.focus();
      return;
    }

    setEstado("enviando");
    const assunto = `Proposta da Códice · ${dados.empresa || dados.nome}`;
    const corpo = [
      `${c.conversao.campos.nome}: ${dados.nome}`,
      `${c.conversao.campos.empresa}: ${dados.empresa || "-"}`,
      `${c.conversao.campos.email}: ${dados.email}`,
      `${c.conversao.campos.lojas}: ${dados.lojas || "-"}`,
      "",
      dados.mensagem,
    ].join("\n");

    window.setTimeout(() => {
      window.location.href = `mailto:${CONTATO.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
      setEstado("pronto");
    }, 400);
  };

  return (
    <section id="falar" className="secao bg-white">
      <div className="env">
        <div className="grid gap-10 rounded-[28px] bg-navy p-8 text-white sm:p-12 lg:grid-cols-[.44fr_.56fr] lg:gap-16">
          <div>
            <p className="chapeu text-teal">{c.conversao.chapeu}</p>
            <h2 className="titulo-menor mt-4 max-w-[16ch] text-white">{c.conversao.titulo}</h2>
            <p className="mt-4 text-[16px] text-white/60">{c.conversao.lead}</p>

            <div className="mt-9 grid gap-3">
              {CONTATO.whatsapp && (
                <a
                  href={CONTATO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl bg-white/6 px-5 py-4 transition-colors hover:bg-white/12"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#25D366] text-white">
                    <Icone nome="whatsapp" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[13px] text-white/45">{c.conversao.whatsapp}</span>
                    <span className="num block text-[15.5px] font-semibold">{CONTATO.telefone}</span>
                  </span>
                </a>
              )}
              <a
                href={`mailto:${CONTATO.email}`}
                className="flex items-center gap-4 rounded-2xl bg-white/6 px-5 py-4 transition-colors hover:bg-white/12"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-azul text-white">
                  <Icone nome="email" className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[13px] text-white/45">{c.conversao.email}</span>
                  <span className="block text-[15.5px] font-semibold">{CONTATO.email}</span>
                </span>
              </a>
            </div>
          </div>

          <form noValidate onSubmit={enviar} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Campo id={`${base}-nome`} rotulo={c.conversao.campos.nome} valor={dados.nome} aoMudar={mudar("nome")} erro={erros.nome} mensagemErro={c.conversao.erro} obrigatorio autoComplete="name" />
              <Campo id={`${base}-empresa`} rotulo={c.conversao.campos.empresa} valor={dados.empresa} aoMudar={mudar("empresa")} autoComplete="organization" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Campo id={`${base}-email`} tipo="email" rotulo={c.conversao.campos.email} valor={dados.email} aoMudar={mudar("email")} erro={erros.email} mensagemErro={c.conversao.erro} obrigatorio autoComplete="email" />
              <Campo id={`${base}-lojas`} rotulo={c.conversao.campos.lojas} valor={dados.lojas} aoMudar={mudar("lojas")} inputMode="numeric" />
            </div>
            <Campo id={`${base}-mensagem`} rotulo={c.conversao.campos.mensagem} valor={dados.mensagem} aoMudar={mudar("mensagem")} area />

            <label className="absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true">
              Não preencha
              <input tabIndex={-1} autoComplete="off" value={dados.sobra} onChange={mudar("sobra")} />
            </label>

            <div className="mt-2 flex flex-wrap items-center gap-4">
              <BotaoMagnetico type="submit" className="botao botao-teal" disabled={estado === "enviando"}>
                {estado === "enviando" ? c.conversao.enviando : c.conversao.enviar}
                <Icone nome="seta" className="h-4 w-4" />
              </BotaoMagnetico>
              <p className="max-w-[28ch] text-[12px] leading-snug text-white/40">{c.conversao.consentimento}</p>
            </div>

            <p aria-live="polite" className="min-h-[22px] text-[14px] text-teal">
              {estado === "pronto" && (
                <>
                  <b className="font-semibold">{c.conversao.sucesso}.</b>{" "}
                  <span className="text-white/65">
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
    </section>
  );
}

function Campo({
  id,
  rotulo,
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
  const classe = `w-full rounded-2xl bg-white/8 px-5 py-4 text-[16px] text-white outline-none transition-colors ${
    erro ? "bg-[#FF6B6B]/15 ring-2 ring-[#FF8A8A]" : "focus:bg-white/14"
  }`;
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[13px] font-semibold text-white/60">
        {rotulo}
        {obrigatorio && <span className="ml-1 text-teal" aria-hidden="true">*</span>}
      </label>
      {area ? (
        <textarea id={id} rows={3} value={valor} onChange={aoMudar} className={`${classe} resize-y`} aria-invalid={erro || undefined} />
      ) : (
        <input
          id={id}
          type={tipo}
          value={valor}
          onChange={aoMudar}
          required={obrigatorio}
          aria-invalid={erro || undefined}
          aria-describedby={erro ? `${id}-erro` : undefined}
          autoComplete={autoComplete}
          inputMode={inputMode}
          className={classe}
        />
      )}
      {erro && (
        <p id={`${id}-erro`} className="mt-1.5 text-[12.5px] text-[#FFB4AB]">
          {mensagemErro}
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
    <footer className="border-t border-tinta/8 bg-papel pt-14">
      <div className="env grid gap-10 pb-12 md:grid-cols-[1.4fr_.8fr_1fr]">
        <div>
          <a href={inicio} className="flex items-center gap-2.5" aria-label="Códice">
            <Simbolo className="h-8 w-8" />
            <span className="font-display text-[21px] font-extrabold tracking-tight text-navy">Códice</span>
          </a>
          <p className="mt-4 max-w-[30ch] text-[15px] leading-relaxed text-tinta-2">{c.rodape.frase}</p>
          <p className="mt-4 text-[13.5px] text-tinta-3">{CONTATO.base}</p>
        </div>

        <nav aria-label={c.rodape.navegacao}>
          <h2 className="mb-4 text-[11.5px] font-bold uppercase tracking-[.16em] text-tinta-3">{c.rodape.navegacao}</h2>
          <ul className="grid gap-2.5 text-[15px] text-tinta-2">
            {c.nav.links.map((link) => (
              <li key={link.id}>
                <a className="transition-colors hover:text-azul" href={`${ancora}#${link.id}`}>
                  {link.rotulo}
                </a>
              </li>
            ))}
            <li>
              <a className="transition-colors hover:text-azul" href={linkPrivacidade}>
                {c.rodape.privacidade}
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-[11.5px] font-bold uppercase tracking-[.16em] text-tinta-3">{c.rodape.contato}</h2>
          <ul className="grid gap-2.5 text-[15px] text-tinta-2">
            <li>
              <a className="inline-flex items-center gap-2.5 transition-colors hover:text-azul" href={`mailto:${CONTATO.email}`}>
                <Icone nome="email" className="h-4 w-4 text-tinta-3" />
                {CONTATO.email}
              </a>
            </li>
            {CONTATO.whatsapp && (
              <li>
                <a className="inline-flex items-center gap-2.5 transition-colors hover:text-azul" href={CONTATO.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Icone nome="whatsapp" className="h-4 w-4 text-tinta-3" />
                  {CONTATO.telefone}
                </a>
              </li>
            )}
            <li>
              <a className="transition-colors hover:text-azul" href={CONTATO.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-azul" href={CONTATO.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
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
                  item.id === idioma ? "bg-navy text-white" : "bg-white text-tinta-2 hover:text-navy"
                }`}
              >
                {item.rotulo}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-tinta/8">
        <div className="env flex flex-wrap items-center justify-between gap-4 py-6 text-[13px] text-tinta-3">
          <p>
            © {ano} {SITE.marca}. {c.rodape.direitos}
          </p>
          <p>{c.rodape.creditos}</p>
        </div>
      </div>
    </footer>
  );
}
