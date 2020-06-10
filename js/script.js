// Essa função faz a ativação da caixa de texto
function ativaMensagem() {
  document.getElementById("caixaTexto").style.visibility = "visible";
}

// Depois de 5 segundos executa a função acima
setTimeout("ativaMensagem()", 5000);

// Quando for dado um clique na caixa de texto a mensagem some
caixaTexto.onclick = function () {
  document.getElementById("caixaTexto").style.visibility = "hidden";
};