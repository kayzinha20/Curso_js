const prompt = require("prompt-sync")()
const medicamento = prompt('Medicamento:')
const preco = Number(prompt('Valor:'))
const promocao = Math.floor(preco*2)

console.log(`Promoção de ${medicamento}`)
console.log(`Leve 2 por apenas R$ ${promocao.toFixed(2)}`)