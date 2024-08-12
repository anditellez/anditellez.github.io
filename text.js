 const div = document.querySelector(".text");
const texto = "tellez lopez andy ";
function efectoTextTyping(elemento, texto, i = 0) {
elemento.textContent += texto[i];
if (i >= texto.length - 1) return;
setTimeout(() => efectoTextTyping(elemento, texto, i + 1), 100);
}
efectoTextTyping(div, texto);