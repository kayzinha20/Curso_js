const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value) 
    const nota2 = Number(frm.inNota2.value)

    const media = (nota1+nota2) / 2

    resp1.innerText = `Média: ${media.toFixed(2)}`

    if (media >= 7){
        resp2.innerText = `Parabens ${nome}! Você foi Aprovado(a)!`
        resp2.style.color = `blue`
    } 
    else if (media >= 5){
        resp2.innerText = `Tente mais uma vez ${nome}! Você ficou de Recuperação`
        resp2.style.color = `green`

    }
    else{
        resp2.innerText = `Deu ruim ${nome}! Você foi Reprovado(a)!`
        resp2.style.color = `red`
    }
    e.preventDefault()
 })