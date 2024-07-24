const isEmailEmail = (event,elemento) =>{
    let expresion = /[a-zA-Z0-9-._]+@[a-zA-Z0-9-._]+\.(.[a-zA-Z]{2,3}){1,2}$/;
    console.log(expresion,elemento.value);
    console.log(expresion.test(elemento.value));
    if(expresion.test(elemento.value)){
        alert("si funciona");
        elemento.classList.remove("error");
        elemento.classList.add("correcto");
    } else{
        alert("no funciona")
        elemento.classList.remove("correcto");
        elemento.classList.remove("error")
    }
}
export default isEmail;
