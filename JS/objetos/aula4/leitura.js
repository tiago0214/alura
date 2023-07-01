//forma de ler um arquivo .json , e transforma-lo em um objeto. Posso transforma-lo em uma string também.

const dados = require("./cliente.json")
//require.. é uma função que permite pegar informações de outro lugar e transforma-lo em um objeto.
console.log(dados.email)
//Quando utilizamos o require() no Node, nesse contexto de acessar um arquivo JSON, já recebemos um objeto literal JavaScript diretamente pronto para ser usado. Ou seja, sem a necessidade de fazer a chamada à JSON.parse(). Utilizamos o método parse quando temos uma string no formato JSON e queremos transformá-la em um objeto.

//Neste curso utilizamos uma função, chamada require(), que é bem presente no Node.js . Esta função nos permitiu passar o caminho de um arquivo terminado em .json para obter o conteúdo de um arquivo do tipo JSON. Em cursos posteriores, iremos ver que essa função também pode ser utilizada para reaproveitar códigos que estão em outros arquivos, também chamados de módulos.


//transformar em string

const clienteEmString = JSON.stringify(dados)
console.log(clienteEmString)
const voltarClienteParaJson = JSON.parse(clienteEmString)
console.log(voltarClienteParaJson)