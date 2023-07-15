//busca binaria, ela sempre fica seprando a lista em duas partes, e procura em uma delas.
//esse algoritmo é bem mais performatico, porque ao inves do for, que tem que passar por todos os elementos do meu array, esse algoritmo sempre fica pegando a metade
const listaLivros = require('./array')


function busca (array, de, ate, buscador) {
    console.log('de até: ',de , ate)//esse console.log ...vai me mostrar oque aconteceu
    //se eu mudar esse console.log para o final, ele não imprime 11 10, porque não chega a entrar no bloco de código, esse valores aqui, são os valores que estão entrando na recursão
    let meio = Math.floor((de + ate) / 2)
    let atual = array[meio]
    console.log('meio: ' ,meio)
    
    // if(de > ate){
    //     return -1
    // }
    if(buscador === atual.valor){
        return atual
    }
    if(buscador < atual.valor){
        return busca(array,de, meio -1, buscador ) //fica fazendo a divisao , até a primeira condição ser verdadeira
        //lembrar que sempre estou diminuindo um numero ou aumentando, a cada chamada
        //vai dar erro, se tiver um elemento menor, por causa de ficar diminuindo 1, toda vez.. mas com o primeira if com retorno de -1,, ele para o erro
        //ou eu colocar um elemento que não tem no meu array, vai dar o mesmo erro de stack over flow
    }
    if(buscador > atual.valor){
        return busca(array,meio + 1 , ate ,buscador)//fica fazendo a divisao , até a primeira condição ser verdadeira
    }
}

console.log(busca(listaLivros, 0, listaLivros.length -1, 1))

//tomar cuidado com o erro de stackoverflow aqui, a função ficar se chamando varias vezes de forma infinita. Para corrigir isso, eu preciso colocar que a condição de inicio nunca pode superar a condição de final.
//acontece erro, se eu passar um parametro que não existe: por stack over flow.
//a recursão: fica chamando o tempo inteiro, tenho que colocar uma condição de parada.

//se eu colocar o retorno de -1 ele para o erro de stack over flow, é o costume do JS retornar, quando nas suas funções de sort, não encontra nada.
//então a recursão, ela faz um array ou outro objeto, ficar com apenas um elemento.