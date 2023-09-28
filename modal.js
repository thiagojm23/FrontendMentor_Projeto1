const verificar = new Verificacao();
const botao = document.querySelector(".conteudo__principal button");
const modal = document.querySelector(".modal");

botao.addEventListener("click", () => {
  console.log("foi1");
  if (verificar.verificaEmail()) {
    modal.style.display = "flex";
  } else {
    const mensagem = document.querySelector(".verifica-email");
    console.log("Isso aqui ta indo");
    mensagem.classList.add("ativado");
    window.timeoutId = setTimeout(() => {
      mensagem.classList.remove("ativado");
    }, 3000);
    console.log(window.timeoutId);
  }
  const emailUsuario = document.querySelectorAll(".email input")[0].value;
  const mudarEmail = document.querySelector(
    ".modal__conteudo__principal strong"
  );
  mudarEmail.textContent = emailUsuario;
});

const botaoModal = document.querySelector(".modal__conteudo__principal button");
botaoModal.addEventListener("click", () => {
  modal.style.display = "none";
});
