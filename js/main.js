//RENDERIZADO DE INVERSIONES

const grillaInversiones = document.querySelector(".inversiones");

function mostrarInversiones(inversiones) {  
  inversiones.forEach(inversion => {
    let contenedor = document.createElement('div');
    contenedor.classList.add('col-6');
    contenedor.classList.add('inversion');
    contenedor.innerHTML = `
    <img id="img" src="${inversion.imagen}">
    <h3>Perfil ${inversion.perfil}</h3>
    <h3>Tasa ${inversion.tasa} % T.N.A.</h3>
    `;
    grillaInversiones.appendChild(contenedor);
  });
}

fetch("./database/inversiones.json")
  .then(response => response.json())
  .then(data => {
    mostrarInversiones(data)
  })
  .catch(error => {
    console.error("Error al cargar los datos:", error);
  })

//FORMULARIO PLAZO FIJO

let formInversiones = document.querySelector("#form-inversiones");
let monto = document.querySelector("#monto-plazo-fijo");
let plazoPF = document.querySelector("#plazo-plazo-fijo");

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

formInversiones.addEventListener("submit", (e) => {
  e.preventDefault();
  resultadoPF.innerText = "";

  if (validarMonto() && validarPlazo()) {
    localStorage.setItem("monto-plazo-fijo", JSON.stringify(monto.value));
    localStorage.setItem("plazo-plazo-fijo", JSON.stringify(plazoPF.value));
    
    let resultado = res(monto.value, tasa, plazoPF.value);
  }
});

//CALCULO PLAZO FIJO

let resultadoPF = document.querySelector(".resultado-pf");

let montoEnStorage = JSON.parse(localStorage.getItem("monto-plazo-fijo"));
let plazoEnStorage = JSON.parse(localStorage.getItem("plazo-plazo-fijo"));
let tasa;

fetch("./database/inversiones.json")
  .then(response => response.json())
  .then(data => { 
  tasa = data[0].tasa
    })
  .catch(error => {
  console.error("Error al cargar los datos:", error);
    })

function res(monto, tasa, plazo) {
  let resultado = Number(monto) + (Number(monto) * ((tasa / 100) / 365) * plazo);
  resultadoPF.innerText = `Tu capital de $${monto} rendirá $${Number(resultado.toFixed(2))} al cabo de ${plazo} días`;
  formInversiones.reset(); // Mover aquí para que se reinicie el formulario después de mostrar el resultado.
  return resultado;
}

//RENDERIZADO DE PRÉSTAMOS

//BUSQUEDA DE PRÉSTAMOS

//SIMULACIÓN DE PRÉSTAMOS

