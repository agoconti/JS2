alert("Te damos la bienvenida a la banca digital del BICLA");

let montoANegociar = Number(
  prompt(
    "Por favor ingresá la sumatoria de los montos de los cheques que vas a negociar"
  )
);

let plazo = Number(
  prompt(
    "Por favor indicanos el plazo máximo de vencimiento de los cheques: 45, 90, 180 ó 270 días"
  )
);

function calculoPrestamo() {
  switch (plazo) {
    case 45:
      alert(
        "Acreditaremos $" +
          (montoANegociar - montoANegociar * ((0.94 * plazo) / 365)).toFixed(
            2
          ) +
          " en tu cuenta"
      );
      break;
    case 90:
      alert(
        "Acreditaremos $" +
          (montoANegociar - montoANegociar * ((0.98 * plazo) / 365)).toFixed(
            2
          ) +
          " en tu cuenta"
      );
      break;
    case 180:
      alert(
        "Acreditaremos $" +
          (montoANegociar - montoANegociar * ((1.08 * plazo) / 365)).toFixed(
            2
          ) +
          " en tu cuenta"
      );
      break;
    case 270:
      alert(
        "Acreditaremos $" +
          (montoANegociar - montoANegociar * ((1.15 * plazo) / 365)).toFixed(
            2
          ) +
          " en tu cuenta"
      );
      break;
    default:
      alert("No se pudo realizar el cálculo correctamente");
  }
}

calculoPrestamo();
