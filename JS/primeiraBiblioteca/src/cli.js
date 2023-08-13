import pegarArquivo from "./index.js";

//process: se eu der um console.log(process.argv) ele vai me retornar os comandos que eu passar para o terminal
const caminho = process.argv;
pegarArquivo(caminho[2])