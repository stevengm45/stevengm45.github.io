
function validarNumeros() {
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (num1 < 1 || num2 < 1) {
        alert("ingrese solo numeros positivos enteros")
    }else{
        return num1, num2
    }
}