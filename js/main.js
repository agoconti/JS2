for (const item of lineasDeInversion) {
  console.log(item.nombre);
  console.log(item.tasa1 + "% TNA");
  console.log(item.perfil);

}

alert("Te damos la bienvenida a la banca digital del BICLA");

let tipoCheque = prompt("Indicanos el tipo de valor a negociar: 1- Cheque físico o 2- e-cheq");

function calcularAcreditacion(plazo, montoANegociar) {
  if (plazo === lineasDePrestamos[0].plazo1) {
    return montoANegociar - montoANegociar * ((0.94 * plazo) / 365);
  } else if (plazo === lineasDePrestamos[0].plazo2) {
    return montoANegociar - montoANegociar * ((0.98 * plazo) / 365);
  } else if (plazo === lineasDePrestamos[0].plazo3) {
    return montoANegociar - montoANegociar * ((1.08 * plazo) / 365);
  } else if (plazo === lineasDePrestamos[0].plazo4) {
    return montoANegociar - montoANegociar * ((1.15 * plazo) / 365);
  } else {
    return null; // En caso de plazo no válido
  }
}

function calculoPrestamo(plazo, montoANegociar) {
  const acreditacion = calcularAcreditacion(plazo, montoANegociar);

  if (acreditacion !== null) {
    alert("Acreditaremos $" + acreditacion.toFixed(2) + " en tu cuenta");
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


