// Calcular cuenta restaurante

// funcion calcular cuenta total

function calcularTotalCuenta() {
    var valorCuenta = document.getElementById('box-cuenta').value;

    var porcentajePropina = document.getElementById('box-propina').value;

    valorCuenta = parseInt(valorCuenta)
    porcentajePropina = parseInt(porcentajePropina)

    var propina = valorCuenta * (porcentajePropina / 100);

    var totalCuenta = parseInt(propina) + valorCuenta

    if (!Number.isInteger(valorCuenta) || !Number.isInteger(porcentajePropina)) {
        alert("Ingrese números")
    }
    else {
        document.getElementById('valor-cuenta').innerHTML = parseInt(valorCuenta).toFixed(1);
        document.getElementById('propina-total').innerHTML = parseInt(propina).toFixed(1);
        document.getElementById('valor-cuenta-total').innerHTML = totalCuenta.toFixed(1);
    }
}

// funcion limpiar boton
function limpiarFormulario() {
    document.getElementById("my-form").reset();
}