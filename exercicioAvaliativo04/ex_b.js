const prompt = require("prompt-sync")()
const Valor = Number(prompt('Valor por 15min de Uso R$:'))
const Tempo = Number(prompt('Valor:'))

intervalo = Math.round(Tempo/15)
resultado =  intervalo * Valor

console.log(`Valor a pagar R$ ${resultado.toFixed(2)}`)