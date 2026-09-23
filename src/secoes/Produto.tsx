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

  return (
    <section id="displays" className="secao bg-white">
      <div className="env">
        <Cabeca chapeu={c.displays.chapeu} titulo={c.displays.titulo} lead={c.displays.lead} centro />

        <div className="mt-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label={c.displays.chapeu}>
          {c.displays.formatos.map((item, i) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={atual === i}
              tabIndex={atual === i ? 0 : -1}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                  e.preventDefault();
                  setAtual((atual + (e.key === "ArrowRight" ? 1 : -1) + c.displays.formatos.length) % c.displays.formatos.length);
                }
              }}
              onClick={() => setAtual(i)}
              className={`rounded-full px-5 py-2.5 text-[14px] font-semibold transition-colors ${
                atual === i ? "bg-navy text-white" : "bg-papel-2 text-tinta-2 hover:text-navy"
              }`}
            >
              {item.rotulo}
            </button>
          ))}
        </div>

        <div className="mt-8 grid items-center gap-6 rounded-[28px] border border-tinta/8 bg-papel p-6 sm:p-8 lg:grid-cols-[.58fr_.42fr]">
          <div className="aspect-[4/3.2] w-full overflow-hidden rounded-2xl bg-white">
            <iframe
              key={formato.id}
              src={formato.ar}
              title={`${formato.nome}, display da Códice em 3D e realidade aumentada`}
              className="h-full w-full border-0"
              loading="lazy"
              allow="xr-spatial-tracking; accelerometer; gyroscope; magnetometer; fullscreen"
            />
          </div>

          <div key={formato.id}>
            <h3 className="font-display text-[clamp(24px,2.6vw,32px)] font-extrabold text-navy">{formato.nome}</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-tinta-2">{formato.texto}</p>
            <p className="num mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[14px] font-semibold text-navy">
              <Icone nome="display" className="h-4 w-4 text-azul" />
              {formato.medidas}
            </p>
            <a href={formato.ar} target="_blank" rel="noopener"
              className="botao botao-teal mt-6 inline-flex w-full items-center justify-center gap-2 sm:w-auto">
              <Icone nome="display" className="h-4 w-4" />
              {c.displays.verAr}
            </a>
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
