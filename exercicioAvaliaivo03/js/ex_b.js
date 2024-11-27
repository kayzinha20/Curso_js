const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    const valor = Number(frm.inValor.value)
    const cliente = Number(frm.inCliente.value)

    const calculo = valor / cliente 

    resp1.innerText = `Valor por cliente R$: ${calculo.toFixed(2)}`

    e.preventDefault()
})