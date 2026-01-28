"use strict"
const leia = require("readline-sync")

console.log("=======================================")
console.log("=           -Lanches do Zé-           =")
console.log("=======================================")
console.log("===          --Cardápio--           ===")
console.log("1- Cachorro Quente | 2- X-Salada       ")
console.log("3- X-Bacon         | 4- Bauru          ")
console.log("5- Refrigerante    | 6- Suco de Laranja")


let resposta = leia.questionInt("Digita o codigo do produto: ")
let quantidade = leia.questionInt("Digite a quantidade: ")
let valorTotal
switch (resposta) {
    case 1:
        valorTotal = quantidade * 10
        console.log(`Produto: Cachorro Quente x${quantidade}\nValor total: `,
            new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(valorTotal))
    break
    case 2:
        valorTotal = quantidade * 15
        console.log(`Produto: X-Salada x${quantidade}\nValor total: `,
            new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(valorTotal))
        break
    case 3:
        valorTotal = quantidade * 18
        console.log(`Produto: X-Bacon x${quantidade}\nValor total: `,
            new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(valorTotal))
        break
    case 4:
        valorTotal = quantidade * 12
        console.log(`Produto: Bauru x${quantidade}\nValor total: `,
            new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(valorTotal))
        break
    case 5:
        valorTotal = quantidade * 8
        console.log(`Produto: Refrigerante x${quantidade}\nValor total: `,
            new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(valorTotal))
        break
    case 6:
        valorTotal = quantidade * 13
        console.log(`Produto: Suco de Laranja x${quantidade}\nValor total: `,
            new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(valorTotal))
        break
    default: console.log("Opção Inválida")
}