class Verificacao {
  verificaEmail() {
    let resultado = false;
    const emailInformacao = document.querySelector(".verifica-email");
    if (email) {
      const isso = email.value;
      console.log(isso.length);
      if (isso.includes("@")) {
        const usuario = isso.substring(0, isso.indexOf("@"));
        console.log(usuario.length);
        const dominio = isso.substring(isso.indexOf("@") + 1, isso.length);
        console.log(dominio);
        if (
          isso.indexOf(" ") == -1 &&
          dominio.length >= 3 &&
          usuario.indexOf("@") == -1 &&
          dominio.indexOf("@") == -1 &&
          usuario.indexOf(" ") == -1 &&
          dominio.indexOf(" ") == -1 &&
          dominio.indexOf(".") >= 1 &&
          dominio.lastIndexOf(".") < dominio.length - 1
        ) {
          console.log(dominio.length - 1);
          console.log(dominio.lastIndexOf("."));
          email.style.color = "lightseagreen";
          console.log("thigas");
          emailInformacao.style.opacity = 1;
          emailInformacao.innerHTML = "E-mail válido";
          emailInformacao.style.color = "lightseagreen";
          return (resultado = true);
        } else {
          email.style.color = "red";
          console.log("errado");
          emailInformacao.style.opacity = 1;
          emailInformacao.innerHTML = "E-mail inválido";
          emailInformacao.style.color = "red";
          return resultado;
        }
      } else {
        email.style.color = "red";
        console.log("banana");
        emailInformacao.innerHTML = "E-mail inválido";
        console.log(emailInformacao.innerHTML);
        emailInformacao.style.opacity = 1;
        emailInformacao.style.color = "red";
        return resultado;
      }
    }
    return resultado;
  }
}
const email = document.querySelector(".email input");

const verificacao = new Verificacao();

email.addEventListener("input", () => {
  verificacao.verificaEmail();
  console.log(verificacao.verificaEmail());
});
/*string = "meuNomeÉThiago";
console.log(string.substring(1, 4));*/
