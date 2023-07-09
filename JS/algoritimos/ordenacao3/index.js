const listaLivros = require("./array")

function mergeSort (array) {

    if(array.length > 1){
        const meio = Math.floor(array.length / 2)
        const parte1 = mergeSort(array.slice(0,meio))//acho que ela fica chamando chamando , até pular para a linha 8 :é os valores todos salvos na variavel parte2
        const parte2 = mergeSort(array.slice(meio,array.length)) //ela fica chamando, é os valores todos salvos na variavel parte2
        array = ordena(parte1,parte2);
    }
    return array
}
console.log(mergeSort(listaLivros))


function ordena (lista1,lista2) { //essa função faz a ordenção entre dois elementos.
    let posicaoAtualParte1 = 0 ;
    let posicaoAtualParte2 = 0 ;
    let listaFinal = [];

    while(posicaoAtualParte1 < lista1.length && posicaoAtualParte2 < lista2.length) {
        let item1 = lista1[posicaoAtualParte1]
        let item2 = lista2[posicaoAtualParte2]
        if(item1.valor < item2.valor){
            listaFinal.push(item1)
            posicaoAtualParte1++
        }else{
            listaFinal.push(item2)
            posicaoAtualParte2++
        }
    }
    return listaFinal.concat(posicaoAtualParte1 < lista1.length 
        ?lista1.slice(posicaoAtualParte1) //quando eu passo somente um parametro para o metodo slice, ele pega tudo até o final do meu array.
        :lista2.slice(posicaoAtualParte2))
}