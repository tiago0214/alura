using System.Collections;
using System.ComponentModel;
using bytebank.Modelos.Conta;
using bytebank_ATENDIMENTO.bytebank.Util;

#region Exemplos Array em Csharp
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
    contas.Adicionar(new ContaCorrente(874));
    contas.Adicionar(new ContaCorrente(874));
    contas.Adicionar(new ContaCorrente(874));
    ContaCorrente contaJose = new ContaCorrente(123);
    //contaJose.Titular.Cpf = "123331234";
    contas.Adicionar(contaJose);
    //contas.ExibirContas();

    Console.WriteLine("==============");
    for (int i = 0; i < contas.Tamanho; i++)
    {
        ContaCorrente conta = contas[i];
        Console.WriteLine($"Indice[{i}] = Conta: {conta.Conta}\nConta: {conta.Nome_Agencia}");
    }


}
//TestarArrayDeContasCorrentes();
#endregion



List<ContaCorrente> _listaDeContas = new List<ContaCorrente>
{
    new ContaCorrente(95){Saldo = 100},
    new ContaCorrente(95){Saldo = 200},
    new ContaCorrente(95){Saldo = 95},
};


AtendimentoCliente();
void AtendimentoCliente()
{
    char opcao = '0';

    while(opcao != '6')
    {
        Console.Clear();

        Console.WriteLine("===========================");
        Console.WriteLine("===      Atendimento    ===");
        Console.WriteLine("===1 - Cadastrar Conta  ===");
        Console.WriteLine("===2 - Listar Conta     ===");
        Console.WriteLine("===3 - Remover Conta    ===");
        Console.WriteLine("===4 - Ordenar Conta    ===");
        Console.WriteLine("===5 - Pesquisar conta  ===");
        Console.WriteLine("===6 - Sair do Sistema  ===");
        Console.WriteLine("===========================");

        Console.WriteLine("\n\n");
        Console.Write("Digite a opção desejada: ");

        opcao = Console.ReadLine()[0];
        switch(opcao) 
        {
            case '1': CadastrarConta();
                break;
            case '2':
                ListarConta();
                break;
            default: Console.WriteLine("Opção não implementada!");
                break;
        }

    }

}

void ListarConta()
{
    Console.Clear();
    Console.WriteLine("===============================");
    Console.WriteLine("===     LISTA DE CONTAS     ===");
    Console.WriteLine("===============================");
    Console.WriteLine("\n");

    if(_listaDeContas.Count <=0)
    {
        Console.WriteLine("Não há contas cadastradas!");
        Console.ReadKey();
        return;
    }

    foreach(ContaCorrente item in _listaDeContas) 
    {
        Console.WriteLine("===  Dados da Conta  ===");
        Console.WriteLine("Número da Conta : " + item.Conta);
        Console.WriteLine("Saldo da Conta : " + item.Saldo);
        Console.WriteLine("Titular da Conta: " + item.Titular.Nome);
        Console.WriteLine("CPF do Titular  : " + item.Titular.Cpf);
        Console.WriteLine("Profissão do Titular: " + item.Titular.Profissao);
        Console.WriteLine(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        Console.ReadKey();
    }
}

void CadastrarConta()
{
    Console.Clear();
    Console.WriteLine("===========================");
    Console.WriteLine("=== Cadastro de Contas  ===");    
    Console.WriteLine("===========================");
    Console.WriteLine("\n");
    Console.WriteLine("===  informe os dados   ===");
    Console.WriteLine("\n");

    Console.Write("Número da agência: ");
    int numeroDaAgencia = int.Parse(Console.ReadLine());

    ContaCorrente conta = new ContaCorrente(numeroDaAgencia);

    Console.Write("Informe o saldo inicial: ");
    conta.Saldo = double.Parse(Console.ReadLine());

    Console.Write("Informe o nome do titular: ");
    conta.Titular.Nome = Console.ReadLine();

    Console.Write("Informe o CPF do titular: ");
    conta.Titular.Cpf = Console.ReadLine();

    Console.Write("Infome Profissão do Titular: ");
    conta.Titular.Profissao = Console.ReadLine();

    _listaDeContas.Add(conta);
    Console.WriteLine("... Conta cadastrada com sucesso! ...");
    Console.ReadKey();
}
