# Site da Códice

Site institucional da plataforma **Códice**, em português, inglês e espanhol.
Página única de narrativa, mais política de privacidade e página 404, nos três idiomas.

- **No ar:** https://seashell-buffalo-304816.hostingersite.com
- **Idiomas:** `/` (pt-BR), `/en/`, `/es/`
- **Plataforma divulgada:** https://75lab-com-br-944679.hostingersite.com

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # gera dist/ pronto para publicar
```

O build tem três passos encadeados: verificação de tipos, bundle do navegador e
pré-renderização. O resultado em `dist/` é HTML puro com o conteúdo já dentro,
mais o JavaScript que liga a interação depois.

## Como publicar

Publicação automática: **todo push na `main`** dispara a Action `Build e publicar`,
que roda os testes, gera o `dist/` e força o push do resultado para a branch **`deploy`**.
A Hostinger acompanha a `deploy` e serve o conteúdo em `public_html`.

Se a Hostinger ficar para trás, o caminho manual é hPanel, Painel de controle do site,
**Avançado, GIT, botão Reimplantar**.

## Onde editar o quê

| O que mudar | Arquivo |
|---|---|
| E-mail, redes, endereço da plataforma | `src/conteudo/config.ts` |
| Texto em português | `src/conteudo/pt.ts` |
| Texto em inglês | `src/conteudo/en.ts` |
| Texto em espanhol | `src/conteudo/es.ts` |
| Cores, tipografia, sombras, raios | `src/estilos/global.css` (bloco `@theme`) |
| Imagens | `public/img/` |
| Imagem de compartilhamento | `public/og.png` (gerada por `scripts/og.html`) |

Os três idiomas obedecem ao mesmo contrato em `src/conteudo/tipos.ts`: se uma seção
nova entrar em um idioma e faltar nos outros, o build falha na verificação de tipos.
É de propósito, para o site nunca ficar meio traduzido.

Para regerar a imagem de compartilhamento depois de mudar o título:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --window-size=1200,630 --screenshot="$PWD/public/og.png" "file://$PWD/scripts/og.html"
```

## Estrutura

```
src/
  conteudo/     texto dos três idiomas, contatos e o contrato de tipos
  componentes/  marca, cabeçalho, cursor e peças reutilizadas
  secoes/       as seções da narrativa, em cinco arquivos
  hooks/        revelar ao rolar, contagem, parallax, progresso
  estilos/      sistema visual e fontes auto-hospedadas
scripts/
  prerender.mjs gera o HTML final, o sitemap, o robots e o .htaccess
  og.html       modelo da imagem de compartilhamento
  landing-v1-referencia.html  versão anterior do site, guardada como referência
```

## Tecnologias

React 19, TypeScript, Vite 7, Tailwind CSS 4. Nenhuma biblioteca de animação:
as transições usam CSS com `transform` e `opacity`, acionadas por `IntersectionObserver`.
Fontes Exo 2 e Inter auto-hospedadas, sem chamada a servidor de terceiros.

## Integrações

- **Formulário de demonstração:** sem servidor. Valida no navegador e abre o programa
  de e-mail da pessoa com a mensagem pronta para `contato@75lab.com.br`. Nada é enviado
  sem a confirmação dela. Tem armadilha simples contra robô de formulário.
- **Nenhum rastreador.** Sem analytics, sem pixel, sem cookie. Se um dia entrar
  medição, ela precisa aparecer na política de privacidade.

## Conteúdo provisório e o que falta

| Item | Situação |
|---|---|
| WhatsApp | **Vazio** em `config.ts`. Preencher ativa o canal; sem ele, nada quebra. |
| Domínio próprio | Hoje o endereço é o temporário da Hostinger. Ao trocar, atualizar `SITE.origem` em `config.ts` e a constante `ORIGEM` em `scripts/prerender.mjs`. |
| Fotos reais de loja | Só existe o render do display. Fotos de PDV com display instalado deixariam as seções de sensores e de execução mais fortes. Formato sugerido: 1600 × 1200, horizontal, sem logotipo de terceiros visível. |
| Casos de clientes | Não existe seção de cases porque não há caso divulgável. Quando houver, entra entre "Para quem" e "A plataforma em números". |
| Números de resultado | A página não afirma nenhum resultado de cliente. Os números usados (42 telas, 9 espaços, 11 perfis, 2 inventários) foram contados no código da plataforma. |

## Testes realizados

- Verificação de tipos e build sem erro, console do navegador limpo.
- Todos os links conferidos, incluindo os externos (75lab.com.br, LinkedIn, Instagram, plataforma).
- Formulário: validação de campo vazio e de e-mail inválido, foco no primeiro erro, estado de sucesso.
- Demonstrações interativas: venda duplicada recusada, período sobreposto recusado.
- Teclado: atalho "Ir para o conteúdo", foco visível, abas com setas, menu do celular com Esc e foco preso.
- Larguras 375, 768, 1440 e 1920, sem rolagem horizontal.
- Sem JavaScript: o conteúdo continua visível, porque o HTML já vem pronto.
- Três idiomas conferidos, com hreflang, canonical e sitemap.
