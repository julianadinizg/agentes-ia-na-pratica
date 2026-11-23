# 01 · Radar de editais no n8n

Agente que, toda segunda de manhã, procura editais de inovação abertos no Brasil, grava cada um numa planilha sem duplicar e envia um resumo por e-mail ordenado por prazo.

**Status:** em construção

## Arquitetura

```
[Schedule Trigger] → [AI Agent + Tavily] → [Code: ler_editais] → [Google Sheets] → [Code: montar_resumo] → [Gmail]
  segunda, 7h         busca e avalia         valida o JSON        append or update    texto do e-mail       resumo
```

Só o nó AI Agent é agente: ele decide o que pesquisar e quais resultados aproveitar. O resto é fluxo fixo, o que deixa o processo barato e fácil de depurar.

## Componentes

| Nó | Função |
|---|---|
| Schedule Trigger | Dispara toda segunda às 7h (fuso America/Sao_Paulo) |
| AI Agent | Modelo Claude com a ferramenta de busca Tavily; prompt em [prompt.md](prompt.md) |
| Code · ler_editais | Extrai e valida o array JSON da resposta do agente ([código](codigo/ler_editais.js)) |
| Google Sheets | Append or Update Row, usando a coluna Link para não duplicar |
| Code · montar_resumo | Ordena por prazo e monta o texto do e-mail ([código](codigo/montar_resumo.js)) |
| Gmail | Envia o resumo |

## Colunas da planilha

`Encontrado em` · `Órgão` · `Título` · `Prazo` · `Valor` · `Vertical` · `Aderência` · `Justificativa` · `Link` · `Situação`

A coluna Situação é preenchida à mão (Em análise, Vai concorrer, Descartado) e o agente nunca a sobrescreve.

## Como testar

- [ ] Rodar com Execute Workflow e conferir 3 links à mão: são páginas oficiais e os prazos batem?
- [ ] Rodar de novo e confirmar que a planilha não duplicou linhas.
- [ ] Registrar abaixo os resultados da primeira semana.

## Resultados

| Data | Editais encontrados | Links válidos | Prazos corretos | Custo da execução |
|---|---|---|---|---|
| | | | | |

## Limitações conhecidas

- O agente pode trazer editais encerrados ou páginas de notícia em vez da página oficial. Por isso, todo prazo é conferido antes de qualquer decisão.
- Se o modelo responder com texto em vez de JSON, o nó ler_editais falha com uma mensagem clara.

## O que aprendi

_A preencher ao fim do projeto._
