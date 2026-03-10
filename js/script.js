// 1. Mostrar texto en pantalla
function mensaje() {
    var mensaje = document.getElementById("resultado")
    mensaje.innerHTML = "Hola mundo desde JavaScript"
}

// 2. Calculadora de suma
function sumar() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let resultado = (num1 + num2);
    document.getElementById("resultadoSuma").innerHTML = "Suma: " + resultado;
    // suma.innerHTML = "La suma es " + (resultado);
}