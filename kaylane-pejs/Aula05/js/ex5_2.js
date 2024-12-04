const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const numero = Number(frm.inNumero.value)
    let resposta = `Entre ${numero} e 1: `

    let i = numero

    while(i > 1) {
        resposta = resposta + i + " ,"
        i--
    }
    resposta = resposta + "1."
    resp.innerText = resposta
})