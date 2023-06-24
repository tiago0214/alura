//Eu posso criar duas funçoes e os parametros delas podem ser os mesmos nomes. pois os parametros vão funcionar somente nessa função.

// declaração de função
function soma(num1,num2){
    return num1+num2
}
function multiplicar(num1,num2){
    return num1*num2
}
console.log(multiplicar(soma(2,2),soma(2,2)))


//Parâmetros x argumentos: Na prática se referem ao mesmo tipo de dado; algumas documentações se referem a parâmetros no momento em que a função é definida (no caso, numero1, numero2, etc) e argumentos como os dados que utilizamos para executar a função (ou seja, 30, 45, etc).

//expressão de função
console.log(soma2(6,3)) // erro aqui, do exemplo ai de baixo!
const soma2 = function( num1,num2){return num1+num2}

//principal diferença===== é que , não a o içamento(hoisting) das funções declaradas com CONST e LET, , há somente das VAR e das DECLARAÇÔES DE FUNÇÕES

console.log(apresentar()) //exemplo que funciona... O interpretador do JS puxa para o topo do nosso código, todas as VAR e as DECLARACÕES DE FUNCÕES
function apresentar(){
    return 'oi gente'
}

//arrow function, não pode ser nomeada, ela tem que ser colocada em uma VARIAVEL