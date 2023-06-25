const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//é uma class, que não permite elementos repetidos.

const meuSet = new Set(nomes) // posso imprimir direto o meu set: só que sai outras coisas no console.
// const nomesAtualizados = [...new Set(nomes)];
const nomesAtualizados = [...meuSet] 
//posso fazer direto

console.log(nomesAtualizados)