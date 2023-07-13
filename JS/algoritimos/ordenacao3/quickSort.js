const livros = require("./array")
const trocaDeLugar = require("./array")

function quickSort (array, esquerda, direita) {
    if (array.length > 1){
        let varTemp = particiona (array, esquerda, direita);
    };

    return array;
}

function particiona (array, esquerda, direta) {
    let pivo = array[Math.floor((esquerda + direta) / 2)]
    let atualEsquerda = esquerda; //primerira chamada da função = 0
    let atualDireita = direta; //primeira chamada da função = 10

    while(atualEsquerda <= atualDireita) {
        while(array[atualEsquerda].valor < pivo.valor){
            atualEsquerda++
        }

        while(array[atualDireita].valor > pivo.valor){
            atualDireita--
        }

        if(atualEsquerda <= atualDireita) {
            trocaDeLugar(array, atualEsquerda, atualDireita)
        }
    }
}

quickSort(array, 0 , livros.length - 1)