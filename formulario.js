import isEmail from "./modulo.js";

const $formulario = document.querySelector("form");
const nombres = document.querySelector("#nombres");
const apellidos = document.querySelector("#apellidos");
const telefono = document.querySelector("#telefono");
const direccion = document.querySelector("#direccion");
const tipodocumento = document.querySelector("#tipodocumento");
const documento = document.querySelector("#documento");
const email = document.querySelector("#Email");
const politicas = document.querySelector("#politicas");
const enviar = document.querySelector("#enviar");

// Validar el formulario al enviarlo
const validar = (event) => {
    event.preventDefault();
    if (nombres.value === "") {
        nombres.focus();
        nombres.classList.add("error");
    }

    if (apellidos.value === "") {
        apellidos.focus();
        apellidos.classList.add("error");
    }

    if (telefono.value === "") {
        telefono.focus();
        telefono.classList.add("error");
    }

    if (direccion.value === "") {
        direccion.focus();
        direccion.classList.add("error");
 
    }

    if (documento.value === "") {
        documento.focus();
        documento.classList.add("error");
    }

    if (tipodocumento.value === "0") {
        tipodocumento.focus();
        tipodocumento.classList.add("error");
    }
    if(email.value === ""){
        email.focus();
        email.classList.add("error");
    }
};
const remover = (e, input) => {}
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
addEventListener("DOMContentLoaded",(event)=>{
    if(!politicas.checked){
        console.log(boton);
        boton.setAttribute("disabled","")
    }
})
politicas.addEventListener("change",function(e){
    console.log(e.target.checked);
    if(e.target.checked){
        boton.removeAttribute("disalbed")
    }
})

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
apellidos.addEventListener("keypress", sololetras);










