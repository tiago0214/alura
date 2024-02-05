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
}