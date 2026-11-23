// Nó Code "Montar resumo": Run Once for All Items
const itens = $('Ler editais').all().map((i) => i.json);
if (!itens.length) {
  return [{ json: { texto: 'Nenhum edital aberto encontrado esta semana.' } }];
}
itens.sort((a, b) => (a['Prazo'] || '9999').localeCompare(b['Prazo'] || '9999'));
const linhas = itens.map((e) =>
  `• ${e['Órgão']}: ${e['Título']}\n` +
  `  Prazo: ${e['Prazo'] || 'não informado'} | ${e['Vertical']} | Aderência ${e['Aderência']}\n` +
  `  ${e['Link']}`
);
return [{ json: { texto: `Editais da semana (${itens.length})\n\n` + linhas.join('\n\n') } }];
