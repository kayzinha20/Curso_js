const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)
    
    const calculo1 = (50/100) * preco
    const calculo2 = preco * 3
    const calculo3 = calculo2 - calculo1
    
    resp1.innerText = `${produto} Promoção - Leve 3 por R$:${calculo3}`
    resp2.innerText = `O terceiro produto custa apenas R$:${calculo1}`
    
    e.preventDefault()
})