// ativa o box de mensagem
function showIt2() {
  document.getElementById("msg1").style.visibility = "visible";
}
setTimeout("showIt2()", 5000);

// desativa o box de mensagem
function hiddenIt() {
  document.getElementById("msg1").style.visibility = "hidden";
}
setTimeout("hiddenIt()", 5000);

// ativa novamente o box de mensagem
function showIt3() {
  document.getElementById("msg1").style.visibility = "visible";
}
setTimeout("showIt3()", 5000);

// Clique para esconder o box de mensagem
msg1.onclick = function () {
  document.getElementById('msg1').style.visibility = "hidden";
};