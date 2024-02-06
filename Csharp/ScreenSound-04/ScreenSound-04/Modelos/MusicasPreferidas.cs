namespace ScreenSound_04.Modelos;

internal class MusicasPreferidas
{
    public MusicasPreferidas(string nome)
    {
        Nome = nome;
        ListaDeMusicasPreferidas = new List<Musica>();
    }
    public string? Nome { get; set; }

    public List<Musica>? ListaDeMusicasPreferidas { get;}

    public void AdcionarMusicasFavoritas(Musica musica)
    {
        ListaDeMusicasPreferidas.Add(musica);
    }

    public void ExibirMusicasFavoritas()
    {
        Console.WriteLine($"Musicas favoritas de {Nome}");
        foreach(var musicas in ListaDeMusicasPreferidas)
        {
            Console.WriteLine(musicas.Nome);
        }

    }
}
