"use strict"
const leia = require("readline-sync")

let numeroA = leia.questionInt("Digite o numero A: ",{limitMessage: "Por favor, digite apenas numeros."})
let numeroB = leia.questionInt("Digite o numero B: ",{limitMessage: "Por favor, digite apenas numeros."})
let numeroC = leia.questionInt("Digite o numero C: ",{limitMessage: "Por favor, digite apenas numeros."})

let soma = numeroA + numeroB

if (soma > numeroC){
    console.log(`${numeroA} + ${numeroB} = ${soma} > ${numeroC}`)
    console.log("A Soma de A + B é Maior que C")
}else if (soma < numeroC){
    console.log(`${numeroA} + ${numeroB} = ${soma} < ${numeroC}`)
    console.log("A Soma de A + B é Menor que C")
} else {
    console.log(`${numeroA} + ${numeroB} = ${soma} = ${numeroC}`)
    console.log("A Soma de A + B é Igual a C")
}