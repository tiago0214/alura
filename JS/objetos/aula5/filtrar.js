const clientes = require("./clientes.json")

function encontrarClienteSemComplemento (clientes){
    return clientes.filter((cliente)=>{
        return (
            cliente.endereco.apartamento ===true && //posso omiter o ==true // porque cliente.endereco.apartamento && outra coisa, Só foi se ambas forem true
            !cliente.endereco.hasOwnProperty('complemento')
            )
    })
}
const filtrados = encontrarClienteSemComplemento(clientes)
console.log(filtrados)