{
  /* <div class="resultados">
        <p id="carne">4.5 kg de carne</p>
        <p id="cerveja">3 litros de cerveja</p>
        <p id="refri">4 litros de refrigerante ou suco</p>
      </div> */
}

var adulto = document.getElementById("adulto");
var crianca = document.getElementById("crianca");
var duracao = document.getElementById("duracao");

function limparcalculo() {
  const caixaresultado = document.getElementById("caixaresultado");
  while (caixaresultado.firstChild) {
    caixaresultado.removeChild(caixaresultado.lastChild);
  }
}

function calcCarne() {
  if (duracao.value <= "5") {
    carne = 400 * adulto.value + 200 * crianca.value;
  } else if (duracao.value >= "6") {
    carne = 650 * adulto.value + 325 * crianca.value;
  }

  return carne;
}

function calcCerveja() {
  if (duracao.value <= "5") {
    cerveja = 1200 * adulto.value;
  } else if (duracao.value >= "6") {
    cerveja = 2000 * adulto.value;
  }

  return cerveja;
}

function calcRefri() {
  if (duracao.value <= "5") {
    refri = 1000 * adulto.value + 500 * crianca.value;
  } else if (duracao.value >= "6") {
    refri = 1500 * adulto.value + 750 * crianca.value;
  }

  return refri;
}

function calcularchurrasco() {
  limparcalculo();

  if (
    adulto.value.length == 0 ||
    adulto.value < 0 ||
    isNaN(adulto.value) ||
    adulto.value % 1 != 0
  ) {
    alert("Digite quantos adultos estarão presentes.");
  } else if (
    crianca.value.length == 0 ||
    crianca.value < 0 ||
    isNaN(crianca.value) ||
    crianca.value % 1 != 0
  ) {
    alert("Digite quantas crianças estarão presentes.");
  } else if (
    duracao.value.length == 0 ||
    duracao.value <= 0 ||
    isNaN(duracao.value) ||
    duracao.value % 1 != 0
  ) {
    alert("Digite a duração do evento.");
  } else {
    var carne = calcCarne();
    var cerveja = calcCerveja();
    var refri = calcRefri();

    const resultado = document.createElement("div");
    resultado.classList.add("resultados");
    resultado.innerHTML = `<p id="carne">${carne} g de carne</p>
  <p id="cerveja">${cerveja} ml de cerveja</p>
  <p id="refri">${refri} ml de refrigerante ou suco</p>`;

    document.getElementById("caixaresultado").appendChild(resultado);
  }
}

document.getElementById("botao").addEventListener("click", calcularchurrasco);
