import pegarArquivo from "./index.js";
import chalk from "chalk";
import fs from 'fs';

//process: se eu der um console.log(process.argv) ele vai me retornar os comandos que eu passar para o terminal
const caminho = process.argv;

function imprimir (resultado) {
    console.log(resultado)
}

async function processaTexto (argumento){
    const caminho = argumento[2];

    if(fs.lstatSync(caminho).isFile()){
        const resultado = await pegarArquivo(caminho)
        imprimir(resultado)
    }else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho)
            arquivos.forEach(async (caminhoDoArquivo) => {
                const lista = await pegarArquivo(`${caminho}/${caminhoDoArquivo}`)
                imprimir(lista)
            });

    }
}
processaTexto(caminho)

//prestar atenção, que quando eu passo o diretorio na verdade eu não fiz nada demais, além de montar manualmente o caminho do arquivo que a minha função pegaArquivo espera receber como parametro . Uma string com o caminho do arquivo


