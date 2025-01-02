
function aplicarDesconto(livros) {
    const desconto = 0.3;

    livrosComDesconto = livros.map(livro => {
        // Retorna o spread de livro com alteração do item preco de cada linha
        return {...livro, preco: livro.preco-(livro.preco * desconto) }
    });
    return livrosComDesconto
}