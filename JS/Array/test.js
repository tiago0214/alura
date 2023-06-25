// const test = [100,200,300,400,500,600]

// // for(i = test.length -1 ; i >= 0; i --){
// //     console.log(test[i])
// // }

// for(i = test.length -1; test[i] >= 300 ; i -- ){
//     console.log(test[i])
// }


//for é uma estrutura de repetição que eu posso usar para tudo! loops(laço de repetição)
const numerosPares = []

for(i = 0; i<=100 ; i +=2){
    numerosPares.push(i)
}

console.log(numerosPares)

//mais complexos
const lista = [1, 2, 3, 4, 5];

for (let i = 0, j = 0; i < lista.length; i++, j++) {
 console.log(lista[i] + j); 
}


const iter = 'Tiago'

for(elemento of iter){
    console.log(elemento)
}

const arrayNums = [1, 2, 3, 4]
const mult = arrayNums.map(multiplicar)
function multiplicar(elemento){
    return elemento*10
}
console.log(mult)