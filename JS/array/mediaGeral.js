const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];
//o acumulador: é como se fosse a variavel, que fica recebendo os valores para somar, os elementos do array.
//aqui eu peço para ele ficar somando o acumulador com a nota, desde o primeiro elemento.
function calcularMedia (param){
    const sala = param.reduce((acumulador,nota)=>{
        return acumulador + nota
},0)
    const media = sala/param.length
    return media
}
console.log(calcularMedia(salaJS))

function calculaMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);
  
    const media = somaDasNotas / notasDaSala.length;
  
    return media;
}