const email = document.querySelector(".email input");
email.addEventListener("input", () => {
  if (email) {
    const isso = email.value;
    console.log(isso.length);
    if (isso.includes("@")) {
      const usuario = isso.substring(0, isso.indexOf("@"));
      console.log(usuario.length);
      const endereco = isso.substring(isso.indexOf("@") + 1, isso.length);
      console.log(endereco);
      if (isso.indexOf(" ") == -1) {
      }
    } else {
      email.classList.add("email__incorreto");
      console.log("banana");
    }
  }
});
/*string = "meuNomeÉThiago";
console.log(string.substring(1, 4));*/
