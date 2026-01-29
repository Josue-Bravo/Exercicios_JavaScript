"use strict"
const leia = require("readline-sync")
let numero = 0
let soma = 0

console.log("Máquina de somas!\n")
console.log("Todos os números digitados serão somados. Digite 0 para sair.")

do {
    numero = leia.questionInt("Digite um numero: ")
    soma += numero
} while (numero != 0)

console.log(`A Soma de todos os numeros é: ${soma}`)