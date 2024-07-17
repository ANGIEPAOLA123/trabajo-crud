const $formulario = document.querySelector("form");
const nombres = document.querySelector("#nombres");
const apellidos = document.querySelector("#apellidos");
const telefono = document.querySelector("#telefono");
const direccion = document.querySelector("#direccion");
const tipodocumento = document.querySelector("#tipodocumento");
const documento = document.querySelector("#documento");
const politicas = document.querySelector("#politicas");
const enviar = document.querySelector("#enviar");

// Expresiones regulares para validar cada campo
const ValidarNombre = /^[a-zA-Z]{4,}$/;
const ValidarDireccion = /^[a-zA-Z0-9\s,.'-]{3,}$/;
const ValidarNumero = /^[0-9]{10}$/;  // Exactamente 10 dígitos
const ValidarDocumento = /^[0-9]{8,10}$/;  // Entre 8 y 10 dígitos

// Función para remover clase de error y agregar clase de correcto
const remover = (input, validacion) => {
    if (validacion.test(input.value)) {
        input.classList.add("correcto");
        input.classList.remove("error");
    } else {
        input.classList.remove("correcto");
        input.classList.add("error");
    }
};

// Validar el formulario al enviarlo
const validar = (event) => {
    event.preventDefault();
    let valid = true;

    if (nombres.value === "") {
        alert("El campo Nombres es obligatorio");
        nombres.focus();
        nombres.classList.add("error");
        valid = false;
    }

    if (apellidos.value === "") {
        alert("El campo Apellidos es obligatorio");
        apellidos.focus();
        apellidos.classList.add("error");
        valid = false;
    }

    if (telefono.value === "") {
        alert("El campo Teléfono es obligatorio");
        telefono.focus();
        telefono.classList.add("error");
        valid = false;
    }

    if (direccion.value === "") {
        alert("El campo Dirección es obligatorio");
        direccion.focus();
        direccion.classList.add("error");
        valid = false;
    }

    if (documento.value === "") {
        alert("El campo Documento es obligatorio");
        documento.focus();
        documento.classList.add("error");
        valid = false;
    }

    if (tipodocumento.value === "0") {
        alert("El campo Tipo de Documento es obligatorio");
        tipodocumento.focus();
        tipodocumento.classList.add("error");
        valid = false;
    }

    return valid;
};

// Remover clase de error al perder el foco (blur) o al escribir (keyup)
nombres.addEventListener("blur", () => remover(nombres, ValidarNombre));
nombres.addEventListener("keyup", () => remover(nombres, ValidarNombre));

apellidos.addEventListener("blur", () => remover(apellidos, ValidarNombre));
apellidos.addEventListener("keyup", () => remover(apellidos, ValidarNombre));

direccion.addEventListener("blur", () => remover(direccion, ValidarDireccion));
direccion.addEventListener("keyup", () => remover(direccion, ValidarDireccion));

telefono.addEventListener("blur", () => remover(telefono, ValidarNumero));
telefono.addEventListener("keyup", () => remover(telefono, ValidarNumero));

documento.addEventListener("blur", () => remover(documento, ValidarDocumento));
documento.addEventListener("keyup", () => remover(documento, ValidarDocumento));

// Validar tipo de documento al cambiar
tipodocumento.addEventListener("change", () => {
    if (tipodocumento.value !== "0") {
        tipodocumento.classList.remove("error");
        tipodocumento.classList.add("correcto");
    } else {
        tipodocumento.classList.remove("correcto");
        tipodocumento.classList.add("error");
    }
});

// Habilitar/deshabilitar el botón de enviar según las políticas
politicas.addEventListener("change", () => {
    if (politicas.checked) {
        boton.removeAttribute("disabled");
    } else {
        boton.setAttribute("disabled", "disabled");
    }
});

// Agregar evento de submit al formulario
$formulario.addEventListener("submit", validar);
const solonumeros = function(event) {
    if(event.keyCode < 48 || event.keyCode > 57) 
    event.preventDefault();
};

const sololetras = (event, elemento) => {
    // console.log(elemento.value);
    let Letras = /^[a-zA-Z]+$/;
    if (Letras.test(elemento.value)) {
        console.log("si")
    } else {
        console.log("no")
        event.preventDefault();
    }
    // if(event.keyCode < 97 || event.keyCode > 122) 
    // event.preventDefault();
};

documento.addEventListener("keypress", solonumeros);
telefono.addEventListener("keypress", solonumeros);
nombres.addEventListener("keypress", (event) => {
    sololetras(event, nombres);
});
apellidos.addEventListener("keypress", sololetras);








