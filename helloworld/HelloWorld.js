const leia = require("readline-sync")

let n1 = leia.questionInt("Digite um numero inicial: ")
let n2 = leia.questionInt("Digite um numero que ira somar: ")

let result = n1 + n2

console.log("\nO valor da soma é: " + result)

