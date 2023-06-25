const nomes = ['aluno1','aluno2','aluno3']

nomes.forEach((nome) => {
    console.log(nome)
});

//posso fazer assim.



//se eu colocar pararenteses no final de imprimirNome. Ele vai tentar executar a função, ou seja, tentar pegar o retorno da função. e aqui, eu não estou retornando nada.

//agora se eu executar sem o parenteses, ele somente esta chamando a minha função. para ela ser chamada de volta .. sem se importar com o retorno dela.
nomes.forEach(imprimirNome)

function imprimirNome(nome){
    console.log(nome)
}