function troca(lista, analise) {
    let itemAnalise = lista[analise];
    let itemAnterior = lista[analise - 1];
   
    lista[analise] = itemAnterior
    lista[analise - 1] = itemAnalise
}

//Veja que a função troca() está fazendo alterações direto na lista que está sendo passada por parâmetro; assim, essa função não precisa retornar nenhum valor.