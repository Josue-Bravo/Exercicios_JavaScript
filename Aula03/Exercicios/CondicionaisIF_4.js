"use strict"
const leia = require("readline-sync")

let vertebrado = leia.keyIn("Vertebrado? [s/n]: ")
let classeBiologica
let habitoAlimentar

if (vertebrado === "s") {
    classeBiologica = leia.question("Escreva a Classe Biologica: ")

    if (classeBiologica === "Ave") {
        habitoAlimentar = leia.question("Escreva o Habito Alimentar: ")

        if (habitoAlimentar === "Carnivoro") {
            console.log("O animal é: Águia")
        } else if (habitoAlimentar === "Onivoro") {
            console.log("O animal é: Pomba")
        } else {
            console.log("Opção Inválida")
        }
    } else if (classeBiologica === "Mamifero") {
        habitoAlimentar = leia.question("Escreva o Habito Alimentar: ")

        if (habitoAlimentar === "Onivoro") {
            console.log("O animal é: Homem")
        } else if (habitoAlimentar === "Herbivoro") {
            console.log("O animal é: Vaca")
        } else {
            console.log("Opção Inválida")
        }
    } else {
        console.log("Opção Inválida")
    }
} else if (vertebrado === "n") {
    classeBiologica = leia.question("Escreva a Classe Biologica: ")

    if (classeBiologica === "Inseto") {
        habitoAlimentar = leia.question("Escreva o Habito Alimentar: ")

        if (habitoAlimentar === "Hematofago") {
            console.log("O animal é: Pulga")
        } else if (habitoAlimentar === "Herbivoro") {
            console.log("O animal é: Lagarta")
        } else {
            console.log("Opção Inválida")
        }
    } else if (classeBiologica === "Anelideo") {
        habitoAlimentar = leia.question("Escreva o Habito Alimentar: ")

        if (habitoAlimentar === "Hematofago") {
            console.log("O animal é: Sanguessuga")
        } else if (habitoAlimentar === "Onivoro") {
            console.log("O animal é: Minhoca")
        } else {
            console.log("Opção Inválida")
        }
    } else {
        console.log("Opção Inválida")
    }
} else {
    console.log("Opção Inválida")
}

