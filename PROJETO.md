# Portal "Capoeira e valentia em São Paulo" — Estado atual do projeto

> **Uso:** Este arquivo é lido pelo IBM Bob no início de cada novo chat para retomar o projeto sem perda de contexto. Atualize-o ao fim de cada sessão de trabalho.
>
> **Instrução para novo chat:** "Vamos continuar o portal de capoeira. O estado completo do projeto está no arquivo PROJETO.md no repositório pedrocunhagit/portal-capoeira-sp — leia antes de responder. O site está em https://pedrocunhagit.github.io/portal-capoeira-sp e toda alteração vai direto para o GitHub via MCP."

---

## Identificação

| Item | Valor |
|---|---|
| Portal | Capoeira e valentia em São Paulo — Pesquisa e documentos |
| URL pública | https://pedrocunhagit.github.io/portal-capoeira-sp |
| Repositório | https://github.com/pedrocunhagit/portal-capoeira-sp (público, branch `main`) |
| Pesquisador | Pedro Figueiredo Alves da Cunha |
| Base | Dissertação de mestrado, USP, 2011 |
| Arquivos locais | `A:\Documents\USP\Pesquisa\` |

---

## Regras de trabalho

- **Toda alteração no site vai direto para o GitHub via MCP tool** — Pedro não usa terminal nem git
- Site 100% estático: HTML + CSS + JavaScript puro. Sem servidor, sem banco de dados, sem frameworks
- Idioma: português. Google Translate disponível nas páginas para EN/ES
- Acessibilidade: controle de fonte (A / A+ / A++), alto contraste, filtro daltonismo — já implementados em `script.js`
- **Footer IBM Bob obrigatório em todas as páginas** (já presente em todas):
  ```html
  <p class="footer-ia">
    Este portal foi gerado com suporte do <strong>IBM Bob</strong>, recurso baseado em IA da IBM,
    para tornar os dados da pesquisa mais acessíveis. Caso alguma informação pareça incorreta,
    considere a dissertação publicada no
    <a href="https://teses.usp.br/teses/disponiveis/8/8138/tde-11092012-105013/pt-br.html"
       target="_blank" rel="noopener">site da USP</a> como fonte confiável para verificação.
  </p>
  ```

---

## Arquivos no repositório

```
portal-capoeira-sp/
├── index.html          ✅ Completo — seção "Sobre a capoeira" reescrita (v2) com texto da introdução da dissertação e imagem de Rugendas
├── timeline.html       ✅ Completo — linha do tempo com Drive links
├── dissertacao.html    ✅ Completo — capítulos com acordeão
├── documentos.html     ✅ Completo — transcrições + visor inline Drive + botão acervo raiz
├── referencias.html    ✅ Completo — 107 referências + busca + "Acervos consultados"
├── sobre.html          ✅ Completo — sobre a pesquisa e o autor
├── style.css           ✅ Completo — inclui .footer-ia
├── script.js           ✅ Completo — acessibilidade (fonte, contraste, daltonismo)
├── data/
│   ├── timeline.json   ✅ 28 eventos com acervo_drive links
│   ├── documentos.json ✅ 19 transcrições (8 acervos)
│   └── acervos.json    ✅ 8 instituições com Drive folder IDs por série
└── img/hero/
    ├── Rugendas_capoeira_RJ.jpg           ← imagem principal da seção "Sobre a capoeira"
    ├── Negros_lutando.jpg
    ├── chamberlain.jpg
    ├── Rugendas_prancha27_Sao-Salvador.jpg
    ├── ChristianoJr_aprendizagem-capoeira-1865.jpg
    ├── Militao_bras_FOTO_034-baixa.jpg
    └── mapa_1878_reproduz_novo-milenio_marcado.jpg
```

---

## Dados estruturados — resumo

### `data/acervos.json` — 8 instituições com Drive links

| Sigla | Instituição | Séries | Aprox. arquivos |
|---|---|---|---|
| ACADIREITO | Arquivo da Academia de Direito de SP | 1 | 40 imgs |
| ALESP | Arquivo Histórico da Assembleia Legislativa de SP | 1 | 27 PDFs |
| AESP | Arquivo do Estado de São Paulo | ~40 séries | 1000+ imgs+PDFs |
| ACPG | Arquivo da Polícia Civil de Praia Grande (Santos) | 6 | 318 imgs |
| FAMS | Fundação Arquivo e Memória de Santos | 2 | 17 imgs |
| HMRMS | Hemeroteca Municipal Roldão Mendes Rosa (Santos) | 2 | 64 imgs |
| IEB | Instituto de Estudos Brasileiros (IEB — USP) | 2 | 33 imgs |
| TRIBUNA | Jornal A Tribuna (Santos) | 2 | 29 imgs |

**5 instituições removidas** (sem material visualizável): AMWL, BNRJ, FJM, MCF, RHGB

### `data/timeline.json` — 28 eventos

- Organizados em 3 períodos: `1830-1870`, `1870-1888`, `1888-1930`
- Cada evento pode ter `acervo_drive` referenciando um DRIVE_LINKS no `timeline.html`
- ~20 eventos têm link para Drive

### `data/documentos.json` — 19 transcrições comentadas

- Campos: id, titulo, acervo, acervo_sigla, tipo, data, local, periodo, transcricao, contexto, personagens, palavras_chave, referencia
- Cobrem: posturas municipais, autos de crimes, registros de presos, ofícios policiais, jornais

---

## Acervo no Drive (público, sem login)

| Pasta | Link |
|---|---|
| **Raiz (acervo completo)** | https://drive.google.com/drive/folders/1pXmFoETXM_DXU7NmWPlaxYS7YeJEIN4t?usp=sharing |
| Arquivo do Estado de SP | https://drive.google.com/drive/folders/1i98ibX7OjJlXQBjwyvB5hih8CrCJv53P |
| Academia de Direito | https://drive.google.com/drive/folders/10jHHy9UfM7QX5ZOxQzcIYa2AJ7LQn1Fx |
| ALESP — Posturas | https://drive.google.com/drive/folders/1cuvFkhsqd41FYBmp4vlsFWztPRGZ8Z1g |
| Polícia Praia Grande | https://drive.google.com/drive/folders/1S1Y8G7qXxB3dBtUQUhuxs7-PzEdIuy9F |
| FAMS | https://drive.google.com/drive/folders/1HL-FhsJfSA8VRTbufPnEueu_Zou1j63S |
| Hemeroteca Santos | https://drive.google.com/drive/folders/1cb9YSPZJ9CGNWuwIz3qu1y6ShelSkTAT |
| IEB | https://drive.google.com/drive/folders/1514zUVJ6MUjk8sxZiJbNpx8AvHIGnX0T |
| Jornal A Tribuna | https://drive.google.com/drive/folders/1_Dllj3Ljiiod6Byw95RkzHlVtwxA38qI |

Dissertação em PDF: https://drive.google.com/file/d/1_5yrNuLScfKgQxTjlm4NDU_R8mSiuInJ/view?usp=sharing

---

## Arquivos locais relevantes

```
A:\Documents\USP\Pesquisa\
├── Arquivos\                    ← 13 pastas com imagens digitalizadas originais
│   ├── Arquivo da Academia de Direito de SP\
│   ├── Arquivo da Assembleia Legislativa de SP\
│   ├── Arquivo do Estado de SP\   (subpastas por série)
│   ├── Arquivo Municipal Washington Luiz - SP\  (só .doc, sem imgs)
│   ├── Arquivo_Polícia_Praia Grande\
│   ├── Biblioteca Nacional do Rio de Janeiro\   (só .doc, sem imgs)
│   ├── Forum João Mendes - TJ\                  (só credenciais)
│   ├── Fundação Arquivo e Memória de Santos\
│   ├── Hemeroteca Municipal Roldão Mendes Rosa (Santos)\
│   ├── Instituto de Estudos Brasileiros (IEB)\
│   ├── Jornal A Tribuna\
│   ├── Museu da Companhia de Ferro\             (1 mapa jpg)
│   └── www.rhgb.org.br\                         (1 PDF)
├── Imagens Séc. XIX\            ← Pinturas históricas (Debret, Rugendas, Earle, Chamberlain…)
│   └── Rugendas\                ← Contém Rugendas_prancha98_jogar-capoeira (= "danse de la guerre")
├── Dissertação\                 ← PDF completo da dissertação
├── Artigos\                     ← Artigos publicados por Pedro
└── Pesquisa com IBM Bob\
    ├── portal-capoeira-plano.md ← Plano original (desatualizado, preservar para histórico)
    └── PROJETO.md               ← Este arquivo (estado atual)
```

---

## O que foi feito — histórico completo

### Sessão 1–3 (estrutura inicial)
- Repositório criado, GitHub Pages ativado
- `index.html`, `timeline.html`, `dissertacao.html`, `documentos.html`, `referencias.html`, `sobre.html` criados
- `style.css` e `script.js` com acessibilidade completa
- Linha do tempo com 28 eventos e filtros por período
- Capítulos com acordeão expansível
- Banco de documentos com busca + filtros + 19 transcrições
- 107 referências bibliográficas com busca

### Sessão 4 (Drive + imagens)
- Imagens históricas (`img/hero/`) adicionadas ao repositório
- Seção "Sobre a capoeira" adicionada ao `index.html` com 4 pinturas históricas
- Links para o Drive adicionados na linha do tempo (`acervo_drive` + `DRIVE_LINKS`)
- Visor inline de documentos (iframe `embeddedfolderview`) implementado em `documentos.html`
- `data/acervos.json` criado com 8 instituições e todas as séries documentais
- 5 instituições sem material visualizável removidas de `acervos.json` e `documentos.json`
- Seção "Acervos consultados" removida de `sobre.html`
- `.footer-ia` adicionado ao `style.css`
- Footer IBM Bob adicionado a: `index.html`, `timeline.html`, `sobre.html`

### Sessão 5 (conclusão dos pendentes + Drive raiz)
- Footer IBM Bob adicionado a `dissertacao.html` ✅
- Footer IBM Bob adicionado a `referencias.html` ✅
- Footer IBM Bob adicionado a `documentos.html` ✅
- Seção "Acervos consultados" (13 instituições) adicionada a `referencias.html` ✅
- Análise do conteúdo local: confirmado que as 5 instituições removidas não têm imagens visualizáveis ✅
- **Novo:** Botão "Acervo completo no Google Drive" adicionado à seção de acervo em `documentos.html` ✅
- Texto da seção de acervo melhorado com instrução clara de uso ✅

### Sessão 6 (esta sessão — seção "Sobre a capoeira" reescrita)
- Seção "Sobre a capoeira" em `index.html` **completamente reescrita** ✅
  - Novo texto baseado na introdução da dissertação, focado no período da escravidão
  - Linguagem acessível para público geral, usando expressões da dissertação
  - Imagem principal: Rugendas "Jogar Capoeira" (*danse de la guerre*, c. 1835) em destaque com legenda completa
  - Imagens secundárias: Earle, Chamberlain, Rugendas (Batuque)
  - Botões CTA: "Ler a pesquisa" e "Ver linha do tempo"
- Footer IBM Bob verificado em **todas as 6 páginas** — já estava correto em todas ✅

---

## Estado atual — tudo concluído

**Todas as páginas estão completas e publicadas.** O portal está funcional em https://pedrocunhagit.github.io/portal-capoeira-sp

### Itens que podem ser melhorados no futuro (backlog)

| Item | Prioridade | Descrição |
|---|---|---|
| Mais transcrições | Alta | Adicionar mais documentos ao `documentos.json` — atualmente 19, há centenas disponíveis |
| Verificar links Drive | Média | Confirmar que todos os folder IDs em `acervos.json` abrem corretamente |
| Página "Sobre a pesquisa" | Baixa | Expandir com mais informações sobre o autor e contato |
| Domínio personalizado | Baixa | Configurar domínio próprio (ex: capoeira-sp.com.br) via GitHub Pages |
| Mais eventos na timeline | Baixa | Expandir de 28 para mais eventos; adicionar imagens nos popups |
| SEO | Baixa | Adicionar meta tags Open Graph para compartilhamento em redes sociais |

---

## Como continuar em novo chat

Cole esta mensagem no início do chat:

> *"Vamos continuar o portal de capoeira. O estado completo do projeto está em `PROJETO.md` no repositório `pedrocunhagit/portal-capoeira-sp` — leia antes de responder. O site está em https://pedrocunhagit.github.io/portal-capoeira-sp e toda alteração vai direto para o GitHub via MCP."*
