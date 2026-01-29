"use strict"
const leia = require("readline-sync")

let vetor = [2,5,1,3,4,9,7,8,10,6]
let posicao = 0
let encontrado = false

let numero = leia.questionInt("Digite o numero que voce deseja encontrar: ")
for (let indice = 0; indice < vetor.length; indice++){
    if (vetor[indice] == numero){
        console.log(`O número ${numero} está localizado na posição: ${indice}`)
        encontrado = true
        break
    }
}

if (encontrado == false){
    console.log(`O número ${numero} não foi encontrado!`)
}