const idadeMinima = 18;
let idadeCliente = 16;
            //codição                  //true       //false
console.log(idadeCliente>=idadeMinima ? 'Cerveja': 'Suco')


const nome = 'Tiago';
const idade = 28;
const bebidaMaior = 'Posso beber, mas não vou!'
const bebidaMenor = 'Suco'

const pedido = `Eu :${nome} Quero beber: ${idade >=18 ? bebidaMaior: bebidaMenor}`
console.log(pedido)

//posso fazer uma comparação dentro de um template string