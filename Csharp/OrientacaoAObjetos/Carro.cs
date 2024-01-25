class Carro
{
    private int ano;
    public string Fabricante { get; set; }
    public string Modelo { get; set; }
    public int Ano
    {
        get => ano;
        set
        {
            if (value < 1960 || value > 2023)
            {
                Console.WriteLine("Valor inválido, insira um ano entre 1960 e 2023");
            }
            else
            {
                ano = value;
            }
        }
    }
    public int QuantidadePortas { get; set; }
    public string DescricaoDetalhada => $"Modelo do carro: {this.Fabricante} {this.Modelo} {this.Ano}";
}