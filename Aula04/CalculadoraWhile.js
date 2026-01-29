"use strict"
const leia = require("readline-sync")
let continua = "S"

while (continua === "S") {
    console.log("===============================================")
    console.log("          CLCULADORA COM SWICH CASE            ")
    console.log("===============================================")
    console.log("(+) - Soma                                     ")
    console.log("(-) - Subtração                                ")
    console.log("(*) - Multiplicação                            ")
    console.log("(/) - Divisão                                  ")
    console.log("===============================================")
    console.log("                                               ")



    let numero1 = leia.questionFloat("Digite o primeiro numero: ", { limitMessage: "Digite apenas numeros." })

    let numero2 = leia.questionFloat("Digite o segundo numero: ", { limitMessage: "Digite apenas numeros." })

    let operacao = leia.keyIn("Digite o simbolo operacao: ", { limitMessage: "Opcao invalida." })

    switch (operacao) {
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
    
    continua = leia.keyIn("Deseja continuar? (S/N): ").toUpperCase()
}