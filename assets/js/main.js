const form = document.querySelector("#formulario");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const inputPeso = evento.target.querySelector("#peso");
  const inputAltura = evento.target.querySelector("#altura");

  const pesoNumber = Number(inputPeso.value);
  const alturaNumber = Number(inputAltura.value);

  if (pesoNumber <= 0 || pesoNumber <= -1) {
    setResultado("Valor de peso menor que 0");
    return;
  }
  if (!pesoNumber) {
    setResultado("Peso inválido", false);
    return;
  }
  if (alturaNumber <= 0 || alturaNumber <= -1) {
    setResultado("Valor de peso menor que 0");
    return;
  }
  if (!alturaNumber) {
    setResultado("Altura inválida", false);
    return;
  }

  const resultado = calcularIMC(pesoNumber, alturaNumber);

  setResultado("IMC é = " + resultado.toFixed(2).replace("." , ","));
});



function criarP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(mensagem, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  const p = criarP();
  p.innerHTML = mensagem;
  resultado.appendChild(p);
}

function calcularIMC(peso, altura) {
  return peso / altura ** altura;
}
