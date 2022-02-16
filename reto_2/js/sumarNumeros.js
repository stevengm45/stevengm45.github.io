// Funcion para sumar 2 numeros

function sumar() {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value

    if(validarNumeros()){
        const arr = [parseInt(num1), parseInt(num2)];
        const reducer = (accumulator, curr) => accumulator + curr;
        alert("la suma de " + num1 + " + " + num2 + " es: " + arr.reduce(reducer));
    }
}