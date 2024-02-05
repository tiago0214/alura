using ScreenSound_04.Modelos;

namespace ScreenSound_04.Filtros;

internal class LinqOrder
{
    public static void ExibirListaDeArtistasOrdenados(List<Musica> musicas)
    {
        var artistasOrdenados = musicas.OrderBy(a => a.Artista).Select(a => a.Artista).Distinct().ToList();

        foreach (var item in artistasOrdenados)
        {
            Console.WriteLine(item);
        }
    }
}
