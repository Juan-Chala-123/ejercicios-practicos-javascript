// Variable del ejercicio de contador de clics
let clics = 0;
const { createElement } = require("react");

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

// 3. Cambiar color de fondo
function cambiarColor(boton) {
    let color = boton.value;
    document.body.style.backgroundColor = color;
}

// 4. Contador de clics
function contador() {
    clics++
    document.getElementById("clic").innerHTML="Clics: " + clics
}

// 5. Lista dinámica
function lista() {
    let text = document.getElementById("text").value

    let listItem = document.createElement("li")
    listItem.textContent = text

    let p = document.getElementById("tarea")
    p.appendChild(listItem);
}