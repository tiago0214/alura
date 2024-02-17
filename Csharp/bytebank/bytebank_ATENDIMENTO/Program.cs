using System.ComponentModel;
using bytebank.Modelos.Conta;
using bytebank_ATENDIMENTO.bytebank.Util;

Console.Clear();
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
    ListaDeContasCorrentes contas = new ListaDeContasCorrentes();
    contas.Adicionar(new ContaCorrente(874));
    contas.Adicionar(new ContaCorrente(133));
    contas.Adicionar(new ContaCorrente(874));
    contas.Adicionar(new ContaCorrente(874));
    contas.Adicionar(new ContaCorrente(874));
    contas.Adicionar(new ContaCorrente(874));
    ContaCorrente contaJose = new ContaCorrente(123);
    //contaJose.Titular.Cpf = "123331234";
    contas.Adicionar(contaJose);
    contas.ExibirContas();

    Console.WriteLine("==============");
    contas.RemoverIndiceDoMeuArray(contaJose);
    contas.ExibirContas();

}
TestarArrayDeContasCorrentes();


