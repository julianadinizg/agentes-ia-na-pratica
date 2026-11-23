// Nó Code "Ler editais": Run Once for All Items
const texto = $input.first().json.output || '';
const inicio = texto.indexOf('[');
const fim = texto.lastIndexOf(']');
if (inicio === -1 || fim === -1) return [];

let lista;
try {
  lista = JSON.parse(texto.slice(inicio, fim + 1));
} catch (erro) {
  throw new Error('O agente não devolveu um JSON válido: ' + erro.message);
}

const hoje = $now.toFormat('yyyy-MM-dd');
return lista
  .filter((e) => e.Link)
  .map((e) => ({ json: { 'Encontrado em': hoje, ...e } }));
