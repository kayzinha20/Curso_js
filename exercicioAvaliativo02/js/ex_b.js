const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const Valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)
   
    intervalo = Math.round(tempo/15)
    resultado =  intervalo * Valor
    
    resp1.innerText = `Valor a pagar R$:${resultado.toFixed(2)}`
    
    e.preventDefault()
})