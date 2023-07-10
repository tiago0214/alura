//recursão : parece um pouco com laço de repetição(Ele fica chamando uma parte do código até que ela seja resolvida)... Só que com algumas diferenças
//no exemplo anterior: onde tinha as minhas duas variaveis, com chamada recursiva.
//ele fica executando uma primeiro, até que ela seja resolvida, então depois ele para de executar a parte1 e passa para a parte2.
//o resultado de todas as vezes que ele chama a função recursiva, é armazenado dentro da minha variavel
//lembrar que ele fica executando, até que o if fique falso.(Adendo, o length é o numero de elementos)
//outra coisa, toda chamada da minha função recursiva, ele cria uma nova instancia, e guarda a anterior, ele não sobrescreve ela.
//na aula passada, eu quebrei o array, até que ele ficasse em varios arrays de 1 elemento, para que eu comparasse com a lista 2
//isso que eu fiz no Merge Sort, foi a mesma coisa que comparar elemento por elemento em duas lista , como eu fiz na aula passada, só que lá, eu já tinha duas listas e aqui eu criei as listas dinamicamente,mas foi a mesma coisa: acredito que as duas são merge sort
//unica diferença entre essas duas formas de organizar, foi que na primeira eu já tinha as listas organizadas, agora, nessa aqui, eu quebrei todo o meu array, até que ele ficasse em um array de 1 elemento... Só que tenho que lembrar que a função recursiva, quebra todos os valores mas vai guardando dos valores anteriores, por isso quando eu dei um console.log na parte1, ficou cheia de instancias, até fica um array com elemento cada.
//lembra que são niveis de aninhamento
//recursão é performatica, frente ao laço


//uma coisa sobre laço de repetição, toda vez que eu crio uma variavel dentro do laço de repetição : ela é recriada.

