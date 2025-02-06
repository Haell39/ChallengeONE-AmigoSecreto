const names = [];
const errorMessage = document.createElement("div");
errorMessage.style.color = "red";
errorMessage.style.marginTop = "10px";
errorMessage.style.display = "none"; // Inicialmente escondido
document.querySelector(".container").appendChild(errorMessage);

document.getElementById("addButton").addEventListener("click", function () {
  const nameInput = document.getElementById("nameInput");
  const name = nameInput.value.trim();
  if (name) {
    names.push(name);
    nameInput.value = "";
    errorMessage.style.display = "none"; // Esconder mensagem de erro
    updateNameList();
  } else {
    errorMessage.textContent = "Por favor, digite um nome antes de adicionar.";
    errorMessage.style.display = "block"; // Mostrar mensagem de erro
  }
});

document.getElementById("drawButton").addEventListener("click", function () {
  if (names.length > 0) {
    const randomIndex = Math.floor(Math.random() * names.length);
    const result = names[randomIndex];
    document.getElementById(
      "result"
    ).textContent = `O amigo secreto é: ${result}`;
  } else {
    document.getElementById("result").textContent =
      "Adicione nomes antes de sortear!";
  }
});

function updateNameList() {
  const nameList = document.getElementById("nameList");
  nameList.innerHTML = "";
  names.forEach((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    nameList.appendChild(li);
  });
}
