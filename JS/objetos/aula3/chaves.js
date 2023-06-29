const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
];

const chaves = Object.keys(cliente) //me retornou um array, como todas as chaves.
console.log(chaves)

if (!chaves.includes('enderecos')){
    console.error('É necessário ter um endereço!')
}