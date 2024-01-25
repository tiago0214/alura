class Banda
{
    public Banda(string nome) 
    { 
        Nome= nome; 
    }  
    private List<Album> albuns = new List<Album>();
   
    public string Nome{ get;  }

    public void AdicionarBanda (Album album)
    {
        albuns.Add(album);
    }
    public void ExibirDiscografia()
    {
        albuns.ForEach((album) => { 
            Console.WriteLine("Álbum: " + album.Nome);
            Console.WriteLine($"({album.DuracaoTotal})");
        });
           
    }
}