// CONSTRUCTOR

class ProductoFinanciero {
    constructor(id, reglamentacion, nombre, plazo, tasa, usuario, destino, montoMinimo, montoMaximo) {
      this.id = id;
      this.reglamentacion = reglamentacion;
      this.nombre = nombre;
      this.plazo = plazo;
      this.tasa = tasa;
      this.usuario = usuario;
      this.destino = destino;
      this.montoMinimo = montoMinimo;
      this.montoMaximo = montoMaximo;
    };
    calcularInteres(plazoSolicitado, montoSolicitado) {
        if (this.plazo.includes(plazoSolicitado) && montoSolicitado >= this.montoMinimo && (this.montoMaximo === 'indistinto' || montoSolicitado <= this.montoMaximo)) {
          const tasaIndex = this.plazo.indexOf(plazoSolicitado);
          const tasa = this.tasa[tasaIndex];
          const interes = (montoSolicitado * tasa) / 100;
          return interes;
        } else {
          return null;
        }
    }
};

const productosFinancieros = [];

fetch("./database/prestamos.json")
    .then(response => response.json())
    .then(data => {
        for (const productoData of data) {
            const producto = new ProductoFinanciero(...Object.values(productoData));
            productosFinancieros.push(producto);
          }
    })
    .catch(error => {
      console.error("Error al cargar los datos:", error);
    })
