const frm = document.querySelector("form")
const resp1 = document.querySelector("h4")
const resp2 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    const numero = Number(frm.inNumero.value)

    const anterior = numero - 1
    const posterior = numero + 1

    resp1.innerText = `Número Anterior: ${anterior}`
    resp2.innerText = `Número Posterior: ${posterior}`

    e.preventDefault()
})