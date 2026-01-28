"use strict"
const leia = require("readline-sync")

let nome = leia.question("Digite o nome do doador: ")
let idade = leia.questionInt("Digite a idade do doador: ")
let primeiraVez = leia.keyInYNStrict("Primeira doacao de sangue? : ")
let apto = false


if (idade > 17 && idade < 70){
    if (idade >= 60 && idade <= 69){
        if (primeiraVez == false){
            apto = true
        }
    }else {apto = true}
}

if (apto == true){
    console.log(`${nome} está ápto para doar sangue!`)
} else {
    console.log(`${nome} não está ápto para doar sangue!`)
}
