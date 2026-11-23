# Conceitos, com minhas palavras

Anoto aqui cada conceito quando consigo explicá-lo sem consultar.

## Fluxo x agente

- **Fluxo:** passos fixos, definidos por mim, que acontecem sempre na mesma ordem.
- **Agente:** um modelo de IA que recebe um objetivo e ferramentas e decide sozinho o que fazer: quais buscas, quantas, o que descartar e quando parar.

No Radar de editais no n8n, só o nó AI Agent é agente. Agenda, planilha e e-mail são fluxo.

```
[Segunda 7h] → [AGENTE] → [Ler JSON] → [Planilha] → [Resumo] → [E-mail]
   fluxo        agente       fluxo        fluxo        fluxo       fluxo
```

## n8n x CrewAI x Claude Code

| | Claude Code | n8n | CrewAI |
|---|---|---|---|
| O que é | Agente pronto que trabalha no meu computador e no meu código | Plataforma de automação visual | Biblioteca Python para equipes de agentes |
| Para que uso | Me ajudar a construir | Rodar processos sozinho, com agenda e integrações | Construir agentes em código |
| Quando roda | Quando eu peço | No horário ou num gatilho | Quando meu código manda |

## SDK x framework

- **SDK:** pacote pronto que facilita usar o serviço de uma empresa dentro do meu programa. Exemplo: `anthropic`, para chamar o Claude em Python.
- **Framework:** estrutura para organizar o programa inteiro. Exemplo: CrewAI, que já traz agentes, tarefas e equipes.
- **Claude Agent SDK:** fica no meio: traz o loop de agente pronto (pensar, usar ferramenta, observar, repetir) para eu embutir no meu código.
