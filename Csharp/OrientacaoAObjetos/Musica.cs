class Musica
{   
    public Musica(Banda artista,string nome) 
    {
        Artista = artista;
        Nome = nome;
    } 
    public string Nome { get;}
    public Banda Artista { get; }
    public int Duracao { get; set; }
    public bool Disponivel { get; set; }
    public string DescricaoResumida
    {
        get => $" A música {Nome} pertence a banda {Artista.Nome}";
    }

}