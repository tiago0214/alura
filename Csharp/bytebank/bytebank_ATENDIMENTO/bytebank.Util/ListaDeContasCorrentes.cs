using bytebank.Modelos.Conta;

namespace bytebank_ATENDIMENTO.bytebank.Util;

public class ListaDeContasCorrentes
{
    public ContaCorrente[] _itens = null;
    private int _proximaPosicao;

    public ListaDeContasCorrentes(int valorInicial = 5)
    {
        _itens = new ContaCorrente[valorInicial];
    }

    public void Adicionar(ContaCorrente item)
    {
        Console.WriteLine($"Adicionando item na posição {_proximaPosicao}");
        VerificarOTamanhoDoMeuArray(_proximaPosicao + 1);
        _itens[_proximaPosicao] = item;
        _proximaPosicao++;
    }

    public void VerificarOTamanhoDoMeuArray(int tamanhoNecessario)
    {
        if (_itens.Length >= tamanhoNecessario)
        {
            return;
        }
        Console.WriteLine("Aumentando a capacidade do meu array.");

        ContaCorrente[] novoArray = new ContaCorrente[tamanhoNecessario];

        for (int i = 0; i < _itens.Length; i++)
        {
            novoArray[i] = _itens[i];
        }
        _itens = novoArray;
    }

    public void RemoverIndiceDoMeuArray(ContaCorrente conta)
    {
        int indice = 0;
        for (int i = 0; i < _proximaPosicao; i++)
        {
            ContaCorrente contaAtual = _itens[i];
            if (contaAtual == conta)
            {
                indice = i;
                break;
            }
        }

        for (int i = indice; i < _proximaPosicao - 1; i++)
        {
            _itens[i] = _itens[i + 1];
        }
        _proximaPosicao--;
        _itens[_proximaPosicao] = null;

    }

    public void ExibirContas()
    {
        for (int i = 0; i < _itens.Length; i++)
        {
            if (_itens[i] != null)
                Console.WriteLine($"O numero de agencia : {_itens[i].Numero_agencia}");
        }
    }
}
