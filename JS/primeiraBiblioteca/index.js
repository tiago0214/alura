import chalk from 'chalk';
// o nome identificador que eu coloco , em azul... age como se fosse uma variavel.
//lembar que para que eu possa usar esse sintaxe, eu preciso alterar o arquivo package.json
//se eu for importar uma biblioteca, eu escrevo o 'nome' dela. Agora se eu for importar uma função, eu informo o local do arquivo.


//Um arquivo .js é entendido como um módulo independente e para trabalhar com esses módulos com o Node.js usamos as palavras-chave export e import.


//É isso mesmo! Para ter acesso a algum recurso definido em outro módulo .js, utilizamos export para disponibilizar este recurso, invocando-o no arquivo em que desejamos usá-lo com import.
console.log(chalk.blue('Hello world!'));

console.log('olá mundo');
console.log(chalk.blue.bgWhite.bold('Alura'));

//posso importar dessa maneira
import libChalk from 'chalk';

console.log(libChalk.blue.bgWhite.bold('Alura'));

//encadear métodos para colorir texto, cor de fundo e texto em negrito
console.log(chalk.blue.bgWhite.bold('Alura'));
//receber múltiplos argumentos
console.log(chalk.blue('curso', 'de', 'Node.js'));
//métodos aninhados
console.log(chalk.red('vermelho', chalk.underline.bgBlue('azul')));
// uso de template strings e placeholders
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);