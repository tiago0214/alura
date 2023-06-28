//this: faz referência a qual objeto que estamos trabalhando no momento.
const cliente = {
    nome:'tiago',
    idade:28,
    email:'tiagagj@gmail.com',
    telefone:['212389128398','123188585811'],
    saldo : 200,
    efetuarPagamento: function(valor){
        if(valor > this.saldo){
            console.log('Saldo insuficiente!')
        }else{
            this.saldo -= valor
            console.log(`Compra efetuada ${this.saldo}`)
        }
    }
}
cliente.efetuarPagamento(2090)
