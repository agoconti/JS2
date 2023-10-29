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
    setTimeout(() => {
      mostrarInversiones(data);
    }, 2000);
  })
  .catch(error => {
    console.error("Error al cargar los datos:", error);
  });


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
  formInversiones.reset();
  return resultado;
}

// CONSTRUCTOR PRÉSTAMOS

class ProductoFinanciero {
  constructor(id, reglamentacion, nombre, plazo, tasa, usuario, destino, montoMinimo, montoMaximo, imagen) {
    this.id = id;
    this.reglamentacion = reglamentacion;
    this.nombre = nombre;
    this.plazo = plazo;
    this.tasa = tasa;
    this.usuario = usuario;
    this.destino = destino;
    this.montoMinimo = montoMinimo;
    this.montoMaximo = montoMaximo;
    this.imagen = imagen;
  };
};

//RENDERIZADO DE PRÉSTAMOS

const productosFinancieros = [];

fetch("./database/prestamos.json")
  .then(response => response.json())
  .then(data => {
      for (const productoData of data) {
          const producto = new ProductoFinanciero(...Object.values(productoData));
          productosFinancieros.push(producto);
      }
      setTimeout(() => {
          mostrarPrestamos(data)
      }, 3000);
  })
  .catch(error => {
    console.error("Error al cargar los datos:", error);
  });

const grillaPrestamos = document.querySelector(".prestamos");

function mostrarPrestamos(productosFinancieros) {  
  productosFinancieros.forEach(prestamo => {
    let contenedor = document.createElement('div');
    contenedor.classList.add('col-4');
    contenedor.classList.add('prestamo');
    contenedor.innerHTML = `
    <img id="img" src="${prestamo.imagen}">
    <h3>Destino: ${prestamo.destino}</h3>`;
    grillaPrestamos.appendChild(contenedor);
  });
}

//BUSQUEDA DE PRÉSTAMOS

let resultadoPrestamo = document.querySelector(".resultado-prestamo");

let formPrestamos = document.querySelector("#form-prestamos");
let montoPrestamo = document.querySelector("#monto-prestamo");
let plazoPrestamo = document.querySelector("#plazo-prestamo");


function validarMontoPrestamo() {
  let montoValue = parseFloat(montoPrestamo.value);
  if (isNaN(montoValue) || montoValue < 50000) {
    Swal.fire('Ingresá un monto válido mayor que $50.000');
    return false;
  }
  return true;
}

function validarPlazoPrestamo() {
  let plazoValue = parseInt(plazoPrestamo.value);
  if (isNaN(plazoValue) || plazoValue < 3) {
    Swal.fire('Ingresá un plazo válido mayor que 3');
    return false;
  }
  return true;
}

function calcularPrestamo() {
  const montoSolicitado = parseFloat(montoPrestamo.value);
  const plazoSolicitado = parseInt(plazoPrestamo.value);

  for (const producto of productosFinancieros) {
      const interes = calcularInteres(producto, plazoSolicitado, montoSolicitado);
      if (interes !== null) {
          resultadoPrestamo.innerText = `Para un monto de $${montoSolicitado} a ${plazoSolicitado} meses en ${producto.nombre}, el interés es de $${interes.toFixed(2)}`;
          return;
      }
  }

  Swal.fire('No se encontró un producto de préstamo adecuado.');
}

formPrestamos.addEventListener("submit", (e) => {
  e.preventDefault();
  resultadoPrestamo.innerText = "";

  if (validarMontoPrestamo() && validarPlazoPrestamo()) {
    let resultado = res(montoPrestamo.value, tasa, plazoPrestamo.value);
  }
});

function calcularInteres(producto, plazoSolicitado, montoSolicitado) {
  if (
      producto.plazo.includes(plazoSolicitado) &&
      montoSolicitado >= producto.montoMinimo &&
      (producto.montoMaximo === 'indistinto' || montoSolicitado <= producto.montoMaximo)
  ) {
      const tasaIndex = producto.plazo.indexOf(plazoSolicitado);
      const tasa = producto.tasa[tasaIndex];
      const interes = (montoSolicitado * tasa) / 100;
      return interes;
  } else {
      return null;
  }
}

