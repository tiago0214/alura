using System.Linq;
using ScreenSound_04.Modelos;

namespace ScreenSound_04.Filtros;
internal class LinqFilter
{
    public static void FiltrarTodosOsGenerosMusicas(List<Musica> musicas)
    {
        var todosOsGenerosMusicas = musicas.Select(gender => gender.Genero).Distinct().ToList();

        foreach (var item in todosOsGenerosMusicas)
        {
            Console.WriteLine(item);
        }
    }
    
    public static void FiltrarMusicasDeUmArtista(List<Musica> musicas,string nomeDoArtista) 
    {
        List<Musica> musicasDoArtista = musicas.Where(musica => musica.Artista!.Equals(nomeDoArtista)).ToList();

        foreach(var musica in musicasDoArtista)
        {
            Console.WriteLine(musica.Nome);
        }
    }

    public static void FiltrarMusicasPorAno(List<Musica> musicas, int ano)
    {
        var musicasPorAno = musicas.Where(musica => musica.Ano == ano).Select(a => a.Nome).ToList();

        foreach(var musica in musicasPorAno)
        {
            Console.WriteLine(musica);
        }
    }
}