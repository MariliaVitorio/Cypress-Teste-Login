let peso = 130
let altura = 1.60
let imc = (peso / (altura ** 2))
let classificação = ""
let grau = 0

if (imc < 18.50) {
classificação = "magro"
} else if (imc < 24.99) {
    classificação = "normal"
} else if (imc < 29.99) {
    classificação = "com sobrepeso"
    grau = 1
} else if (imc < 39.99) {
    classificação = "obeso"
    grau = 2
} else {
    classificação = "obeso com gravidade."
    grau = 3
}

console.log("Atualmente o IMC de Marilia e de " + imc)
    console.log("Você é considerado", classificação)

if (grau > 0) {
    console.log("Você está acima do peso recomendado pela OMS. Procure uma nutricionista!")
    
    if (grau==3) {
        console.log("É muito importante que voce procure um médico para avaliar sua saúde.")
    }
}