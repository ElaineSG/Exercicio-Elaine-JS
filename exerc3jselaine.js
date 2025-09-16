function entrar() {
  let titulo = document.getElementById("titulo");
  titulo.textContent = "Você entrou na página com sucesso!";
  titulo.style.color = "blue";
  let botao = document.querySelector("button");
  botao.style.backgroundColor = "green"; // Altere para a cor desejada
  botao.style.color = "white"; // Opcional: muda a cor do texto do botão
}

<button onclick="entrar()">Entrar</button>