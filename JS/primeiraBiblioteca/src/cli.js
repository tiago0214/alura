import pegarArquivo from "./index.js";
import chalk from "chalk";
import fs from 'fs';

//process: se eu der um console.log(process.argv) ele vai me retornar os comandos que eu passar para o terminal
const caminho = process.argv;

async function processaTexto (argumento){
    const caminho = argumento[2];

    if(fs.lstatSync(caminho).isFile()){
        const resultado = await pegarArquivo(caminho)
        console.log(resultado)
    }else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho)
            arquivos.forEach(async (caminhoDoArquivo) => {
                const lista = await pegarArquivo(`${caminho}/${caminhoDoArquivo}`)
                console.log(lista)
            });

    }
}
processaTexto(caminho)


