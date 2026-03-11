// Variable del ejercicio de contador de clics
let clics = 0;

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

// 6. Validación de formulario
function formulario() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let age = document.getElementById("age").value
    if(name == "" || email == "" || age == "") {
        alert("No pueden haber campos vacios.")
    } else {
        let listItem = document.createElement("li")
        listItem.textContent = "Nombre: " + name + " | Correo: " + email + " | Edad: " + age
    
        let p = document.getElementById("formulario")
        p.appendChild(listItem)

        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("age").value = ""
    }
}

// 7. Calculadora básica
function calculadora(boton) {
    let operacion = boton.value;
    let nume1 = Number(document.getElementById("nume1").value)
    let nume2 = Number(document.getElementById("nume2").value)
    let resultado = document.createElement("p");

    switch(operacion) {
        case "Sumar":
            resultado.textContent =  nume1 + " + " + nume2 + " = " + (nume1+nume2)
            break;

        case "Restar":
            resultado.textContent =  nume1 + " - " + nume2 + " = " + (nume1-nume2)
            break;

        case "Dividir":
            if (nume2 == 0) {
                alert("No se puede dividir entre cero");
                return;
            }
            resultado.textContent =  nume1 + " / " + nume2 + " = " + (nume1/nume2)
            break;

        case "Multiplicar":
            resultado.textContent =  nume1 + " x " + nume2 + " = " + (nume1*nume2)
            break;
    }

    let result = document.getElementById("resultadoCalculadora")
    result.appendChild(resultado)
}