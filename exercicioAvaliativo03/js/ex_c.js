const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const preco = Number(frm.inPreco.value)
    const porcetagem = (10/100) * preco
    const vista = preco - porcetagem
    const parcelado = preco / 3

    resp1.innerText = `Á vista R$: ${vista.toFixed(2)}`
    resp2.innerText = `Parcelado em 3x R$: ${parcelado.toFixed(2)}`

    e.preventDefault()
})