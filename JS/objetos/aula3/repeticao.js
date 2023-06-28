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

//percorrer as chaves de um objeto.
// for(chave in cliente){
//     console.log(chave)
// };
//acessar os valores
for(chave in cliente){
    console.log(`A chave ${chave} tem o valor de :`,cliente[chave])
}//reparar no outpout do endereço//porque é um array , com um objeto dentro
console.log('--------------------------------------------------parte 2 ----------------------------------------------------------------')

//se eu usar o operador de concatenção '+' ou 'template literal': não consigo ver os object e funções dentro do objeto. posso filtrar dessa maneira.
for(chave in cliente){
    let tipo = typeof cliente[chave]
    if (tipo !== 'object' && tipo !== 'function'){
        console.log(`A chave ${chave} tem o valor de :`,cliente[chave])
    }
}
console.log('--------------------------------------------------parte 3 ----------------------------------------------------------------')
for ( chave in cliente){
    let arr = typeof cliente[chave] //a chave aqui, muda... porque ela é passada pelo for.
    if( arr == 'object' || arr == 'function'){
        console.log(`A chave ${chave} tem o valor de :`,cliente[chave])
    }
}

//typeof retorna o valor de algo.==== exemplo, o valor de uma chave!