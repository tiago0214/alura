Console.Clear();

Dictionary<string, List<int>> bandasRegistradas = new Dictionary<string, List<int>>();
bandasRegistradas.Add("bandinha 1", new List<int> { 10, 2, 5 });
bandasRegistradas.Add("bandinha 2", new List<int>());

void ExibirMenu()
{
    Console.WriteLine("Bem-vindo ao Screen Sound\n");
    Console.WriteLine("1 - Adicionar uma banda");
    Console.WriteLine("2 - Mostrar todas banda");
    Console.WriteLine("3 - Avaliar uma banda");
    Console.WriteLine("4 - Exibir a média de uma banda");
    Console.WriteLine("-1 - Sair\n");
    Console.Write("Digite uma opção no menu: ");

    int opcao = int.Parse(Console.ReadLine());

    Opcoes(opcao);
}
void Opcoes(int opcao)
{
    switch (opcao)
    {
        case 1: AdicionarBanda(); break;
        case 2: MostrarBandas(); break;
        case 3: AvaliarUmaBanda(); break;
        case 4: ExibirMedia(); break;
        case -1: Console.WriteLine(); break;
        default:
            {
                Console.Clear();
                Console.WriteLine("Opção inválida, retornando ao menu!");
                Thread.Sleep(1500);
                Console.Clear();
                ExibirMenu();
                break;
            }
    }
}
void MostrarAsteriscos(string titulo)
{
    int quantidade = titulo.Length;
    string asteriscos = "".PadLeft(quantidade, '*');

    Console.WriteLine(asteriscos);
    Console.WriteLine(titulo);
    Console.WriteLine(asteriscos + "\n");
}
void AdicionarBanda()
{
    Console.Clear();
    MostrarAsteriscos("Adicionar banda via nossa aplicação");
    string banda = Console.ReadLine();
    bandasRegistradas.Add(banda, new List<int>());
    Thread.Sleep(2000);
    Console.Clear();
    ExibirMenu();

}
void MostrarBandas()
{
    Console.Clear();
    MostrarAsteriscos("Listando todas as bandas");
    foreach (string banda in bandasRegistradas.Keys)
    {
        Console.WriteLine($"Banda : {banda}");
    }
    Console.WriteLine("\nAperte qualquer tecla para voltar ao menu.");
    Console.ReadKey();
    Console.Clear();
    ExibirMenu();
}
void AvaliarUmaBanda()
{
    Console.Clear();
    Console.Write("Qual banda deseja avaliar? ");
    string banda = Console.ReadLine();

    if (bandasRegistradas.ContainsKey(banda))
    {
        Console.Write($"Qual a nota que a banda: {banda}, merece? ");
        int nota = int.Parse(Console.ReadLine());
        bandasRegistradas[banda].Add(nota);
        Console.WriteLine($"\nA nota: {nota}, foi registrada com sucesso");
        Thread.Sleep(4000);
        Console.Clear();
        ExibirMenu();
    }
    else
    {
        Console.WriteLine($"Não foi encontrada a banda: {banda}");
        Console.WriteLine("Digite qualquer tecla para voltar");
        Console.ReadKey();
        Console.Clear();
        ExibirMenu();
    }

}
void ExibirMedia()
{
    Console.Clear();
    Console.WriteLine("Qual banda você deseja exibir a média? ");
    string banda = Console.ReadLine();

    if (bandasRegistradas.ContainsKey(banda))
    {
        List<int> notasDasBandas = bandasRegistradas[banda];
        Console.WriteLine($"A média da banda {banda} é {notasDasBandas.Average()}.");
        Console.ReadKey();
    }
    else
    {
        Console.WriteLine($"Não foi encontrada a banda: {banda}");
        Console.WriteLine("Digite qualquer tecla para voltar");
        Console.ReadKey();
        Console.Clear();
        ExibirMenu();
    }
}
ExibirMenu();
