"use strict"
const leia = require("readline-sync")
let continuar = true, respostasNaPesquisa = 0, somaIdades = 0

let mulheresFront = 0, homensMobile = 0, naoBinariosFullStack = 0
let backend = 0

while (continuar == true) {
    let idade = leia.questionInt("Digite a idade do Colaborador: ")

    console.log("==================")
    console.log("1 - Mulher Cis    ")
    console.log("2 - Homem Cis     ")
    console.log("3 - Não Binário   ")
    console.log("4 - Mulher Trans  ")
    console.log("5 - Homem Trans   ")
    console.log("6 - Outros        ")

    let genero = leia.questionInt("Digite a Identidade de Genero: ")

    console.log("==================")
    console.log("1 - Backend    ")
    console.log("2 - Frontend     ")
    console.log("3 - Mobile   ")
    console.log("4 - FullStack  ")

    let cargo = leia.questionInt("Pessoa Desenvolvedora: ")

    if ((genero > 0 && genero < 7) && (cargo > 0 && cargo < 5)) {


        respostasNaPesquisa++

        somaIdades += idade

        if (cargo === 1) {
            backend++
        }

        if ((genero === 1 || genero === 4) && (cargo === 2)) {
            mulheresFront++
        }

        if ((genero === 2 || genero === 5) && (cargo === 3) && (idade > 40)) {
            homensMobile++
        }

        if ((genero === 3) && (cargo === 4) && (idade < 30)) {
            naoBinariosFullStack++
        }

        let confirmar = leia.keyIn("Deseja continuar com um novo colaborador?(s/n): ")
        if (confirmar.toLowerCase() !== "s") {
            continuar = false
        }
    } else {
        console.clear()
        console.log("Opções não reconhecidas.")
    }

}

let mediaIdade = (somaIdades / respostasNaPesquisa).toFixed(2)

console.log(`Número de pessoas desenvolvedoras Backend: ${backend}`)
console.log(`Número de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulheresFront}`)
console.log(`Número de Homens Cies e Trans desenvolvedores Mobile maiores que 40 anos: ${homensMobile}`)
console.log(`Número de Não Binários desenvolvedores FullStack menores de 30 anos: ${naoBinariosFullStack}`)
console.log(`Número de pessoas que responderam a pesquisa: ${respostasNaPesquisa}`)
console.log(`Média de idade das pessoas que responderam à pesquisa: ${mediaIdade}`)
