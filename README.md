# Agentes de IA na prática

Diário público da minha trilha de estudo em agentes de IA: Python, n8n e CrewAI, aprendidos construindo agentes que resolvem problemas reais.

Sigo o método **Ultralearning**: aprender fazendo, com projetos práticos desde a primeira semana, testes em cada etapa e registro honesto do que funcionou e do que travou.

## O que estou construindo

| # | Projeto | Ferramentas | Status |
|---|---|---|---|
| 01 | [Radar de editais no n8n](projetos/01-radar-editais-n8n/): agente que busca editais de inovação abertos, registra numa planilha e envia um resumo semanal por e-mail | n8n, Claude, Tavily, Google Sheets, Gmail | Em construção |
| 02 | [Radar de editais em CrewAI](projetos/02-radar-editais-crewai/): o mesmo agente refeito em Python, com uma equipe de agentes, para comparar as duas abordagens | Python, CrewAI, Claude, Tavily | Planejado |
| 03 | [Consultor RAG](projetos/03-consultor-rag-streamlit/): base de conhecimento consultável, que responde citando a fonte e admite quando não encontra a resposta | Python, Chroma, Claude, Streamlit | Planejado |

## Trilha de estudo

| Fase | Foco | Entrega |
|---|---|---|
| Sprint (1 semana) | n8n, Python básico, primeiros passos em CrewAI | Projetos 01 e 02 e comparação entre eles |
| 1 | Metalearning e Python para agentes | Scripts que chamam a API do Claude |
| 2 | Primeiro agente completo | Agente com ferramentas e saída estruturada |
| 3 | RAG, MCP e prompts | Projeto 03 e agente que lê documentos |
| 4 | Equipes de agentes com CrewAI | Equipe com revisor e aprovação humana |

Detalhes em [docs/trilha.md](docs/trilha.md). Materiais de estudo em [docs/recursos.md](docs/recursos.md).

## Como este repositório está organizado

```
agentes-ia-na-pratica/
├── diario/        uma nota por dia de estudo: o que aprendi, onde travei, como resolvi
├── docs/          trilha, recursos e conceitos explicados com minhas palavras
└── projetos/      um diretório por projeto, cada um com README próprio
```

## Regras que sigo aqui

- Só dados públicos. Nada de dados de clientes, empresas ou material protegido por direitos autorais.
- Chaves de API nunca entram no repositório: ficam num arquivo `.env`, listado no `.gitignore`. O modelo está em [.env.example](.env.example).
- Cada projeto mostra o que mede: taxa de acerto, custo por execução e limitações conhecidas.
- Escrevo o código primeiro e uso IA para revisar e explicar erros, não para gerar tudo pronto.

## Progresso

- [x] Trilha definida e repositório criado
- [ ] Projeto 01 rodando toda semana
- [ ] Primeiro curso de CrewAI concluído
- [ ] Projeto 02 com 10 casos de teste
- [ ] Comparação n8n x CrewAI publicada
