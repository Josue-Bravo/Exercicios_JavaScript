"use strict"
// Atividade 1 da lista.
// Tentei fazer com uns detalhes a mais :)

const leia = require("readline-sync")
let continuar = false
let salario, resposta, abono, novoSalario

while (continuar == false) {
    salario = leia.questionFloat("Digite o seu salario: ")
    console.log(
        `Seu salário: ${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(salario)}`
    )

    resposta = leia.question("Confirmar? [s/n]: ");

    if (resposta == "s") {
        continuar = true
    } else {
        console.clear()
        console.log("Confirmação negada.\n")
    }
}
continuar = false, resposta = undefined
while (continuar == false) {
    abono = leia.questionFloat("Digite o Abono: ")
    console.log(
        `Seu abono: ${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(abono)}`
    )

    resposta = leia.question("Confirmar? [s/n]: ");

    if (resposta == "s") {
        continuar = true
    } else {
        console.clear()
        console.log("Confirmação negada.\n")
    }
}

novoSalario = salario + abono

console.clear()
console.log(
    `Calculando...\nSeu novo salário é: ${new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(novoSalario)}`
)