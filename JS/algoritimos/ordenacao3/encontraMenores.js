const livros = require("./array")

function retornarMenor (pivo, lista) {
    let menores = 0 ;

    for(atual = 0 ; atual < lista.length ; atual++){
        const produtoAnalisar = lista[atual]
        if(produtoAnalisar.valor < pivo.valor) {
            menores ++
        }
    }
   trocarDeLugar(lista, lista.indexOf(pivo), menores)

    return lista
}

function trocarDeLugar (lista , de , para) {
    const elem1 = lista[de] 
    const elem2 = lista[para]

    lista[de] = elem2
    lista[para] = elem1
}


function divideNoPivo (array) {
    let pivo = array[Math.floor(array.length / 2)]
    retornarMenor(pivo,array)
    let controle = 0;

    for(analisando = 0 ; analisando < array.length ; analisando++){
        let elementoArray = array[analisando]
        if(elementoArray.valor < pivo.valor && elementoArray !== pivo){
            trocarDeLugar(array , analisando , controle) 
            controle++
        }

    }
    return array
}
module.exports = trocarDeLugar

//console.log(divideNoPivo(livros))