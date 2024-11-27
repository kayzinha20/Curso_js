const prompt = require("prompt-sync")()
const produto = prompt('Produto:')
const preco = Number(prompt('Preço R$:'))

const calculo1 = (50/100) * preco
const calculo2 = preco * 3
const calculo3 = calculo2 - calculo1

console.log( `${produto} Promoção - Leve 3 por R$:${calculo3}`)
console.log(`O terceiro produto custa apenas R$:${calculo1}`)