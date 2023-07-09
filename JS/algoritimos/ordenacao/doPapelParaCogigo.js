const livros = require("./listaLivros")


function menorValor (lista,posicaoInicial){
let maisBarato = posicaoInicial;
for (let atual = posicaoInicial; atual < lista.length ; atual++){
    if(lista[atual].valor < lista[maisBarato].valor){
        maisBarato = atual
    }
}
return maisBarato
}
module.exports = menorValor;

//ele vai passar por todo o meu array primeiro, para depois ir para o console.
