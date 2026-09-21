import { useEffect, useRef, useState } from "react";

/** Dispara uma vez quando o elemento entra na tela. */
export function useAoEntrar<T extends HTMLElement>(margem = "0px 0px -12% 0px") {
  const alvo = useRef<T | null>(null);
  const [dentro, setDentro] = useState(false);

  useEffect(() => {
    const no = alvo.current;
    if (!no) return;
    if (typeof IntersectionObserver === "undefined") {
      setDentro(true);
      return;
    }
    const obs = new IntersectionObserver(
      (itens) => {
        for (const item of itens) {
          if (item.isIntersecting) {
            setDentro(true);
            obs.disconnect();
          }
        }
      },
      { rootMargin: margem, threshold: 0.12 },
    );
    obs.observe(no);
    return () => obs.disconnect();
  }, [margem]);

  return { alvo, dentro };
}

/** true quando a pessoa pediu menos movimento no sistema. */
export function useMenosMovimento() {
  const [menos, setMenos] = useState(false);
  useEffect(() => {
    const consulta = window.matchMedia("(prefers-reduced-motion: reduce)");
    const aplicar = () => setMenos(consulta.matches);
    aplicar();
    consulta.addEventListener("change", aplicar);
    return () => consulta.removeEventListener("change", aplicar);
  }, []);
  return menos;
}

/** Conta de zero até o valor quando entra na tela. Respeita reduced motion. */
export function useContagem(valor: number, ativo: boolean, duracao = 1400) {
  const menos = useMenosMovimento();
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    if (!ativo) return;
    if (menos) {
      setAtual(valor);
      return;
    }
    let quadro = 0;
    const inicio = performance.now();
    const passo = (agora: number) => {
      const t = Math.min(1, (agora - inicio) / duracao);
      const suave = 1 - Math.pow(1 - t, 3);
      setAtual(Math.round(valor * suave));
      if (t < 1) quadro = requestAnimationFrame(passo);
    };
    quadro = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(quadro);
  }, [ativo, valor, duracao, menos]);

  return atual;
}

/** Progresso da página, de 0 a 1, para a barra do topo. */
export function useProgresso() {
  const [progresso, setProgresso] = useState(0);
  useEffect(() => {
    let pedido = 0;
    const medir = () => {
      pedido = 0;
      const altura = document.documentElement.scrollHeight - window.innerHeight;
      setProgresso(altura > 0 ? Math.min(1, window.scrollY / altura) : 0);
    };
    const aoRolar = () => {
      if (!pedido) pedido = requestAnimationFrame(medir);
    };
    medir();
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar);
    return () => {
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
      if (pedido) cancelAnimationFrame(pedido);
    };
  }, []);
  return progresso;
}

/** Qual seção está na altura de leitura, para marcar o menu. */
export function useSecaoAtiva(ids: string[]) {
  const [ativa, setAtiva] = useState<string | null>(null);
  useEffect(() => {
    const secoes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!secoes.length || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (itens) => {
        const visiveis = itens
          .filter((i) => i.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visiveis[0]) setAtiva(visiveis[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6] },
    );
    secoes.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [ids]);
  return ativa;
}

/**
 * Parallax leve por transform. Devolve o deslocamento em pixels de
 * acordo com a posição do elemento na janela.
 */
export function useParallax<T extends HTMLElement>(intensidade = 40) {
  const alvo = useRef<T | null>(null);
  const menos = useMenosMovimento();

  useEffect(() => {
    const no = alvo.current;
    if (!no || menos) return;
    let pedido = 0;
    const mover = () => {
      pedido = 0;
      const caixa = no.getBoundingClientRect();
      const centro = caixa.top + caixa.height / 2 - window.innerHeight / 2;
      const fator = Math.max(-1, Math.min(1, centro / window.innerHeight));
      no.style.setProperty("--desloca", `${(-fator * intensidade).toFixed(1)}px`);
    };
    const aoRolar = () => {
      if (!pedido) pedido = requestAnimationFrame(mover);
    };
    mover();
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar);
    return () => {
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
      if (pedido) cancelAnimationFrame(pedido);
    };
  }, [intensidade, menos]);

  return alvo;
}
