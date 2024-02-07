using System.Text.Json;

namespace ScreenSound_04.Modelos;

internal class MusicasPreferidas
{
    public MusicasPreferidas(string nome)
    {
        Nome = nome;
        ListaDeMusicasPreferidas = new List<Musica>();
    }
    public string? Nome { get; set; }

    public List<Musica>? ListaDeMusicasPreferidas { get; }

    public void AdcionarMusicasFavoritas(Musica musica)
    {
        ListaDeMusicasPreferidas.Add(musica);
    }

    public void ExibirMusicasFavoritas()
    {
        Console.WriteLine($"Musicas favoritas de {Nome}");
        foreach (var musicas in ListaDeMusicasPreferidas)
        {
            Console.WriteLine(musicas.Nome);
        }
        Console.WriteLine();
    }

    public void GerarArquivoJson()
    {
        var json = JsonSerializer.Serialize(new
        {
            nome = Nome,
            musicas = ListaDeMusicasPreferidas,
            feito = "Tiago",

        }); ;

        string nomeDoArquivo = $"musicas-favoritas-{Nome}.json";

        File.WriteAllText(nomeDoArquivo, json);

        Console.WriteLine("O arquivo Json foi criado com sucesso!");
    }

    public void GerarArquivoComMusicasFavoritasTxt()
    {
        string nomeDoArquivo = $"musicas-favoritas-{Nome}.txt";

        using (StreamWriter arquivo = new StreamWriter(nomeDoArquivo))
        {
            arquivo.WriteLine($"Músicas favoritas do {Nome}");
            foreach(Musica musica in ListaDeMusicasPreferidas)
            {
                arquivo.WriteLine("- " + musica.Nome);
            }

        }
        Console.WriteLine("Arquivo gerado com sucesso");
    }
}
