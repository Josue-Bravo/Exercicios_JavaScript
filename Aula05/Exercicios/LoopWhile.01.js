"use strict"
const leia = require("readline-sync")
let idade = 0, totalMenor = 0, totalMaior = 0

console.log("Este programa mostra quantas pessoas tem menos de 21 anos e quantas tem mais de 50.")
console.log("Para sair do programa, digite um número negativo.")

while(idade > 0){
    idade = leia.questionInt("Digite uma idade: ")
    if (idade < 21 && idade > 0){
        totalMenor++
    } else if (idade > 50) {
        totalMaior++
    }
}

console.log(`Total de pessoas menores de 21 anos: ${totalMenor}`)
console.log(`Total de pessoas maiores de 50 anos: ${totalMaior}`)


