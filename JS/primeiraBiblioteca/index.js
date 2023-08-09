import fs from 'fs';
import chalk from 'chalk';
// o nome identificador que eu coloco , em azul... age como se fosse uma variavel.
//lembrar que para que eu possa usar esse sintaxe, eu preciso alterar o arquivo package.json
//se eu for importar uma biblioteca, eu escrevo o 'nome' dela. Agora se eu for importar uma função, eu informo o local do arquivo.

//Um arquivo .js é entendido como um módulo independente e para trabalhar com esses módulos com o Node.js usamos as palavras-chave export e import.

function tratarErro (erro) {
    console.log(erro)
    throw new Error(chalk.red(erro.code, ': Arquivo não encontrado')) 
}
//o throw: faz com que eu lance no terminal, a instancia do objeto Error , com o parametro que eu recebi da minha função pegaArquivo.
//todo objeto de erro , tem uma propriedade .code nele. Para achar o código do erro.

const textoTeste = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'

function extrairLinks (texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm // g= global (pega o arquivo inteiro) m= multilinha
    //const extrair = texto.match(regex)//se eu utilizar esse metodo de string. Ele vai me retornar o elemento completo em cada indice do meu array.
    const extrair = regex.exec(texto)// isso é um metodo do próprio regex [exec()]
    console.log(extrair)
}

extrairLinks(textoTeste)

async function pegarArquivo (caminho) {
    try{
        const encoding = 'utf-8'
        const texto = await fs.promises.readFile(caminho,encoding)
        console.log(chalk.green(texto))
    }
    catch(erro){
        tratarErro(erro)
    }
    finally{
        console.log(chalk.yellow('operação concluída'));
    }
}


// function pegarArquivo (caminhoArquivo) {
//     const encoding = 'utf-8'

//     fs.promises.readFile(caminhoArquivo, encoding) //eu consigo usar o promisse aqui. Porque a biblioteca FS, esta preparada para trabalhar com código assincrono.
//         //o JS nada faz, depois que ele lê o arquivo.
//         //reparar que na minha outra função, o terceiro parametro. executava direto oque eu queria.
//         //aqui é o retorno do valor de readFile. (Espero que seja um texto.)
//         .then((texto) => console.log(texto))//precisa do then, para ele executar oque eu quero.
//         //o then é que é assincrono. porque o JS já leu o arquivo.
//         //eu não consigo pegar o valor de readFile de forma sincrona. Preciso utilizar um metodo do JS para resolver o valor dessa promessa.(then)
//         .catch(tratarErro) //posso chamar a função direto de tratarErro. De baixo dos panos, ele passo o parametro. 
//         //porque como o catch, recebe como parametro, uma função callback: que é a tratar Erro.
//         //then e catch: são funções.

//         //then readFile catch : São funções encadeadas.
// }

// function pegarArquivo (caminhoArquivo) {
//     const encoding = 'utf-8'
//     fs.readFile(caminhoArquivo, encoding, (erro ,texto) =>  {
//         if (erro) {
//             tratarErro(erro)
//         }
//         console.log(chalk.green(texto))})
// }

//pegarArquivo('JS/primeiraBiblioteca/arquivos/texto.md')