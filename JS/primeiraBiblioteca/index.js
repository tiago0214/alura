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

function extrairLinks (texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm // g= global (pega o arquivo inteiro) m= multilinha
    const extrair = [...texto.matchAll(regex)]// posso utilizar o spread operator[...] para espalhar dentro do array
    const resultado = extrair.map((captura) => ({[captura[1]] : captura [2]})) //aula 3 capturando links. video 06. explicação, o porque do () e também da criação da chave do objeto
    console.log(resultado)
}

async function pegarArquivo (caminho) {
    try{
        const encoding = 'utf-8'
        const texto = await fs.promises.readFile(caminho,encoding)
        extrairLinks(texto)
    }
    catch(erro){
        tratarErro(erro)
    }
    finally{
        console.log(chalk.yellow('operação concluída'));
    }
}
pegarArquivo('JS/primeiraBiblioteca/arquivos/texto.md')

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