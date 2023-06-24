//primeira expressão: é executada apenas uma vez
//segunda expressão: condição de execução
//terceira expressão: é executada sempre ao final do código
// for(i= 0; i<6; i+=1){
//     console.log('oi')
// }

const nota = [10,6.5,8,7.5]
let media = 0
for (i=0; i<nota.length; i++){
    media += nota[i]
}
const result = media/nota.length
console.log(result)