//é importante frisar o comportamento do JavaScript de "executar uma coisa por vez". Com isso em mente o assíncrono no JavaScript vai separar seu código em duas partes: coisas que rodam agora, coisas que vão rodar depois de algo acontecer... 
//ter em mente, que eu tenho requisições, que são resolvidas por promisses.
//outra coisa, é ter em mente, que a cada .then eu estou com uma especie de outra promessa, pois, Eu estou falando que eu posso responder algo ou não.
//(Promises têm um método chamado .then(), que recebe uma função callback e retorna um "objeto-promessa". Não é um retorno dos dados, é a promessa do retorno destes dados.)
//quando eu utilizo varios .then eu estou encadeando varios  OBJETOS PROMESSAS. que serão resolvidos. quando a promisse for resolvida. e lembrar que a cada .then eu estou criando varias instâncias da minha promessa.

//A cadeia de funções fetch().then().then() não significa que há múltiplas funções callbacks sendo usadas com o mesmo objeto de resposta, e sim que cada instância de .then() retorna, por sua vez, um new Promise()


//Mas o que acontece quando, por exemplo, nosso código precisa receber alguns dados de uma API? Ao mesmo tempo que é preciso aguardar a requisição e resposta da API, não podemos bloquear o funcionamento de todo o nosso programa; seria a mesma coisa que enviar uma mensagem pelo WhatsApp e ficar esperando a resposta sem fazer mais nada nesse meio tempo.

//Existem algumas formas de se trabalhar com processamento assíncrono (ou seja, Promises) em JavaScript: utilizando o método .then(), as palavras-chave async e await ou o objeto Promise e seus métodos. Aqui, vamos focar no uso de .then(), async/await e no uso do método Promise.all.