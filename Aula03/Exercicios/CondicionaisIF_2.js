"use strict"
const leia = require("readline-sync")

let numero = leia.questionInt("Digite o primeiro numero: ",{limitMessage: "Por favor, digite apenas numeros."})
let imparPar, sinal

numero % 2 == 0 ? imparPar = "Par" : imparPar = "Impar"
numero < 0 ? sinal = "Negativo" : sinal = "Positivo"

console.log(`O Número ${numero} é ${imparPar} e ${sinal}!!`)