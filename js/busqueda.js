const inputBusquedaInversiones = {
    tasa1: "",
    perfil: "",
    montoMinimo: "",
    montoMaximo: "10000000",
}   

console.log(inputBusquedaInversiones.montoMaximo);

function filtrarPorPlazo(inversion) {
    if(inputBusquedaInversiones.montoMaximo) {
        return inversion.montoMaximo >= inputBusquedaInversiones.montoMaximo;
    }
    return inversion;
}

filtrarPorPlazo(inversion);

console.log(inversion);