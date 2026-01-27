"use strict"

const leia = require("readline-sync")
let continuar = false, valorHoraExtra = 100
let salario, resposta, adicionalNoturno, horasExtra, resultadoHoraExtra, salarioLiquido, desconto

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
    adicionalNoturno = leia.questionFloat("Digite o valor do Adicional Noturno: ")
    console.log(
        `Adicional Noturno: ${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(adicionalNoturno)}`
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
    desconto = leia.questionFloat("Digite o valor do desconto: ")
    console.log(
        `Valor do Desconto: -${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(desconto)}`
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
    horasExtra = leia.questionFloat("Digite o numero Horas extra: ")
    resultadoHoraExtra = horasExtra * valorHoraExtra
    console.log(
        `Hora Extra: ${new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(resultadoHoraExtra)}`
    )

    resposta = leia.question("Confirmar? [s/n]: ");

    if (resposta == "s") {
        continuar = true
    } else {
        console.clear()
        console.log("Confirmação negada.\n")
    }
}

salarioLiquido = salario + adicionalNoturno + horaExtra - desconto

console.clear()
console.log(
    `Calculando...\nSeu salário líquido é: ${new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(salarioLiquido)}`
)