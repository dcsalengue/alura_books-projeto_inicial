

let livros = [];
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI(params) {
    const res = await fetch(endpointDaAPI);
    const listaDeLivros = await res.json();
    let livrosComDesconto = aplicarDesconto(listaDeLivros);

    exibirOsLivrosNaTela(livrosComDesconto);



}
