const livros = require("./listaLivros")

let maisBarato = 0;

for (let atual = 0; atual < livros.length ; atual++){
    if(livros[atual].valor < livros[maisBarato].valor){
        maisBarato= livros[atual]
    }
}
//ele vai passar por todo o meu array primeiro, para depois ir para o console.
console.log(maisBarato)