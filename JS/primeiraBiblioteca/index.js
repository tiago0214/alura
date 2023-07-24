import fs from 'fs';
import chalk from 'chalk';
// o nome identificador que eu coloco , em azul... age como se fosse uma variavel.
//lembrar que para que eu possa usar esse sintaxe, eu preciso alterar o arquivo package.json
//se eu for importar uma biblioteca, eu escrevo o 'nome' dela. Agora se eu for importar uma função, eu informo o local do arquivo.

//Um arquivo .js é entendido como um módulo independente e para trabalhar com esses módulos com o Node.js usamos as palavras-chave export e import.

function pegarArquivo (caminhoArquivo) {
    const encoding = 'utf-8'
    fs.readFile(caminhoArquivo, encoding, (_ ,texto) =>  {
        console.log(texto)})
}
pegarArquivo('./arquivos/texto.md')
