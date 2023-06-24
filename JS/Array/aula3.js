// //lista de duas dimensões
// const alunos = ['aluno1','aluno2','aluno3','aluno4']
// const medias = [10,5,6,8]

// const alunosEMedias =[alunos,medias]

// console.log(`O aluno que está na posição 2: ${alunosEMedias[0][1]}. sua média foi: ${alunosEMedias[1][1]}`)

// primeiro uso a lista externa e depois a interna.
//Outra forma de chamar os arrays de 2 dimensões é matrizes. Matrizes podem ser visualizadas como uma tabela do Excel, onde cada campo representa um elemento, e precisamos de uma linha e uma coluna para acessar um campo. Então, as linhas são o primeiro colchete e a coluna o segundo colchete.
// Arrays têm seu principal uso quando temos uma grande quantidade de informações com propósitos similares, como as notas de um aluno. Matrizes, por sua vez, são utilizadas quando precisamos de vários arrays similares ou com informações ligadas às outras, como as notas de uma classe com vários alunos.
// As matrizes não são limitadas a 2 dimensões, podendo ter mais dimensões, de modo que cada dimensão é representada por um colchete.

const alunos = ['joão','maria','gabriel','lucas']
const notas =[10,5,6,8]
const juntos = [alunos,notas]

function achar(al){
    if(juntos[0].includes(al)){
        //desestruturação
        const [aluno,notas] =juntos;
        //mesma coisa daqui de baixo!
        // const aluno = juntos[0]
        // const notas = juntos[1]

        const indice = aluno.indexOf(al)
        console.log(`${al} tem a média de ${notas[indice]}`)
    }else{
        console.log('Não achei')
    }
}
achar('lucas')

//destructuring
const [num1,num2] = [1 , 2]
console.log(num1,num2)