const cidade = 'belo horizonte'
const cidade2 = 'Belo Horizonte'

console.log(cidade.toLocaleLowerCase() === cidade2.toLocaleLowerCase())
// o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.

// Percebeu que length não leva parênteses no final da palavra? Há uma diferença entre métodos e propriedades que não vamos abordar durante este curso, mas vamos deixar aqui a dica caso tenha curiosidade! ;)

// O null é um tipo especial, pois pode ser traduzido como “ausência de valor” e pode ser atribuído como valor de uma variável:
// undefined. Este tipo também representa “ausência de valor”
// É aqui que entra o tipo undefined. Este tipo também representa “ausência de valor”, porém de uma outra forma: usualmente, enquanto null é um valor atribuído a uma variável que existe e foi iniciada, undefined se refere ao valor de uma variável que não foi inicializada (ou seja, não foi atribuído nenhum valor a ela).
// undefined também é o valor retornado por uma função que não tem cláusula return
// No cotidiano é comum considerar undefined como uma ausência de valor “inesperada” (causada por um bug ou erro no código) e null como um tipo de dado que também significa ausência de valor, mas não de maneira inesperada. Por exemplo, um campo em uma tabela de um banco de dados que esteja sem dados ou uma informação solicitada que não seja obrigatória e não tenha sido preenchida pelo usuário pode ter valor null.