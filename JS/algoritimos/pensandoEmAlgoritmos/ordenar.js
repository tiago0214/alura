const livros = require("./listaLivros")

function ordenar (lista,propriedade){
    const ordenados = lista.sort((a,b)=>{
        if (a[propriedade] < b[propriedade]){
            return -1
        }
        if(a[propriedade] > b[propriedade]){
            return 1
        }
        return 0
    })
    return ordenados
}

const ordenei = ordenar(livros,'valor')
console.log(ordenei)