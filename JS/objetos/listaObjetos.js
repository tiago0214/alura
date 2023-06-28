const cliente = {
    nome:'tiago',
    idade:28,
    email:'tiagagj@gmail.com',
    telefone:['212389128398','123188585811'],
    enderecos:[{
        rua:'Lourival',
        numero: 1337,
        complemento:'ap 934',
        apartamento:true
    },
    {
        rua:90,
        numero:11,
        complemento:'ap 01',   
        apartamento:false 
    }]
}
// cliente.enderecos.push({
//     rua:90,
//     numero:11,
//     complemento:'ap 01',   
//     apartamento:false 
// })
const rua = cliente.enderecos.filter((end)=>{ //filter aqui: não me retorna um objeto endereço, mas sim uma lista(array), com uma entrada do objeto endereço
    return end.rua===90;
})

console.log(rua)