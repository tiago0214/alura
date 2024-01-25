class Episodio
{   
    public Episodio(string titulo, int duracao,int ordem)
    {
        Titulo = titulo;
        Duracacao = duracao;
        Ordem = ordem;
    }
    public int Duracacao { get; }
    public int Ordem { get; }

    private List<string> convidados = new List<string>();
    public string Resumo => $"{Ordem}.\nTitulo: {Titulo}\nDuração: {Duracacao}\nCom a participação especial de : {String.Join(", ",convidados)}";
    public string Titulo { get; }



    public void AdicionarConvidado(string convidado)
    {
        convidados.Add(convidado);
    }
}