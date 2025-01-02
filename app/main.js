let livros = [];
const endpointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
 getBuscarLivrosDaAPI();

const elementoParaInserirLivros = document.getElementById("livros");
async function getBuscarLivrosDaAPI(params) {
    const res = await fetch(endpointDaAPI);
    const listaDeLivros = await res.json();
    console.table(listaDeLivros);

    exibirOsLivrosNaTela(listaDeLivros);

    
    
}

function exibirOsLivrosNaTela(listaDeLivros) {
    listaDeLivros.forEach((livro) => {
        const divLivro = document.createElement("div");

        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">>${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    });
}