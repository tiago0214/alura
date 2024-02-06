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
    public static void ExibirArtistasPorGeneroMusical(List<Musica> musicas, string genero)
    {
        var artistasPorGeneroMusical = musicas.Where(musica => musica.Genero!.Contains(genero)).Select(musica => musica.Artista).Distinct().ToList();

        foreach (var artista in artistasPorGeneroMusical)
        {
            Console.WriteLine(artista);
        }
    }
}
