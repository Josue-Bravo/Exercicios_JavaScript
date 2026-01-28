"use strict"
const leia = require("readline-sync")

console.log("===============================================")
console.log("          CLCULADORA COM SWICH CASE            ")
console.log("===============================================")
console.log("(+) - Soma                                       ")
console.log("(-) - Subtração                                  ")
console.log("(*) - Multiplicação                              ")
console.log("(/) - Divisão                                    ")
console.log("===============================================")
console.log("                                               ")



let numero1 = leia.questionFloat("Digite o primeiro numero: ",{limitMessage: "Digite apenas numeros."})

let numero2 = leia.questionFloat("Digite o segundo numero: ",{limitMessage: "Digite apenas numeros."})

let operacao = leia.keyIn("Digite o numero da operacao: ",{limitMessage: "Opcao invalida."})

switch(operacao){
    case "+":
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`)
    break;
    case "-":
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`)
    break;
    case "*":
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`)
    break;
    case "/":
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`)
    break;
    default:
        console.log("Operação Inválida!")
}