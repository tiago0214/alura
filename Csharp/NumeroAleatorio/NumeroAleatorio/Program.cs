Random num = new Random();
int aleatorio = num.Next(1, 101);

Console.Write("Digite um número 1 - 100: ");


do
{
    int chute = int.Parse(Console.ReadLine());
    if (chute == aleatorio)
    {
        Console.WriteLine("Você acertou o número");
        break;
    }
    else if (chute < aleatorio)
    {
        Console.WriteLine("O numero é maior");
        Console.WriteLine("Digite novamente");
    }
    else
    {
        Console.WriteLine("O número é menor.");
        Console.WriteLine("Digite novamente");
    }

} while (true);
