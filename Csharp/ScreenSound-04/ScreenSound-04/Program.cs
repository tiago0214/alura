using ScreenSound_04.Filtros;
using ScreenSound_04.Modelos;
using System.Text.Json;

try
{
    using (HttpClient client = new HttpClient())
    {
        string resposta = await client.GetStringAsync("https://guilhermeonrails.github.io/api-csharp-songs/songs.json");

        //vou criar uma lista baseada no objeto ai de cima em JSON.
        //reparar que eu não estou instanciando o TIPO . JsonSerializer.Estou utlizando direto. porque é um tipo estático
        List<Musica> musicas = JsonSerializer.Deserialize<List<Musica>>(resposta)!;

        //LinqFilter.FiltrarTodosOsGenerosMusicas(musicas);
        LinqOrder.ExibirListaDeArtistasOrdenados(musicas);
    }
}
catch (Exception ex)
{
    Console.WriteLine(ex.Message);
}