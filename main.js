const input = document.querySelector(".email input");
if (input) {
  const isso = input.value;
  console.log(isso);
  if (isso.includes("@")) {
    const usuario = isso.substring(0, isso.indexOf("@"));
  }
}
string = "meuNomeÉThiago";
console.log(string.substring(1, 4));
