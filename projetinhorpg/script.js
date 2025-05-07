const botao = document.getElementById("modo-toggle");

botao.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    botao.textContent = "🌙 Modo Escuro";
  } else {
    botao.textContent = "☀️ Modo Claro";
  }
});
