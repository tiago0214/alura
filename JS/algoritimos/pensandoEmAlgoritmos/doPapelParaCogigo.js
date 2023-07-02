const precos = [25, 15, 30, 50, 45, 20]

let maisBarato = 0;

for (let atual = 0; atual < precos.length ; atual++){
    if(precos[atual] < precos[maisBarato]){
        maisBarato= precos[atual]
    }
}
//ele vai passar por todo o meu array primeiro, para depois ir para o console.
console.log(maisBarato)