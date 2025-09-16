 // 1. Criar array de cores
    const cores = ["vermelho", "verde", "azul"];

    // 2. Pegar a <ul> do HTML
    const lista = document.getElementById("lista");

    // 3. Percorrer cada cor e criar <li>
    cores.forEach(cor => {
      const item = document.createElement("li"); // cria um <li>
      item.textContent = cor; // coloca o nome da cor dentro do <li>
      lista.appendChild(item); // adiciona o <li> dentro da <ul>

      // desafio extra: mudar cor de fundo ao clicar
      item.addEventListener("click", () => {
        document.body.style.backgroundColor = cor;
      });
    });