
using System.Text.Json;

using (HttpClient client = new HttpClient())
{
    string resposta = await client.GetStringAsync("https://guilhermeonrails.github.io/api-csharp-songs/songs.json");

    //vou criar uma lista baseada no objeto ai de cima em JSON.
    //reparar que eu não estou instanciando o TIPO . JsonSerializer.
    var musicas = JsonSerializer.Deserialize<List<Musica>>(resposta);
}

