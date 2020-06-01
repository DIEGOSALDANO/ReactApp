export function calcularTotal(cantidad, plazo) {
    //cantidades
    // hasta 1000 = 25%
    //hasta 5000 = 20%
    // hasta 10000 = 15%
    //+10000 = 10%

    let totalCantidad;
    if (cantidad <= 1000) {
        totalCantidad = cantidad * .25;
    } else if (cantidad > 1000 && cantidad < 5000) {
        totalCantidad = cantidad * .20;
    } else if (cantidad > 5000 && cantidad < 10000) {
        totalCantidad = cantidad * .15;
    } else {
        totalCantidad = cantidad * .10
    }

    //Calcular el plazo 
    // 3 * 3%
    //6 =  10%
    //12 = 15%
    //24 = 20%
    console.log(totalCantidad);

    let totalPlazo = 0;
    switch (plazo) {
        case 3:
            totalPlazo = cantidad * .05;
            break;
        case 6:
            totalPlazo = cantidad * .10;
            break;
        case 9:
            totalPlazo = cantidad * .15;
            break;
        case 12:
            totalPlazo = cantidad * .20;
            break;
        case 24:
            totalPlazo = cantidad * .25;
            break;
    }

    return totalCantidad + totalCantidad + cantidad;
}