//Nem todo interpretador ou linguagem de programação lida da mesma forma com os processos que devem ser executados por um programa. O NodeJS trabalha com o paradigma de programação orientada a eventos (event driven programming), e o gerenciamento dos processos ocorre através do que chamamos de loop de eventos.
//Esta pilha tem uma quantidade limitada de processos que podem ser empilhados (o que depende de muitos fatores, como memória disponível, arquitetura, etc); caso o interpretador não consiga limpar a pilha, ou seja, executar e finalizar os processos/funções que estão empilhados, ao atingir o limite o programa cai no chamado erro de estouro de pilha, também chamado de stack overflow


//sobre função recursiva
//Continuamos a prática de funções recursivas, vendo o funcionamento do “caso base”, que pode ser considerada como a condição de parada de uma função recursiva.