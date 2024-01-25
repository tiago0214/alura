class Banda
{
    private List<Album> albuns = new List<Album>();
    public string Nome{ get; set; }

    public void AdicionarBanda (Album album)
    {
        albuns.Add(album);
    }
    public void ExibirDiscografia()
    {
        albuns.ForEach((album) => { 
            Console.WriteLine(album.Nome);
            Console.WriteLine(album.DuracaoTotal);
        });
           
    }
}