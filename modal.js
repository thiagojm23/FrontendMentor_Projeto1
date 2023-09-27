const verificar = new Verificacao();
const botao = document.querySelector(".conteudo__principal button");

botao.addEventListener("click", () => {
  const modal = document.querySelector(".modal");
  console.log("foi1");
  if (verificar.verificaEmail()) {
    modal.style.display = "flex";
    console.log("foi2");
  } else {
    console.log("thigas esta funcionando");
  }
});
