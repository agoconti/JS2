alert("Te damos la bienvenida a la banca digital del BICLA");

let tipoCheque = prompt("Indicanos el tipo de valor a negociar: 1- Cheque físico o 2- e-cheq");

function calculoPrestamo(plazo, montoANegociar) {
  switch (plazo) {
    case (lineasDePrestamos[0].plazo1):
      alert("Acreditaremos $" + (montoANegociar - montoANegociar * ((0.94 * plazo) / 365)).toFixed(2) + " en tu cuenta");
      break;
    case (lineasDePrestamos[0].plazo2):
      alert("Acreditaremos $" + (montoANegociar - montoANegociar * ((0.98 * plazo) / 365)).toFixed(2) + " en tu cuenta");
      break;
    case (lineasDePrestamos[0].plazo3):
      alert("Acreditaremos $" + (montoANegociar - montoANegociar * ((1.08 * plazo) / 365)).toFixed(2) + " en tu cuenta");
      break;
    case (lineasDePrestamos[0].plazo4):
      alert("Acreditaremos $" + (montoANegociar - montoANegociar * ((1.15 * plazo) / 365)).toFixed(2) + " en tu cuenta");
      break;
    default:
      alert("No se pudo realizar el cálculo correctamente");
  }
}
while (tipoCheque != "") {
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

//acreditarPrestamo()=> ;

//(montoANegociar - montoANegociar * ((lineasDePrestamos[0].tasa1 * plazo) / 365)).toFixed(2)
