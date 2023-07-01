//é quando eu tenho um bloco de código dentro do outro. Por exemplo quando eu estou escrendo um if , ele esta aninhado dentro de outr código.
//O valor de uma chave do Objeto pode ser um array. E ele tem as mesma coisas disponiveis , como se fosse um array comum.

//Objetos literais funcionam bem quando queremos ter um objeto único com seus próprios dados. Isso porque um objeto literal sempre aponta para um mesmo local na memória, mesmo se você criar cópias dele. Vejamos o código a seguir:
//mesma coisa do array. Mesmo que eu crio(apontam para o mesmo endereço da memória)

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
const objPersonagem2 = objPersonagem

objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento


//Já o acesso por cópia funciona com tipos primitivos (string, number, booleano, null, symbol):

let num = 50
let num2 = num

num2 = 100
console.log(num) //50
console.log(num2) //100

//Como podemos contornar esse comportamento quando criamos objetos? Além de utilizar a notação literal, objetos também podem ser criados através do método Object.create():

const objPersonagemm = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersonagem2 = Object.create(objPersonagemm)
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagemm.nome) //Gandalf
console.log(objPersonagem2.nome) //Gandalf, o Cinzento
