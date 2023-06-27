const pessoa ={
    nome:'Tiago',
    cpf : '12345566',
    idade: 28,
    email: 'tiago0214@gmail.com'
}
console.log(`O nome é: ${pessoa["nome"]} e os tres primeiros digitos do CPF é ${pessoa["cpf"].substring(0,3)}`)

const chaves = ['nome','cpf','idade','email']

chaves.forEach((chave)=>{
    console.log(`A chave é ${chave} e seu valor é ${pessoa[chave]}`)
})
console.log(pessoa.nome)