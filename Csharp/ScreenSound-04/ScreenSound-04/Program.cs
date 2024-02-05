using ScreenSound_04.Modelos;
using System.Text.Json;

try
{
    using (HttpClient client = new HttpClient())
    {
        string resposta = await client.GetStringAsync("https://guilhermeonrails.github.io/api-csharp-songs/songs.json");

        //vou criar uma lista baseada no objeto ai de cima em JSON.
        //reparar que eu não estou instanciando o TIPO . JsonSerializer.Estou utlizando direto. porque é um tipo estático
        var musicas = JsonSerializer.Deserialize<List<Musica>>(resposta)!;

        Console.WriteLine(musicas[1998].Artista);
    }
}
catch (Exception ex)
{
    Console.WriteLine(ex.Message);
}