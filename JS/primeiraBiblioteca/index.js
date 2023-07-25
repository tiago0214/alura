import fs from 'fs';
import chalk from 'chalk';
// o nome identificador que eu coloco , em azul... age como se fosse uma variavel.
//lembrar que para que eu possa usar esse sintaxe, eu preciso alterar o arquivo package.json
//se eu for importar uma biblioteca, eu escrevo o 'nome' dela. Agora se eu for importar uma função, eu informo o local do arquivo.

//Um arquivo .js é entendido como um módulo independente e para trabalhar com esses módulos com o Node.js usamos as palavras-chave export e import.

function tratarErro (erro) {
    throw new Error(erro) 
}
//o throw: faz com que eu lance no terminal, a instancia do objeto Error , com o parametro que eu recebi da minha função pegaArquivo.

function pegarArquivo (caminhoArquivo) {
    const encoding = 'utf-8'
    fs.readFile(caminhoArquivo, encoding, (erro ,texto) =>  {
        if (erro) {
            tratarErro(erro)
        }
        console.log(texto)})
}

pegarArquivo('JS/primeiraBiblioteca/arquivos/texto.md')
