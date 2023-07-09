//troca de valores
let valores =[
{

    valor : 10,
    
},
{
    valor : 20,
}
]
let valor = valores[0];
let valorAt = valores[1];

valores[0] = valorAt;
valores[1] = valor;
console.log(valores)

//quando eu crio uma variavel: baseada em um array: lembrar que ela aponta para um endereço da memoria que esta salvo o meu array
//outra coisa. A sintaxe ai em cima. É somente uma forma para atribuição de valor a um array. Na real, é um modo de reatribuir valor ao meu array. Não tem nada demais
//eu não estou chamando um modo especial, eu somente falo que o indice valores[0] e valores[1] vão receber o valor que esta salvo na minha variavel em cima deles.
// da a impressão da troca de elementos, porque eu preciso salvar os valores que eu quero usar dentro de uma variavel, porque se não ele se perde.

