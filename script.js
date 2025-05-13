
function mostrarMensagem() {
  document.getElementById("mensagem").innerHTML = "Você é capaz de muito mais do que imagina, I love you. Continue se esforçando!";
  
  // Esconde o botão
  const botao = document.getElementById("botaoMensagem");
  botao.style.display = "none";

  // Faz o botão reaparecer após 10 segundos 
  setTimeout(() => {
    botao.style.display = "inline-block";
    document.getElementById("mensagem").innerHTML = ""; 
  }, 10000);
}

