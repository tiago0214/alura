const livros = require("./array")
const trocarDeLugar = require("./encontraMenores")

function quickSort (array, esquerda, direita) {
    if (array.length > 1){
        let indiceAtual = particiona (array, esquerda, direita);
        if( esquerda < indiceAtual -1) {
            quickSort(array, esquerda, indiceAtual - 1)
        }
        if( indiceAtual < direita ) {
            quickSort(array, indiceAtual , direita)
        }
    };

    return array;
}

function particiona (array, esquerda, direta) {
    console.log('array: ' , array)
    console.log('esquerda e direita:' , esquerda,direta)
    let pivo = array[Math.floor((esquerda + direta) / 2)]
    let atualEsquerda = esquerda;
    let atualDireita = direta; 

    while(atualEsquerda <= atualDireita) {
        while(array[atualEsquerda].valor < pivo.valor){
            atualEsquerda++
        }

        while(array[atualDireita].valor > pivo.valor){
            atualDireita--
        }

        if(atualEsquerda <= atualDireita) {
            trocarDeLugar(array, atualEsquerda, atualDireita)
            atualEsquerda++;
            atualDireita--;

        }
    }
    return atualEsquerda
}


console.log(quickSort(livros, 0 , livros.length -1))