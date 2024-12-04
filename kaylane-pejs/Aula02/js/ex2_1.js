// cria referênica ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp =  document.querySelector("h3")

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value // obtém o nome digitado no form
    resp.innerText = `olá ${nome}` // exibe a resposta do programa
    const x = 10/2 * Math.sqrt(9) - 4
    alert (x)
    e.preventDefault() // evita envio do form  
}) 