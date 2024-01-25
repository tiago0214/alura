//criação de um FOREACH com funções lambda
Episodio ep1 = new Episodio("Hora certa", 60, 2);
ep1.AdicionarConvidado("Matheus cebolinha");
ep1.AdicionarConvidado("Junior Cascão");

Episodio ep2 = new Episodio("Hora do volei", 90, 1);
ep2.AdicionarConvidado("Pedro Enterrada");
ep2.AdicionarConvidado("Lucas Cortavento");

Podcast podBola = new Podcast("Pode bolinha", 7768);
podBola.AdicionarEpisodios(ep1);
podBola.AdicionarEpisodios(ep2);

podBola.ExibirDetalhes();

































Console.WriteLine("====================================================================");
List<int> numeros = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
List<int> numerosPares = numeros.FindAll((numero) => numero % 2 == 0);
//numerosPares.ForEach((numero) => Console.WriteLine(numero));
Banda tiaguinhos = new Banda("Tiaguinhos");

Musica musica1 = new Musica(tiaguinhos, "chuchuzinho")
{
    Duracao = 290,
    Disponivel = false,
};


Musica musica2 = new Musica(tiaguinhos, "amor da minha vida")
{   
    Duracao = 390,
    Disponivel = true,
};
//aqui, são hipoteses de inicializadores opcionais.

Album albumTiago = new Album("ALbuzinho do tiago");
albumTiago.Adicionar(musica1);
albumTiago.Adicionar(musica2);
tiaguinhos.AdicionarBanda(albumTiago);

//reparar que aqui eu estou colocando o nome mesmo. e antes é somente o nome da minha variavel.
Console.WriteLine(musica1.DescricaoResumida);
Console.WriteLine(musica2.DescricaoResumida);
albumTiago.MostrarMusicas();
tiaguinhos.ExibirDiscografia();




//relacionamento entre duas classes, o nome é composição.
//No C#, podemos criar um relacionamento entre classes utilizando a composição, que é uma forma de relacionamento em que uma classe possui uma instância de outra classe como um de seus membros. Isso permite que a classe tenha acesso aos membros e comportamentos da classe relacionada.



Carro c1 = new Carro();
c1.Ano = 2020;//vai dar erro se eu tentar colocar um valor menor de 1960 , por causa das definições dentro da minha classe.




//principais vantagens :As lambdas podem ser usadas em várias situações, como filtrar, ordenar, mapear ou reduzir coleções de dados. 
//As lambdas têm acesso às variáveis do escopo em que são definidas.

//No C#, um atributo é uma variável declarada dentro de uma classe que armazena dados associados a uma instância específica desta classe e uma propriedade é uma abstração que fornece um meio de acessar e modificar os valores dos atributos de uma classe, encapsulando a lógica de leitura e escrita. Veja o exemplo de código abaixo que contém uma classe com um atributo e uma propriedade:
class Filme
{
    public string Titulo;

    public int Orcamento { get; set; }
}
//Embora haja uma relação entre atributos (fields) e propriedades (properties) em C#, eles são conceitos distintos e oferecem diferentes recursos e funcionalidades para o desenvolvimento de classes e objetos.


//se atentar que, se dentro de uma classe, eu colocar uma propriedade somente como leitura, eu consigo passar um valor para ela, pelo construtor, ou eu já inicio ela com um valor.

