//MENSAJE DE BIENVENIDA
const BIENVENIDA = document.querySelector(".bienvenida"); 
BIENVENIDA.innerHTML = ("<h2>Te damos la bienvenida a la banca digital del BICLA</h2>");
document.body.append(BIENVENIDA);

//RENDERIZADO DE INVERSIONES

  const GRILLAINVERSIONES = document.querySelector(".inversiones");
  for (const inversion of INVERSIONES) {
    let contenedor = document.createElement('div');
    contenedor.classList.add('row-6');
    contenedor.innerHTML = `
      <img src="${inversion.imagen}">
      <h3>Perfil ${inversion.perfil}</h3>
      <h3>Tasa ${inversion.tasa} % T.N.A.</h3>
    `;
    GRILLAINVERSIONES.appendChild(contenedor);
  }

//FORMULARIO INVERSIONES

let formInversiones =document.querySelector("#form-inversiones");
let monto = document.querySelector("#monto-plazo-fijo");
let plazoPF = document.querySelector("#plazo-plazo-fijo");

formInversiones.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("monto-plazo-fijo", JSON.stringify(monto.value));
  localStorage.setItem("plazo-plazo-fijo", JSON.stringify(plazoPF.value));
  formInversiones.reset();
})

//CALCULO PLAZO FIJO

let resultadoPF = document.querySelector(".resultado-pf");

let montoEnStorage = JSON.parse(localStorage.getItem("monto-plazo-fijo"));
let plazoEnStorage = JSON.parse(localStorage.getItem("plazo-plazo-fijo"));
let tasa = INVERSIONES[0].tasa;

function res(monto, tasa, plazo) {
  return monto + (monto * (tasa * plazo / 365));
}

let resultado = res(montoEnStorage, tasa, plazoEnStorage);

resultadoPF.innerText = `Tu capital de $${montoEnStorage} rendirá $ ${resultado} al cabo de ${plazoEnStorage} días`;


/*

function calcularAcreditacion(plazo, montoANegociar) {
  // Busca el índice del elemento con el plazo correspondiente
  const INDEX = lineasDePrestamos.findIndex((linea) => linea.plazo.includes(plazo));
  //console.log(INDEX);
  if (INDEX !== -1) {
    const TASA = lineasDePrestamos[INDEX].tasa;
    //console.log(TASA);
    return montoANegociar - (montoANegociar * (TASA / 365) * plazo);
  } else {
    return null; // En caso de plazo no válido
  }
}

function calculoPrestamo(plazo, montoANegociar) {
  const acreditacion = calcularAcreditacion(plazo, montoANegociar);

  if (acreditacion !== null) {
    let montoAAcreditar = document.createElement("div");
    montoAAcreditar.innerHTML = (`<p>Acreditaremos $ ${acreditacion} en tu cuenta</p>`);
    console.log(plazo);
    console.log(montoANegociar);
    console.log(acreditacion);
    document.body.append(montoAAcreditar);
    //console.log(montoAAcreditar);
  } else {
    console.log("No se pudo realizar el cálculo correctamente");
  }
}

while (tipoCheque !== null && tipoCheque !== undefined) {
  if (tipoCheque == 1) {
    alert("La operación deberá realizarse en nuestra Sucursal");
  } else if (tipoCheque == 2) {
    let montoANegociar = Number(prompt( "Por favor ingresá la sumatoria de los montos de los cheques que vas a negociar"));

    let plazo = Number(prompt( "Por favor indicanos el plazo máximo de vencimiento de los cheques: 45, 90, 180 ó 270 días"));

    calculoPrestamo(plazo, montoANegociar);
  } else {
    alert("Por favor ingresá 1 ó 2 para poder continuar");
  }

  tipoCheque = prompt("Indicanos el tipo de valor a negociar: 1- Cheque físico o 2- e-cheq");

}

*/
