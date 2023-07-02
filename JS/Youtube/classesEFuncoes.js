class livro {
    constructor(nome,editora,paginas){
        this.nome = nome
        this.editora= editora
        this.paginas= paginas
        }
        //vou criar metodos para fazer algo:: não preciso nomear como funções
        anunciarTitulo(){
            console.log(`O nome do livro é ${this.nome}`)
        }
        descreverTitulo(){
            console.log(`O nome do titulo ${this.nome} e a editora ${this.editora} , numeros de páginas ${this.paginas}`)
        }
}

const nodeJS = new livro ('Primeiros Passos com JS', 'Casa do código', 195)
console.log(nodeJS)

nodeJS.descreverTitulo()

//classes e function : são quase as mesmas coisa. Pois typeof class : é uma function
//Diferença: Classes não são são hoisted

//palavra reservada: extends .. ele herda propriedade de outra class
//super: é outra palavra reservada, que me diz qual é a unica propriedade que eu quero pegar.
//reparar que eu não vou ter parametros na herança

class livroColecao extends livro{
    constructor(nome,nomeColecao){
        super(nome)
        this.nomeColecao = nomeColecao
    }
    descreverColecao(){
        console.log(`Coleção que faz parte é : ${this.nomeColecao}`)
    }
}
const logicaDeProgramcao = new livroColecao('Orientação a objeto', 'Alura mais')
logicaDeProgramcao.descreverColecao()