// Funcion para saber si 2 numeros son iguales

function numerosIguales() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    // validar que los 2 numeros sean enteros positivos
    if (validarNumeros()) {
        if (Object.is(num1, num2)) {
            alert("Los numeros son iguales")
        } else {
            alert("Los numeros NO son iguales")
        }
    }

}