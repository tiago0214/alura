const notas = [10,6.5,8,7.5]
let media = 0;
for (i=0;i<notas.length;i++){
        media += notas[i]
}
console.log(media/notas.length)

//A propriedade length:
// Esta propriedade especifica o tamanho de um array, ou melhor dizendo, o número de elementos. É importante notar que não estamos falando aqui de índices ou posições, e sim da quantidade de valores (dados) contidos no array. Por exemplo: igual o de cima!

//ter em mente, que a const só não aceita receber uma nova atribuição. Mas eu posso alterar os elementos do meu array!

// concat
// Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.
// Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.

const notasA = [7,20,40]
const notasB = [77,88,99]
const juntos = notasA.concat(notasB)
console.log(juntos)

//O JavaScript manteve as posições vazias e adicionou o 50 ao final do array. Após a execução, ele passou a ter 4 posições, mas somente um elemento (o número 50). Chamamos este tipo de estrutura de array esparso