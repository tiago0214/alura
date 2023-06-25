const nota = [10,6.5,8,7.5] // tem que passar uma function anônima.// funções callback, são funções que são passadas, como parametro de outra.
//função callback,é a função que foi passada como parametro de outra função.
//segundo parametro: é o indice
//obrigatorio ter a função callback no forEach.
nota.forEach(function(param,indice){
    console.log(param,indice)
})

// o forEach() é um método do objeto Array.