const botoesTags = document.querySelectorAll("button")

botoesTags.forEach(button => {
    button.addEventListener("click",()=> filtrarLivros(button.value))
});

function filtrarLivros(categoria) {

    console.log(categoria)
    console.table(livros)
    let livrosFiltrados = livros.filter(livro => livro.categoria === categoria)
    
    console.table(livrosFiltrados)
}











