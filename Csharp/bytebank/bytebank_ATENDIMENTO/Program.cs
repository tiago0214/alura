using bytebank.Modelos.Conta;
using bytebank_ATENDIMENTO.bytebank.Util;

Console.WriteLine("Boas Vindas ao ByteBank, Atendimento.");
//nova forma de declarar Array.

Array amostra = Array.CreateInstance(typeof(double), 5);
amostra.SetValue(5.9, 0);
amostra.SetValue(1.8, 1);
amostra.SetValue(7.1, 2);
amostra.SetValue(10, 3);
amostra.SetValue(6.9, 4);

void TestarMediana(Array array)
{
    Console.Clear();
    if ((array == null) || (array.Length == 0))
    {
        Console.WriteLine("Array para calculo da mediana esta vazio ou nulo.");
    }

    double[] arrayOrdenado = (double[])amostra.Clone();
    Array.Sort(arrayOrdenado);

    int tamanho = arrayOrdenado.Length;
    int meio = tamanho / 2;

    double mediana = (tamanho % 2 != 0) ? arrayOrdenado[meio] : arrayOrdenado[meio - 1];

    Console.WriteLine(mediana);

}
//TestarMediana(amostra);

void TestarArrayDeContasCorrentes()
{
    ContaCorrente[] contas = new ContaCorrente[]
    {
        new ContaCorrente(874),
        new ContaCorrente(874),
        new ContaCorrente(874),
    };

    foreach (ContaCorrente conta in contas)
    {
        Console.WriteLine(conta.Conta);
    }
}
TestarArrayDeContasCorrentes();


