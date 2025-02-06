let amigos = []; //Array

function adicionarAmigo() {
  const nome = document.getElementById("amigo").value.trim();

  if (nome === "") {
    exibirMensagemErro("Por favor, digite um nome válido!");
    return;
  }

  amigos.push(nome);

  exibirListaAmigos();

  document.getElementById("amigo").value = "";

  esconderMensagemErro();
}

// Função para exibir a lista de amigos
function exibirListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Função 
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista de amigos está vazia! Adicione alguns nomes primeiro.");
    return;
  }

  // Sorteio 
  const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

  // Exibir o resultado do sorteio
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<p>O amigo sorteado é: <strong>${sorteado}</strong></p>`;
}

// << Função para exibir a mensagem de erro
function exibirMensagemErro(mensagem) {
  const erro = document.getElementById("mensagemErro");
  erro.textContent = mensagem;
  erro.style.display = "block"; // Mostrar mensagem de erro
}

// << Função para esconder a mensagem de erro
function esconderMensagemErro() {
  const erro = document.getElementById("mensagemErro");
  erro.style.display = "none"; // Esconder mensagem de erro
}
