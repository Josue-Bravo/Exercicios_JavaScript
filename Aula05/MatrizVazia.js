const leia = require("readline-sync")

/* // Defininco a matriz
let matriz = new Array(2)

// Adicionar as linhas da matriz (colunas)
for(let indice = 0; indice < matriz.length; indice ++){
    matriz[indice] = Array(3)
}

// Entrada de dados na matriz via teclado
for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        matriz[linha][coluna] = leia.questionInt(`Matriz[${linha}][${coluna}] = `)
    }
} */


// Cria uma matriz, apenas inserindo o tamanho das linhas e colunas no length.
let matriz = Array.from({ length: 2 }, () =>
    Array.from({ length: 3 },
    () => leia.questionInt("Digite um numero: ")));

// Exibir os dados
console.table(matriz)