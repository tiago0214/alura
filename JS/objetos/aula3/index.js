const fichaGuerreiro = {
    nome: 'Aragorn',
    classe:'guerreiro'
}
const equipGuerreiro = {
    espada:'anduril',
    capa:'capa élfica +2'
}

const guerreiro = {...fichaGuerreiro,...equipGuerreiro}
console.log(guerreiro)
//Importante! Vale notar que, caso a sintaxe de espalhamento seja usada em objetos que tenham chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor destas propriedades à medida que encontra novos valores com o mesmo nome de chave. Por exemplo:
const mago = {
    nome: "Gandalf",
    classe: "mago"
}   
const ranger = {
    nome: "Legolas",
    classe: "ranger"
}

const personagens = {guerreiro,mago,ranger}
console.log(personagens)

//Apesar de prático, o uso da sintaxe de espalhamento pode gerar bastante processamento, então deve ser usado com cuidado em caso de loops ou funções recursivas.