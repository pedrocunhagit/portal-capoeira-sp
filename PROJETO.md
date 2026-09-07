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
├── index.html          ✅ Completo — inclui bloco "Uso livre / licença" na seção "Sobre este portal"
├── timeline.html       ✅ Completo — linha do tempo com Drive links
├── dissertacao.html    ✅ Completo — capítulos com acordeão
├── documentos.html     ✅ Completo — transcrições + visor inline Drive + botão acervo raiz
├── referencias.html    ✅ Completo — 107 referências + busca + "Acervos consultados"
├── sobre.html          ✅ Completo — inclui seção "Licença e uso livre" com cards CC BY / MIT e modelo de citação
├── style.css           ✅ Completo — inclui .footer-ia
├── script.js           ✅ Completo — acessibilidade (fonte, contraste, daltonismo)
├── README.md           ✅ Criado — caráter educativo, conteúdo do portal, licenças, como citar
├── LICENSE             ✅ Criado — MIT (código) + CC BY 4.0 (conteúdo), bilíngue PT/EN
├── data/
│   ├── timeline.json   ✅ 41 eventos — páginas revisadas na sessão 9 (SHA: d9b9f3f33ff1d0df025be63152d1fd0dc806af3f)
│   ├── documentos.json ✅ 19 transcrições (8 acervos)
│   └── acervos.json    ✅ 8 instituições com Drive folder IDs por série
└── img/hero/
    ├── Rugendas_capoeira_RJ.jpg
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

### `data/timeline.json` — 41 eventos (revisado sessão 9)

- Organizados em 3 períodos: `1830-1870`, `1870-1888`, `1888-1930`
- Cada evento pode ter `acervo_drive` referenciando um DRIVE_LINKS no `timeline.html`
- ~20 eventos têm link para Drive
- **Paginação**: todas as páginas usam a paginação interna da dissertação (341 páginas no total), verificadas diretamente no PDF

#### Principais correções de páginas aplicadas na sessão 9:

| Evento | Antes | Depois | Motivo |
|---|---|---|---|
| 1886 — Tabatingueira | p. 12 | p. 209 | p.12 é a introdução; conteúdo está na p.209 |
| 1888 — Emiliano Rocha | p. 12 | p. 209 | idem — ambos citados na mesma p.209 |
| 1872 — Malta Flor da Gente | p. 14 | pp. 112-113 | p.14 é metodologia; conteúdo está nas pp.112-113 |
| 1889 — Policiais Cruzeiro | p. 178 | pp. 238-239 | p.178 é seção Caifases; episódio está nas pp.238-239 |
| 1895 — Quintino vereador | p. 114 | pp. 203, 229 | p.114 é Duque-Estrada; Quintino eleito está nas pp.203 e 229 |
| 1900 — Várzea do Carmo | p. 219 | pp. 243-244 | p.219 é contexto República; partidos estão nas pp.243-244 |
| 1910 — Negros da Glette | p. 427 | pp. 270-271 | p.427 inexiste; conteúdo está nas pp.270-271 |
| 1916 — Tiririca Campinas | p. 637 | p. 304 | p.637 inexiste; registro está na p.304 |
| 1919 — Morte em Cabreúva | p. 214 | pp. 242-243 | p.214 é outro contexto; episódio está nas pp.242-243 |
| 1927 — Menê em Botucatu | p. 89 | pp. 222-223 | p.89 é outro contexto; Menê está nas pp.222-223 |
| 1890 — Itu foragido | p. 77 | pp. 220-221 | p.77 é outra seção; episódio está nas pp.220-221 |
| 1890 — José da Silva Santos | p. 146 | pp. 234-235 | p.146 é seção Santos séc.XIX; episódio 1890 está nas pp.234-235 |
| 1890 — Benedicto RP | p. 151 | p. 235 | p.151 é seção valongueiros; episódio está na p.235 |
| 1890 — Ricardo Florencio | p. 78 | pp. 221-222 | p.78 é outra seção; Sorocaba 1890 está nas pp.221-222 |
| 1890 — Código Penal | p. 224 | pp. 217-218 | conteúdo está nas pp.217-218 |
| 1890 — Bambú Rio Claro | p. 162 | p. 236 | p.162 é outra seção; episódio está na p.236 |
| 1908 — Bugrinho | p. 203 | pp. 241-242 | p.203 é seção Jabaquara; Bugrinho está nas pp.241-242 |

#### Eventos adicionados na sessão 8 (13 novos):
| Ano | Evento |
|---|---|
| 1872 | Malta "Flor da Gente" — ex-aluno da Academia de Direito lidera grupo no Rio |
| 1886 | Bando de meninos pratica capoeiragem na Ladeira da Tabatingueira (SP) |
| 1888 abr. | Emiliano Rocha: último preso por capoeira antes da Abolição em SP |
| 1889 jul. | Policiais flagrados em exercícios de capoeira em Cruzeiro (SP) |
| 1890 jan. | Capoeira foragido em Itu: SP não persegue capoeiras (italiano, malteiro carioca) |
| 1890 fev. | José da Silva preso por capoeira no carnaval de Santos |
| 1890 fev. | Benedicto Alves de Siqueira, capoeira em Ribeirão Preto |
| 1890 mai. | Ricardo Florencio, capoeira carioca foragido em Sorocaba |
| 1890 ago. | João Antonio dos Santos "Bambú", capoeira em Rio Claro |
| 1895 | Quintino de Lacerda eleito vereador em Santos |
| 1900 | Partidos de capoeiras na Várzea do Carmo, São Paulo (6 grupos) |
| 1908 | Bugrinho, navalhista capoeira na Rua Tiradentes, São Paulo |
| 1910 | Os "negros da Glette" e a tiririca na Barra Funda |
| 1916 | Tiririca "invade" ruas de Campinas |
| 1919 | Morte em Cabreúva: soldado mata capoeirista |
| 1927 | Menê, capoeira carioca deportado inicia grupo em Botucatu |

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
│   ├── Arquivo da Academia de Direito de SP
│   ├── Arquivo da Assembleia Legislativa de SP
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
│   └── Texto final\Versão revisada após defesa\
│       └── disserta_capoeiras-SP_Pedro-Cunha_FINAL_Toda-REVISADA.pdf  (341 pp.)
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
- `.footer-ia` adicionado ao `style.css`
- Footer IBM Bob adicionado a: `index.html`, `timeline.html`, `sobre.html`

### Sessão 5 (conclusão dos pendentes + Drive raiz)
- Footer IBM Bob adicionado a `dissertacao.html`, `referencias.html`, `documentos.html` ✅
- Seção "Acervos consultados" (13 instituições) adicionada a `referencias.html` ✅
- Botão "Acervo completo no Google Drive" adicionado a `documentos.html` ✅

### Sessão 6 (seção "Sobre a capoeira" reescrita)
- Seção "Sobre a capoeira" em `index.html` reescrita com texto da introdução da dissertação ✅
- Imagem de Rugendas (*danse de la guerre*) em destaque com legenda completa ✅
- Footer IBM Bob verificado em todas as 6 páginas ✅

### Sessão 7 (licença, README e caráter educativo)
- **`index.html`**: bloco "Uso livre — cite a fonte" adicionado à seção "Sobre este portal" ✅
- **`sobre.html`**: seção "Licença e uso livre" adicionada ✅
- **`README.md`**: criado ✅
- **`LICENSE`**: criado ✅ (MIT código + CC BY 4.0 conteúdo, bilíngue PT/EN)

### Sessão 8 (expansão da linha do tempo — Capítulo 4)
- Leitura completa do dump de `Capítulo 4.docx` (arquivo local) ✅
- **`data/timeline.json`**: expandido de 28 para **41 eventos** ✅
  - 13 novos eventos do pós-abolição e do início do século XX
  - SHA: `cd22615790c308395661bf761d3d456d2729b8f6`

### Sessão 9 (revisão completa das páginas da linha do tempo)
- Leitura sistemática da dissertação revisada (PDF local, 341 pp.) para verificar todas as páginas indicadas ✅
- **`data/timeline.json`**: revisão de páginas em todos os 41 eventos ✅
  - 17 eventos tinham páginas erradas — corrigidos (ver tabela acima)
  - 14 eventos multi-página expandidos para indicar faixas reais (ex: `p. 80` → `pp. 80-100`)
  - Dois erros graves corrigidos: `p. 427` e `p. 637` (páginas que não existem na dissertação)
  - Toda paginação verificada contra os números de página impressos no próprio PDF
  - SHA novo: `d9b9f3f33ff1d0df025be63152d1fd0dc806af3f`

---

## Estado atual — tudo concluído

**Todas as páginas estão completas e publicadas.** O portal está funcional em https://pedrocunhagit.github.io/portal-capoeira-sp

### Itens que podem ser melhorados no futuro (backlog)

| Item | Prioridade | Descrição |
|---|---|---|
| Mais transcrições | Alta | Adicionar mais documentos ao `documentos.json` — atualmente 19, há centenas disponíveis |
| Mais eventos na timeline | Média | Expandir além dos 41; adicionar imagens nos popups; eventos do Jabaquara (Maria Theresa de Jesus, Manoel Leocádio) |
| Verificar links Drive | Média | Confirmar que todos os folder IDs em `acervos.json` abrem corretamente |
| Domínio personalizado | Baixa | Configurar domínio próprio (ex: capoeira-sp.com.br) via GitHub Pages |
| SEO | Baixa | Adicionar meta tags Open Graph para compartilhamento em redes sociais |

### Passagens identificadas para futura inclusão na timeline
- **Maria Theresa de Jesus** (Quilombo do Jabaquara, 1939 — entrevistada com 110 anos): casou-se no Jabaquara com **Manoel Leocádio**, "crioulo desempenado, capoeira destemido". Relata batucadas de sábado à noite e a festa da abolição. Leocádio lutou na Revolta da Armada (1893) e morreu em Canudos (1897). Fonte: *A Tribuna de Santos*, "110 annos de vida", 26/01/1939. (pp. 203-205)
- **Fortes, capoeirista sergipano em Santos**: "Fortes, nascido em Sergipe, excelente capoeirista, como dezenas de outros que existiam entre os abolicionistas da linha de frente" — aplicava "tremendas rasteiras, rápidas e certas" para derrubar soldados e capitães-do-mato.
- **Capoeira na Festa da Penha do Rio do Peixe**: extinta "devido à ação da polícia reprimindo a capoeira, interferindo nas apresentações dos 'bambas' nas pernadas e derrubadas".
- **Morro do Piolho / Cambuci** (c.1904): foto registra ponto de encontro de "capoeiras, malandros e valentões" no Cambuci. (pp. 251-252)

---

## Como continuar em novo chat

Cole esta mensagem no início do chat:

> *"Vamos continuar o portal de capoeira. O estado completo do projeto está em `PROJETO.md` no repositório `pedrocunhagit/portal-capoeira-sp` — leia antes de responder. O site está em https://pedrocunhagit.github.io/portal-capoeira-sp e toda alteração vai direto para o GitHub via MCP."*
