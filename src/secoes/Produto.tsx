import { useState } from "react";
import { Revelar } from "../componentes/Base";
import { Visor3D } from "../componentes/Visor3D";
import { Icone } from "../componentes/Icones";
import { Cabeca } from "./Home";
import type { Conteudo } from "../conteudo/tipos";

export const real = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

/* =====================================================================
   Os displays em 3D e os planos.
   ===================================================================== */

export function Displays({ c }: { c: Conteudo }) {
  const [atual, setAtual] = useState(0);
  const formato = c.displays.formatos[atual];
  const AR = "https://projetos.75lab.com.br/ar/codice-display-universal/";

  return (
    <section id="displays" className="secao bg-white">
      <div className="env">
        <Cabeca chapeu={c.displays.chapeu} titulo={c.displays.titulo} lead={c.displays.lead} centro />

        <div className="mt-10 grid items-stretch gap-6 rounded-[28px] border border-tinta/8 bg-papel p-6 sm:p-8 lg:grid-cols-[.56fr_.44fr]">
          <div className="rounded-2xl bg-white">
            <Visor3D
              key={formato.id}
              modelo={formato.id}
              srcUrl={`${AR}${formato.id}.glb`}
              posterUrl={`${AR}${formato.id}-poster.webp`}
              iosSrc={`${AR}${formato.id}.usdz`}
              alt={`${formato.nome}, display da Códice em 3D`}
              className="aspect-[4/3.4] w-full"
              instrucao={c.displays.instrucao}
            />
          </div>

          <div className="flex flex-col">
            <div role="tablist" aria-label={c.displays.chapeu} className="flex flex-col gap-2">
              {c.displays.formatos.map((item, i) => (
                <button
                  key={item.id}
                  role="tab"
                  aria-selected={atual === i}
                  onClick={() => setAtual(i)}
                  className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left transition-colors ${
                    atual === i ? "border-navy bg-navy text-white" : "border-tinta/10 bg-white text-tinta-2 hover:border-navy/40"
                  }`}
                >
                  <span className="font-semibold">{item.rotulo}</span>
                  <span className={`num text-[12px] ${atual === i ? "text-white/70" : "text-tinta-3"}`}>{item.medidas}</span>
                </button>
              ))}
            </div>
            <div className="mt-5 border-t border-tinta/8 pt-5">
              <h3 className="font-display text-[clamp(22px,2.2vw,28px)] font-extrabold text-navy">{formato.nome}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-tinta-2">{formato.texto}</p>
              <a href={formato.ar} target="_blank" rel="noopener"
                className="botao botao-teal mt-5 inline-flex w-full items-center justify-center gap-2">
                <Icone nome="display" className="h-4 w-4" />
                {c.displays.verAr}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_.42fr]">
          <div>
            <h3 className="font-display text-[20px] font-extrabold text-navy">{c.displays.acessoriosTitulo}</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {c.displays.acessorios.map((a) => (
                <div key={a.nome} className="rounded-2xl border border-tinta/8 bg-papel p-5">
                  <div className="font-semibold text-navy">{a.nome}</div>
                  <p className="mt-1 text-[14px] leading-relaxed text-tinta-2">{a.texto}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-[20px] font-extrabold text-navy">{c.displays.marcasTitulo}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.displays.marcas.map((m) => (
                <a key={m.nome} href={m.ar} target="_blank" rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-tinta/12 bg-white px-4 py-2 text-[14px] font-semibold text-navy transition-colors hover:text-azul">
                  {m.nome}
                  <span className="num text-[11px] font-bold text-azul">AR</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Planos({ c }: { c: Conteudo }) {
  return (
    <section id="planos" className="secao bg-papel">
      <div className="env">
        <Cabeca chapeu={c.planos.chapeu} titulo={c.planos.titulo} lead={c.planos.lead} centro />

        <div className="mt-12 grid items-start gap-5 lg:grid-cols-3">
          {c.planos.itens.map((item, i) => {
            const destaque = i === 1;
            return (
              <Revelar key={item.id} atraso={i * 90}>
                <article
                  className={`flex h-full flex-col overflow-hidden rounded-[24px] ${
                    destaque
                      ? "bg-navy text-white shadow-[0_26px_60px_rgba(6,27,73,.24)] lg:-mt-4"
                      : "border border-tinta/8 bg-white"
                  }`}
                >
                  <div className={`relative aspect-[5/3] ${destaque ? "bg-white/5" : "bg-papel"}`}>
                    <Visor3D modelo={item.id} alt={`Display do plano ${item.nome}`} className="absolute inset-0" girar={false} />
                    <span
                      className={`absolute left-5 top-5 rounded-full px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[.1em] ${
                        destaque ? "bg-teal text-navy" : "bg-navy text-white"
                      }`}
                    >
                      {item.selo}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <h3 className={`font-display text-[23px] font-extrabold ${destaque ? "text-white" : "text-navy"}`}>{item.nome}</h3>
                    <p className={`mt-1.5 text-[14px] leading-snug ${destaque ? "text-white/55" : "text-tinta-3"}`}>{item.quem}</p>

                    <p className="mt-6 flex items-baseline gap-2">
                      <span className={`num font-display text-[36px] font-extrabold leading-none ${destaque ? "text-teal" : "text-navy"}`}>
                        {real(item.preco)}
                      </span>
                      <span className={`text-[12.5px] ${destaque ? "text-white/45" : "text-tinta-3"}`}>{c.planos.porMes}</span>
                    </p>

                    <ul className="mt-6 grid gap-3">
                      {item.recursos.map((recurso) => (
                        <li key={recurso.texto} className={`flex items-center gap-3 text-[14.5px] ${destaque ? "text-white/80" : "text-tinta-2"}`}>
                          <Icone nome={recurso.icone} className={`h-[18px] w-[18px] shrink-0 ${destaque ? "text-teal" : "text-azul"}`} />
                          {recurso.texto}
                        </li>
                      ))}
                    </ul>

                    <a href="#falar" className={`botao mt-7 w-full ${destaque ? "botao-teal" : "botao-tinta"}`}>
                      {c.planos.cta}
                    </a>
                  </div>
                </article>
              </Revelar>
            );
          })}
        </div>

        <p className="mt-6 text-center text-[13px] text-tinta-3">{c.planos.nota}</p>
      </div>
    </section>
  );
}
