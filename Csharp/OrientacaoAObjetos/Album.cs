
class Album
{
    public Album(string nome)
    {
        Nome = nome;
    }
    public string Nome {  get; }   
    private List<Musica> musicas = new List<Musica>();

    //relacionamento entre duas classes, o nome é composição.
    //No C#, podemos criar um relacionamento entre classes utilizando a composição, que é uma forma de relacionamento em que uma classe possui uma instância de outra classe como um de seus membros. Isso permite que a classe tenha acesso aos membros e comportamentos da classe relacionada.
    //isso foi o que eu fiz ai em cima. Criei um relacionamento entre duas classes, instanciando a outra aqui.
    public int DuracaoTotal => musicas.Sum(musicas => musicas.Duracao);

    public void Adicionar(Musica musica)
    {
        musicas.Add(musica);
    }
    public void MostrarMusicas()
    {
        Console.WriteLine($"Musicas do álbum, {Nome}: \n");
        musicas.ForEach( pessoa => Console.WriteLine(pessoa.Nome));

        Console.WriteLine($"Para ouvir esse album você precisa de {DuracaoTotal}");
   
    }

}