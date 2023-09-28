const inputBusquedaInversiones = {
    rangoDeTasa: "",
    perfil: "",
    montoAInvertir: "10000000000"
}   

console.log(inputBusquedaInversiones);

function filtrarPorMonto(monto) {
    if(lineasDeInversion.montoMaximo >= inputBusquedaInversiones.montoAInvertir) {
        return lineasDeInversion.nombre;
    } else {
        console.error("No se encontraron resultados")
    }
    
}

filtrarPorMonto();

