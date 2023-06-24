//tipagem dinâmica: posso definir variaveis sem especificar o tipo de dado da variavel, como também posso alterar o dado dessa variavel no futuro.
//Multiparadigma: Varias formas de resolver a mesma coisa.
//o JS é uma linguagem interpretada.... posso utilizar o navegador para interpretar ou o nodeJS
//a linguagem compilada, transforma todo o programa em linguagem de maquina. É uma linguagem mais rapida, pois não precisa do interpretador 

// essa lista que está sendo passada para nós, no terminal, é chamada stacktrace, onde o JavaScript nos mostra todo o caminho que nosso código executou e todos os arquivos internos da ferramenta, da biblioteca, da linguagem de programação, que estão sendo usados para fazer com que nosso código funcione. 
// E ele pode nos ajudar a descobrir onde está acontecendo, ou onde está "estourando" um erro, um bug que, às vezes, é mais difícil identificar em um código maior.

//console. é para por alguma informação para fora do meu programa mas que não fica visivel ao meu usuario, quando eu uso .log, eu estou criando um registro de algum dado

// The console is a panel that displays important messages, like errors, for developers. Much of the work the computer does with our code is invisible to us by default. If we want to see things appear on our screen, we can print, or log, to our console directly.

// One action, or method, that is built into the console object is the .log() method. When we write console.log() what we put inside the parentheses will get printed, or logged, to the console.

//When you introduce a new piece of data into a JavaScript program, the browser saves it as an instance of the data type. All data types have access to specific properties that are passed down to each instance. For example, every string instance has a property called length that stores the number of characters in that string. You can retrieve property information by appending the string with a period and the property name
//In the example above, the value saved to the length property is retrieved from the instance of the string, 'Hello'. The program prints 5 to the console, because Hello has five characters in it.
// An instance is an individual case of a data type.

//ter em mente que o console é para mostrar os erros. Quando eu uso o .log eu estou pedindo, para que algo que normamente não iria sair do meu programa, seja imprimido ou registrado no painel do console.

// No JavaScript, os tipos de dados podem ser divididos em duas categorias: tipos primitivos e tipos de objetos.
// Alternativa correta! Muito bem! Os tipos primitivos do JavaScript incluem números, texto (conhecidas como strings) e valores booleanos. Já o tipo objeto é uma coleção de propriedades, onde cada uma possui um nome e um valor, sendo ele um valor primitivo ou outro objeto.

//tem diferença em usar o console.log() e usar o console.error() e usar o console.warn(), apesar de no nodeJS, eles aparecerem a mesma coisa, se eu colocar alguns elementos a mais no console.error() ele vai dar um resultado diferente. EX.

console.log("deu erro");
console.error('Errinho')
console.error(new Error("deu erro"));

//NodeJS é um interpretador de JavaScript para backend, ou seja, não executa no navegador, mas sim no servidor.