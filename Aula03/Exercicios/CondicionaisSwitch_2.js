"use strict"
const leia = require("readline-sync")

console.log("=======================================")
console.log("=         Reajuste Salarial           =")
console.log("=======================================")
console.log("===      Percentual de Reajuste     ===")
console.log("1- Gerente           | +10%            ")
console.log("2- Vedendor          | +7%            ")
console.log("3- Supervisor        | +9%            ")
console.log("4- Motorista         | +6%            ")
console.log("5- Estoquista        | +5%            ")
console.log("6- Técnico de TI     | +8%            ")

let nomeColab = leia.question("Digite o nome do Colaborador: ")
let cargo = leia.questionInt("Digite o codigo do cargo: ")
let salario = leia.questionFloat("Digite o Salario do Colaborador: ")
let novoSalario

switch(cargo){
    case 1:
        novoSalario = salario + (0.1 * salario)
        console.log(`Nome do Colaborador: ${nomeColab}\nCargo: Gerente\nSalário Reajusatado: `,
            new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(novoSalario))
    break
    case 2:
        novoSalario = salario + (0.07 * salario)
        console.log(`Nome do Colaborador: ${nomeColab}\nCargo: Gerente\nSalário Reajusatado: `,
            new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(novoSalario))
    break
    case 3:
        novoSalario = salario + (0.09 * salario)
        console.log(`Nome do Colaborador: ${nomeColab}\nCargo: Gerente\nSalário Reajusatado: `,
            new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(novoSalario))
    break
    case 4:
        novoSalario = salario + (0.06 * salario)
        console.log(`Nome do Colaborador: ${nomeColab}\nCargo: Gerente\nSalário Reajusatado: `,
            new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(novoSalario))
    break
    case 5:
        novoSalario = salario + (0.05 * salario)
        console.log(`Nome do Colaborador: ${nomeColab}\nCargo: Gerente\nSalário Reajusatado: `,
            new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(novoSalario))
    break
    case 6:
        novoSalario = salario + (0.08 * salario)
        console.log(`Nome do Colaborador: ${nomeColab}\nCargo: Gerente\nSalário Reajusatado: `,
            new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(novoSalario))
    break
    default: console.log("Opção Inválida.")
}