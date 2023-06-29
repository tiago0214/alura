const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
];

function ligarParaCliente (telefoneComercial,telefoneResidencial){
    console.log(`Ligando para o telefone comercial: ${telefoneComercial}`)
    console.log(`Ligando para o telefone residêncial: ${telefoneResidencial}`)
}
//ligarParaCliente(cliente.telefone[0],cliente.telefone[1]) mesma coisa que ai de baixo
ligarParaCliente(...cliente.telefone)
//sytanc de espalhamento
//ele vai dividir os campos do array, e passar como se fosse cada um, um parametro.(é como se ele retirasse de um array, e criasse dois campos)
console.log(...cliente.telefone)
console.log(cliente.telefone)
console.log('--------------------------------------------------------------------------------------------------------------------')

const encomenda = {
    destinatario : cliente.nome,
    rua: cliente.enderecos[0].rua,
    //endereco: cliente.enderecos,
}
console.log(encomenda)

//com espalhamento em objetos, eu não preciso criar um propriedade para salvar o valor. ele espalha, a propriedade que eu selecionar
console.log('-----------------------------------------espalhamento----------------------------------------------------------------')

const encomendaEspalhada = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]// preciso colocar o indice do array, para não me retornar 2 objetos
}
console.log(encomendaEspalhada)
