// Após 5 segundos passados do usuário na página será exibida a caixa de texto
setTimeout(() => {
  document.getElementById("caixaTexto").style.visibility = 'visible'
}, 5000)

// Quando for dado um clique na caixa de texto a mensagem some
caixaTexto.onclick = () => {
  document.getElementById("caixaTexto").style.visibility = "hidden"
}