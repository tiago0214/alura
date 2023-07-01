const pessoa = {
    nome: 'Luma',
    profissao :'engenheira',
}
//posso adicionar propriedades e valores dinâmicamente.
pessoa.telefone = '64 77889988'

console.log(pessoa)

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }
delete objPersonagem.aliado
//delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined

//O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada operação. Porém, é importante notar que ele não retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto:

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true