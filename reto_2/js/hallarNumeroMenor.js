// Funcion para hallar el numero menor

function hallarNumeroMenor() {

    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    num1 = parseInt(num1);
    num2 = parseInt(num2);
        
    // Validacion de que los 2 numeros no sean iguales
        while (Object.is(num1, num2)) {
            alert("Los numeros no pueden ser iguales")
            break
        }
    
        // encontrar el menor de los numeros
        let numeros = [num1, num2]
        while(!Object.is(numeros[0], numeros[1]) && validarNumeros()){
            alert("El numero menor es: " + Math.min(...numeros))
            break
        }
    }