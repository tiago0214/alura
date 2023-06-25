const nomes = ['ana Julia','Caio vinicius','BIA silva']

const nomesAtualizados = nomes.map((nome)=>{
    return nome.toUpperCase()
})

console.log(nomesAtualizados)



const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) 

// “String”, além de ser o tipo de dado usado para representar textos, também se define como uma sequência ordenada de caracteres!

// “Lista ordenada” (ou sequência) também é uma forma de definir arrays, certo? Então podemos pensar que, por baixo dos panos, strings são armazenadas em memória da seguinte forma:

// const nome = "Alura";
// ["A", "l", "u", "r", "a"]

const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " Alura"

const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura