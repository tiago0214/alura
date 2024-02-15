using bytebank.Modelos.Conta;

namespace bytebank_ATENDIMENTO.bytebank.Util;

public class ListaDeContasCorrentes
{
    public ContaCorrente[] _itens = null;

    public ListaDeContasCorrentes(int valorInicial)
    {
        _itens = new ContaCorrente[valorInicial];
    }
}
