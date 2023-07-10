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

console.log(retornarMenor(livros[2],livros))