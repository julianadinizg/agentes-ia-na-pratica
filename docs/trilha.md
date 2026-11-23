# Trilha de estudo

Aprender Python para agentes, n8n e CrewAI construindo agentes reais, em cerca de 18 semanas, com 6 a 8 horas por semana.

O aprendizado vem antes da entrega: se um agente fica pronto e eu não consigo explicar cada parte dele, a etapa não terminou.

## Sprint de 7 dias (22 a 28/11/2026)

| Dia | Aprender | Construir | Pronto quando |
|---|---|---|---|
| Dom | Tutorial de primeiro fluxo do n8n | Radar de editais no n8n, com resumo por e-mail | E-mail de teste recebido e 3 links conferidos |
| Seg | API do Claude; Python básico | Ambiente Python, este repositório, script que chama o Claude | O script responde e está aqui |
| Ter | Multi AI Agent Systems with crewAI (~3h) | Exemplos do curso | Explico agente, tarefa e crew sem consultar |
| Qua | Documentação do CrewAI: ferramentas | Equipe com pesquisador (Tavily) e analista | Uma execução devolve uma lista de editais |
| Qui | Documentação do CrewAI: saída estruturada | Saída em Pydantic; 10 casos de teste | Os 10 casos rodam com o mesmo formato |
| Sex | Como medir um agente | Comparar n8n e CrewAI: acerto, custo e tempo | Comparação registrada com números |
| Sáb | Como escrever um bom README | README dos projetos 01 e 02 | Alguém de fora entende só pelo README |

## Fases

### Fase 1 · Metalearning e Python para agentes
Variáveis, funções, listas, dicionários, JSON, APIs e Git. Drill: scripts que chamam o Claude e salvam respostas estruturadas.

### Fase 2 · Primeiro agente completo
n8n (nós, gatilhos, nó AI Agent), loop de agente em Python sem framework, tool use e Pydantic.

### Fase 3 · RAG, MCP e prompts
Embeddings, chunking, Chroma, Streamlit, Model Context Protocol e prompts avançados. Projeto 03.

### Fase 4 · Equipes de agentes com CrewAI
Crews, Flows, guardrails, agente revisor, aprovação humana, testes, observabilidade e custo.

### Trilha complementar
Memória e conversa pelo Telegram, OCR de documentos, Supabase como banco vetorial, aplicativo no Lovable, troca de modelo por tarefa (OpenRouter) e guardrails.

## Como meço cada fase

| Métrica | Como medir |
|---|---|
| Acerto nos casos de teste | Respostas aprovadas ÷ total de casos |
| Custo por execução | Gasto de API ÷ número de execuções |
| Taxa de correção | Saídas que precisei corrigir ÷ total |
| Tempo poupado | Tempo da tarefa à mão menos o tempo de revisão |
