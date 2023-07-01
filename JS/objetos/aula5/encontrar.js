const clientes = require("./clientes.json");

function encontrar(lista,chave,comparacao){
    return lista.find((elemento)=> elemento[chave].numero.includes(comparacao))
}
console.log(encontrar(clientes,'endereco','89'))

