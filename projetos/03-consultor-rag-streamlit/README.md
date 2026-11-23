# 03 · Consultor RAG

Base de conhecimento consultável: carrega documentos, divide em trechos, indexa e responde perguntas citando a fonte e a página. Quando a resposta não está no material, diz que não encontrou.

**Status:** planejado para a Fase 3

## Plano

1. Carregar PDFs e dividir em trechos, guardando fonte e página.
2. Gerar embeddings e salvar no Chroma.
3. Buscar os trechos mais relevantes e mandar ao Claude com o contexto.
4. Interface no Streamlit: pergunta, resposta, fontes e filtro por fonte.

## Dados

Os documentos usados no dia a dia são material de curso protegido por direitos autorais e **não** entram neste repositório. A pasta `dados/` está no `.gitignore`. Para a demonstração pública, uso material de domínio público ou anotações próprias.

## Avaliação

20 perguntas com resposta conhecida, incluindo algumas que o material não cobre. Meta: acertar as cobertas e responder "não encontrei" nas demais.
