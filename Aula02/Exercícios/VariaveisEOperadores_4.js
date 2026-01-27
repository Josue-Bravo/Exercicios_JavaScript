"use strict"
const leia = require("readline-sync")
let numeros = []
let n, produto1, produto2, diferenca

for (n = 0; n < 4; n++) 
{
    numeros[n] = leia.questionFloat(`Digite o numero ${n + 1}: `)
}

produto1 = numeros[0] * numeros[1]
produto2 = numeros[2] * numeros[3]

diferenca = produto1 - produto2

console.clear()
console.log(`
    1º - O produto entre ${numeros[0]} e ${numeros[1]} é: ${produto1}\n
    2º - O produto entre ${numeros[2]} e ${numeros[3]} é: ${produto2}\n
    A Diferença entre o primeiro e o segundo produto é: ${diferenca}`)