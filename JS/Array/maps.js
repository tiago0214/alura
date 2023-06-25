const notas = [10,9.5,8,7,6];


const notasAtualizadas = notas.map((nota) => {
    return nota+1>10 ? 10 : nota+ 1 
})

console.log(notasAtualizadas)


//o map: não altera o array original e ele, retorna um valor.
//quando eu retorno algum valor, é possivel eu utilizar esse valor dentro de uma variavel.
//sem retorno, eu não consigo trabalhar com aquele dado de dentro de alguma função. Igual o forEach(), ele somente executa: eu posso pedir para ele atribuir o valor a alguma variavel , porém eu não consigo fazer ele mesmo ser uma variável. pois ele somente executa algo.
