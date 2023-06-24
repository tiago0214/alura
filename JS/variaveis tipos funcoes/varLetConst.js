/*Posso entender que a principal diferença, é que a variavel declarada com const não pode ficar sem inicialização. A let e var , podem ser criadas e não inicializadas. Não tem problema*/
// Talvez, eu possa inicializar a variavel com null ou undefined
//null => vazio ou nada
//undefined => Quando eu crio uma variavel e não atribuo nada para ela,ela começa com undefined.()(espaço na memória já esta guardado para ela)
// typeof null .... retorna um objeto // é um bug, que não tem como voltar atras
let num =123341234123;

console.log('Seu numero de telefone é: '+ num.toString());

let user = false;
console.log(user.toString())

let largura = "10";
let altura = "5";
console.log( + largura + + altura);
//se eu colocar um +espaçoNomeDaVariavel , ele converte a variavel em numero.

let usuarioConectado = false;
console.log(Number(usuarioConectado)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado = true;
console.log(Number(usuarioConectado)); // agora teremos a conversão de true (verdadeiro) para o número 1.

// No JavaScript, algumas palavras são totalmente reservadas (não podem ser utilizadas como identificador em nenhum caso), enquanto outras podem ser utilizadas dependendo do contexto, e ainda outras não podem ser consideradas totalmente reservadas por razões de compatibilidade com versões mais antigas da linguagem, como é o caso de let (lembrando que, até o ES6, só era possível declarar variáveis com var). A palavra let vem do verbo em inglês “permitir”, então não é possível deixá-la reservada pois pode já estar sendo usada como identificador em algum código mais antigo.

var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)

// Alternativa correta! Muito bem! Variáveis declaradas com var ou let podem ser reatribuídas. Porém, uma variável declarada com let só pode ser usada no mesmo escopo em que está definida. No caso da declaração const, significa que a variável sempre terá uma referência ao mesmo objeto ou valor primitivo, porque essa referência não pode ser alterada. A referência em si é imutável, mas o valor mantido pela variável não se torna imutável.