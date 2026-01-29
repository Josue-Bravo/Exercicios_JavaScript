"use strict"
const leia = require("readline-sync")

console.log("\nBem vindo ao verificador de múltiplos por intervalo!")
console.log("Irei te dizer quais numeros dentro do intervalo dado são múltiplos de 3 e 5")
console.log("\nEscreva dois numeros, onde o primeiro deve se MENOR que o segundo.")
let num1 = leia.questionInt("Digite o priemiro numero: ",{limitMessage: "Isso nao e um numero valido."})
let num2 = leia.questionInt("Digite o segundo numero: ",{limitMessage: "Isso nao e um numero valido."})

if (num1 < num2){
    for (let intervalo = num1; intervalo <= num2; intervalo++){
        if (intervalo % 3 === 0 && intervalo % 5 === 0){
            console.log(`O numero ${intervalo} é múltiplo de 3 e 5!`)
        }
    }

} else {
    console.log("Intervalo inválido.")
}

