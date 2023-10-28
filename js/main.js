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

//FORMULARIO PLAZO FIJO

let formInversiones = document.querySelector("#form-inversiones");
let monto = document.querySelector("#monto-plazo-fijo");
let plazoPF = document.querySelector("#plazo-plazo-fijo");

formInversiones.addEventListener("submit", (e) => {
  e.preventDefault();
  
  if (validarMonto() && validarPlazo()) {
    localStorage.setItem("monto-plazo-fijo", JSON.stringify(monto.value));
    localStorage.setItem("plazo-plazo-fijo", JSON.stringify(plazoPF.value));
    formInversiones.reset();
    
    let resultado = res(montoEnStorage, tasa, plazoEnStorage);
    
    resultadoPF.innerText = `Tu capital de $${montoEnStorage} rendirá $${Number(resultado.toFixed(2))} al cabo de ${plazoEnStorage} días`;
  }
});

function validarMonto() {
  let montoValue = parseFloat(monto.value);
  if (isNaN(montoValue) || montoValue <= 0) {
    Swal.fire('Ingresá un monto válido mayor que cero');
    return false;
  }
  return true;
}

function validarPlazo() {
  let plazoValue = parseInt(plazoPF.value);
  if (isNaN(plazoValue) || plazoValue <= 0) {
    Swal.fire('Ingresá un plazo válido mayor que cero');
    return false;
  }
  return true;
}


//CALCULO PLAZO FIJO

let resultadoPF = document.querySelector(".resultado-pf");

let montoEnStorage = JSON.parse(localStorage.getItem("monto-plazo-fijo"));
let plazoEnStorage = JSON.parse(localStorage.getItem("plazo-plazo-fijo"));
let tasa = INVERSIONES[0].tasa;

function res(monto, tasa, plazo) {
  return Number(monto) + (Number(monto) * ((tasa/100) / 365) * plazo);
}

//BUSQUEDA DE PRÉSTAMOS

//SIMULACIÓN DE PRÉSTAMOS


