const BIENVENIDA = document.createElement("div"); 
BIENVENIDA.innerHTML = ("<h2>Te damos la bienvenida a la banca digital del BICLA</h2>");
document.body.append(BIENVENIDA);

let tipoCheque = prompt("Indicanos el tipo de valor a negociar: 1- Cheque físico o 2- e-cheq");

for (const ITEM of lineasDeInversion) {
  let grillaInversiones = document.createElement("div");

  grillaInversiones.innerHTML =   `<img src="${ITEM.imagen}">
                                  <h3>Perfil ${ITEM.perfil}</>  
                                  <h3>Tasa ${ITEM.tasa} % T.N.A.</h3>`
  
  document.body.appendChild(grillaInversiones);
}

/*function calcularAcreditacion(plazo, montoANegociar) {
  if (plazo === lineasDePrestamos[0].plazo[0]) {
    return montoANegociar - montoANegociar * ((lineasDePrestamos.tasa[0] * plazo) / 365);
  } else if (plazo === lineasDePrestamos[0].plazo[1]) {
    return montoANegociar - montoANegociar * ((lineasDePrestamos.tasa[1] * plazo) / 365);
  } else if (plazo === lineasDePrestamos[0].plazo[2]) {
    return montoANegociar - montoANegociar * ((lineasDePrestamos.tasa[2] * plazo) / 365);
  } else if (plazo === lineasDePrestamos[0].plazo[3]) {
    return montoANegociar - montoANegociar * ((lineasDePrestamos.tasa[3] * plazo) / 365);
  } else {
    return null; // En caso de plazo no válido
  }
}*/

function calcularAcreditacion(plazo, montoANegociar) {
  // Busca el índice del elemento con el plazo correspondiente
  const index = lineasDePrestamos.findIndex((linea) => linea.plazo.includes(plazo));

  if (index !== -1) {
    const tasa = lineasDePrestamos[index].tasa;
    return montoANegociar - (montoANegociar * (tasa / 365) * plazo);
  } else {
    return null; // En caso de plazo no válido
  }
}

function calculoPrestamo(plazo, montoANegociar) {
  const acreditacion = calcularAcreditacion(plazo, montoANegociar);

  if (acreditacion !== null) {
    let montoAAcreditar = document.createElement("div");
    montoAAcreditar.innerHTML = (`<p>Acreditaremos $ ${acreditacion.toFixed(2)} en tu cuenta</p>`);
    document.body.append(montoAAcreditar);
    console.log(montoAAcreditar);
  } else {
    alert("No se pudo realizar el cálculo correctamente");
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


