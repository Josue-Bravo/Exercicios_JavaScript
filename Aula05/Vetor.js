const leia = require("readline-sync")

let numeros = [1, 25, 5, 45, 85]

let cores = Array(5)

for (let indice = 0; indice < numeros.length; indice++){
    console.log(`numeros[${indice}] = ${numeros[indice]}`)
}

console.log(`O tamanho do vetor numeros é: ${numeros.length}`)

console.table(numeros)

for (let indice = 0; indice < cores.length; indice++){
    cores[indice] = leia.question("DIgite o nome de uma cor: ")
}

console.table(cores)

console.table(numeros.sort((a, b) => a - b))

console.log("Qual é a posição do elemento 5 no vetor numeros? ", numeros.indexOf(5))