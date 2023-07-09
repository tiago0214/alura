const livros = require("./listaLivros")
const menorValor = require("./doPapelParaCogigo")

for (let atual = 0; atual < livros.length ; atual++){
    let menor = menorValor(livros,atual)

    let livroAtual = livros[atual] //não guardamos uma posição do array, mas sim uma informação
    let menor_valor = livros[menor] //não guardamos uma posição do array, mas sim uma informação
    
    livros[menor] = livroAtual //pesquisar sobre essa sintaxe, porque eu uso o valor antes,
    livros[atual] = menor_valor //talvez seja , porque, se eu usar o valor de atribuição normal. Eu somente estou aferindo o valor de determinando espaço
                                //espaço na memoria
}
//talvez, o valor da minha memoria, esta sendo atribuido para outro
console.log(livros)
//eu fiz a troca dos valores, lá em cima. direto , sem salvar em variaveis. Não deu erro, porém, ele definiu todos como JS e Ruby. Provavelmente, seja porque não tem espaço na memoria para salvar os valores. Por isso ele fica sempre trocando eles de lugar.

//mais moderno

    livros.forEach((_, indice) => {
        let menor = menorValor(livros, indice)
       
        let livroAtual = livros[indice];
        let livroMenorPreco = livros[menor];
       
        livros[indice] = livroMenorPreco
        livros[menor] = livroAtual 
       })
       
       console.log(livros)
