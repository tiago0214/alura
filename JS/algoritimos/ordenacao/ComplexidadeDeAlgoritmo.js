//sempre ter em mente, a complexidade de um algoritimo.
//pois, igual o selection sort, eu tenho um algoritmo que percorre o meu array, uma vez. ou seja 'N', e dentro dele, eu tenho outro for, que esta abstraido em uma função, que percorre o array outra vez , em busca do menor número. e dentro do for, tenho um 'if', ou seja, o meu for pode entrar no if toda vez. ou seja, então que é N.2.. então, o meu algoritmo pode ficar bem complexo, sendo N². 
//olhar com mais calma, algoritmo de crescimento quadratico.

//analise assintotica... indenpendente do algoritmo, ter que analisar o grau de eficiência.

//quase a mesma coisa do insertionSort com o selectionSort... porque ambos percorrendo os elementos da lista 2 vezes.
//intersionSort, passa por toda a lista e volta analisando todos para tras.
//mas, eles tem um pouco de diferença

//algoritmo constante: ele vai ser sempre uma operação, independete do tamanho da minha lista. Sempre vai ser a mesma coisa.
//algoritmo com crescimento: linear ou quadratico: ele vai realizar varios tipos de operações , dependendo do tamanho da entrada de valores.

//algoritmo quadratico, é sempre quando eu preciso fazer duas buscas e lembrar que eu tenho as minhas condicionais dentro de cada elemento que percorre a minha lista,,, ou seja, tudo em dobro. Varias ações que o meu algoritmo precisa fazer.

//algoritmo de crescimento cubico... eu colocaria mais um for, para percorrer os elementos. ao inves de 2 for, teria 3.


//complexidade de algoritmo de crescimento tanto linear quanto quadratica, ou cubica... é que dependendo do valor de entrada, os recursos computacionais seram maiores
//acredito, que quando eu executo duas operações por determinado valor, é um algoritmo quadratico, se eu realizar somente uma ação por valor, quer dizer que é constante exemplo:
function incrementa(valor) {
    return ++valor;
}//sempre vai me retornar somente uma ação. Indepedente do valor.


//A análise assintótica pressupõe uma análise de eficiência de algoritmos independente da quantidade de recursos computacionais disponíveis - por exemplo, processamento e memória disponível do computador).

//Alternativa correta! A análise assintótica serve para comparar e decidir se determinado algoritmo é o mais eficiente para resolver um problema; fatores como velocidade de processamento não são considerados nessa análise pois o que conta é o crescimento da complexidade em si (considerando o aumento na quantidade de dados processados) e não a quantidade de recursos disponíveis em si.