"use strict"
const leia = require("readline-sync")

let media = leia.questionFloat("Digite a media do aluno: ", {limitMessage: "Escreva apenas numeros."})

if (media >= 7 ){
    console.log("Aluno Aprovado!")
}else if (media >= 5){
    console.log("Aluno em Recuperção")
}else{
    console.log("Aluno Reprovado!")
}