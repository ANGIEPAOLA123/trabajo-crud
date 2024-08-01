import  sololetras  from "./modulos/modulos_letras.js";
import is_valid from "./modulos/modulo_valid.js";

const $formulario = document.querySelector("form");
const nombre = document.querySelector("#nombre");

nombre.addEventListener("keypress",sololetras);

$formulario.addEventListener("submit",(event)=>{
    let response =  is_valid(event,"form  [required]");
    const data ={
        nombres: nombre.value,
    }
    if(response) {
        fetch("http://localhost:3000/documentos",{
            method: 'POST',
             body: JSON.stringify(data),
              headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        })

        .then((response) => response.json())
        .then((json) => {

        })
            
           
           
        }
    })
