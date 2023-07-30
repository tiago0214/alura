//Definindo uma função como async, podemos utilizar a palavra-chave await antes de qualquer expressão que retorne uma promessa. Dessa forma, a execução da função externa (a função async) será pausada até que a Promise seja resolvida.
//Só é possível usar await em funções declaradas com a palavra-chave async, então vamos adicioná-la:

async function getUser(userId) {
    let response = await fetch(`https://api.com/api/user/${userId}`);
    let userData = await response.json();
    return userData.name; // nas linhas de return não é necessário usar await
}
