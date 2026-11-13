const lampada = document.querySelector("#lampada");
const textoStatus = document.querySelector("#status");
const botao = document.querySelector("#botao");

let ligada = false;

botao.addEventListener("click", () => {
  ligada = !ligada;
  lampada.classList.toggle("apagada");

  if (ligada) {
    textoStatus.textContent = "A lâmpada está acesa";
    botao.textContent = "Desligar";
  } else {
    textoStatus.textContent = "A lâmpada está apagada";
    botao.textContent = "Ligar";
  }
});