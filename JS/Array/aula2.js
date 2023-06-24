// const alunos = ['aluno1','aluno2','aluno3','aluno4','aluno5','aluno6','aluno7','aluno8','aluno9','aluno10','aluno11','aluno12','aluno13','aluno14','aluno15','aluno16','aluno17','aluno18','aluno19','aluno20']
// const sala1 = alunos.slice(0,10); // ele não considera o segundo argumento, ele pega dele para baixo. É como se ali fosse o teto!
// const sala2 = alunos.slice(10);// aqui , eu não preciso passar o segundo argumento! ele já entende que dele em diante!
// const sala3 = alunos.slice(0,alunos.length / 2) // da na mesma coisa 
// const sala4 = alunos.slice(alunos.length/2) // da na mesma coisa

// console.log(sala1)
// console.log(sala2)
// console.log(sala3)
// console.log(sala4)

// const test = alunos.slice(15)
// console.log(test)

//splice(1,4,'rodrigo') metodo para retirar algo de dentro do array. param1: a partir de qual elemento eu quero remover. param2: quantos elementos depois do indice do param1 que eu quero remover! (1,1) siginifica que eu quero remover somente o meu param1, posso usar um 3terceiroparam ... ele vai substituir

const alunos = ['aluno1','aluno2','aluno3','aluno4','aluno5'];
alunos.splice(1,0,'joao')
console.log(alunos)