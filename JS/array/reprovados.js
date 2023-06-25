//filter: sempre tem que retornar verdadeiro ou falso
const nomes = ['Ana','Marcos','Maria','Mauro'];
const notas = [7,4.5,5,7.5];

const reprovados = nomes.filter((aluno,indice)=>{ //convernção: usar _ caso eu não estaja usando algum parâmetro!
    return notas[indice]<7; // retornou true !!!!!! posso definir diretamente os valores booleanos
});

console.log(reprovados)






//eu que fiz esse 

// const alunosReprovados = [];
// const ind = [];

// notas.forEach((nota,indice)=>{
//     if(nota<7){
//         alunosReprovados.push(nomes[indice])
//         ind.push(notas[indice])
//     }
// })

// console.log(`${alunosReprovados} Foi reprovado com a nota ${ind}`)