// Funcion para intercambiar 2 numeros

function intercambiarNumeros() {
    num1 = document.getElementById('num1').value
    num2 = document.getElementById('num2').value

    if (validarNumeros()){
        num1 = parseInt(num1)
        document.getElementById('num2').value = num1
        num2 = parseInt(num2)
        document.getElementById('num1').value = num2
    }
    
}