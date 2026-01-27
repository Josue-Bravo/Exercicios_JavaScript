"use strict"
const leia = require("readline-sync")
let nota = []
let media, n, continuar = false
let nome = leia.question("Escreva o nome do participante: ")


for (n = 0; n < 4; n++) {
    continuar = false
    while (continuar == false)
    {
        nota[n] = leia.questionFloat(`Digite a nota ${n + 1}: `)
        if (nota[n] < 0 || nota[n] > 10) {
            console.log("Por favor, Digite apenas numeros entre 0 e 10!")
        } else {
            continuar = true
        }
    }
}
media = (nota[0] + nota[1] + nota[2] + nota[3]) / 4

console.log(`A média de ${nome} é: ${media.toFixed(1)}`)
