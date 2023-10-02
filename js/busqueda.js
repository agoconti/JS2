const inputBusquedaInversiones = {
    rangoDeTasa: "",
    perfil: "",
    montoAInvertir: "10000000000"
};   

console.log(inputBusquedaInversiones);

function filtrarPorMonto(monto) {
    const lineasFiltradas = lineasDeInversion.filter(linea => linea.montoMaximo >= monto);
    
    if (lineasFiltradas.length > 0) {
        return lineasFiltradas.map(linea => linea.nombre);
    } else {
        console.error("No se encontraron resultados");
        return [];
    }
};

const res = filtrarPorMonto(inputBusquedaInversiones.montoAInvertir);
console.log(res);

const buscarPorNombre = lineasDeInversion.find(function(linea) {
    return linea.nombre === "plazo fijo";
});

console.log(buscarPorNombre);
