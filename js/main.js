alert("Te damos la bienvenida a la banca digital del BICLA");

let montoANegociar = Number(
  prompt("Por favor ingresá el monto total de cheques que vas a negociar")
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
          parseInt(montoANegociar - montoANegociar * ((0.94 * 45) / 365)) +
          " en tu cuenta"
      );
      break;
    case 90:
      alert(
        "Acreditaremos $" +
          parseInt(montoANegociar - montoANegociar * ((0.98 * 90) / 365)) +
          " en tu cuenta"
      );
      break;
    case 180:
      alert(
        "Acreditaremos $" +
          parseInt(montoANegociar - montoANegociar * ((1.08 * 180) / 365)) +
          " en tu cuenta"
      );
      break;
    case 270:
      alert(
        "Acreditaremos $" +
          parseInt(montoANegociar - montoANegociar * ((1.15 * 270) / 365)) +
          " en tu cuenta"
      );
      break;
    default:
      alert("No se pudo realizar el cálculo correctamente");
  }
}

calculoPrestamo();
