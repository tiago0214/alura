//testar pilhas de chamadas

function saudacao (){
    console.log('saudacao')
    function oi (){
        console.log('Oi')
        function profunda(){
            console.trace('Mais profunda')
        }
        profunda()
    }
    oi()
}

saudacao()