using ScreenSound.Modelos;

namespace ScreenSound.Menus;
internal class MenuAvaliarAlbum : Menu
{
    public override void Executar(Dictionary<string, Banda> bandasRegistradas)
    {
        base.Executar(bandasRegistradas);

        Console.Clear();
        ExibirTituloDaOpcao("Avaliar Álbum");
        Console.Write("Digite o nome da banda: ");
        string nomeDaBanda = Console.ReadLine()!;
        if (bandasRegistradas.ContainsKey(nomeDaBanda))
        {
            Banda banda = bandasRegistradas[nomeDaBanda];
            Console.Write("Digite o nome do Álbum que deseja avaliar: ");
            string tituloAlbum = Console.ReadLine()!;

            if(banda.Albuns.Any(a => a.Nome.Equals(tituloAlbum)))
            {
                Console.Write($"Qual a nota que o àlbum {tituloAlbum} merece: ");
                Avaliacao nota = Avaliacao.Parse(Console.ReadLine()!);
                Album album = ???;

                banda.AdicionarNota(nota);

                Console.WriteLine($"\nA nota {nota.Nota} foi registrada com sucesso para a banda {tituloAlbum}");
                Thread.Sleep(2000);
                Console.ReadKey();
                Console.Clear();
            }
        }
        else
        {
            Console.WriteLine($"\nA banda {nomeDaBanda} não foi encontrada!");
            Console.WriteLine("Digite uma tecla para voltar ao menu principal");
            Console.ReadKey();
            Console.Clear();
        }
    }
}
