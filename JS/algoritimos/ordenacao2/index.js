const {edGalho,edFolha} = require("./arrays")

function juntarLista (lista1, lista2) {
    const listaFinal = [];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;
    let atual = 0;
    while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {
        let item1 = lista1[posicaoAtualLista1]
        let item2 = lista2[posicaoAtualLista2]
        if(item1.valor < item2.valor){
            listaFinal[atual] = item1
            posicaoAtualLista1++
        }
        else {
            listaFinal[atual] = item2
            posicaoAtualLista2++
        }
        atual++
    }
    while(posicaoAtualLista1 < lista1.length){
        listaFinal[atual] = lista1[posicaoAtualLista1]
        posicaoAtualLista1++
        atual++
    }
    while(posicaoAtualLista2 < lista1.length){
        listaFinal[atual] = lista2[posicaoAtualLista2]
        posicaoAtualLista2++
        atual++
    }
    return listaFinal
}
console.log(juntarLista(edFolha,edGalho))
//eu preciso criar as variaveis item1 e item2: para que elas guardem as informações do meu array por completo , não somente o indice de cada item, porque se não , eu não consigo comparar os precos que estão estão salvos dentro da propriedade VALOR dentro de cada objeto.