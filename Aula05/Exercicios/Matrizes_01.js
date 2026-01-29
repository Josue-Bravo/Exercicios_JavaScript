"use strict"
const leia = require("readline-sync")

let matriz = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 },
    () => leia.questionInt("Digite um numero: ")));


let somaPrincipal = (matriz[0][0] + matriz[1][1] + matriz[2][2])
let somaSecunadaria = (matriz[0][2] + matriz[1][1] + matriz[2][0])


console.log(`Elementos da diaognal principal: ${matriz[0][0]},${matriz[1][1]},${matriz[2][2]}`)
console.log(`Elementos da diaognal secundária: ${matriz[0][2]},${matriz[1][1]},${matriz[2][0]}`)
console.log(`Soma dos Elementos da Diagonal Principal: ${somaPrincipal}`)
console.log(`Soma dos Elementos da Diagonal Principal: ${somaSecunadaria}`)




console.table(matriz)
