class Podcast
{
    //construtor com NOME HOST
    //lista com os episodios
    public Podcast(string nome,int host)
    {
        Nome = nome;
        Host = host;
    }
    public int Host;
    public string Nome;
    private List<Episodio> Episodios= new();


    //métodos 
    //adicionar episodios
    public void AdicionarEpisodios(Episodio episodio)
    {
        Episodios.Add(episodio);
    }


    //exibir detalhes(mostrar o nome do podcast e seu host, na primeira linha.)
    //exibir a lista de episodios ordenados
    //exibir um total de episodios.
    public void ExibirDetalhes()
    {
        Console.WriteLine($"O nome do podcast: {Nome}, com o host de numero: {Host}");

        foreach (var episodio in Episodios.OrderBy(e => e.Ordem)) { 
            Console.WriteLine(episodio.Resumo);
        }

        Console.WriteLine("Numero total de episodios: "+Episodios.Count());
    }
}