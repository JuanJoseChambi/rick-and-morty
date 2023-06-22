const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const regexPass = /\d/;
export default function valiidation(inputs) {

    let errors = {};
    if (!regexEmail.test(inputs.email)) errors.email = "Correo Invalido";
    
    if (!inputs.email) errors.email = "Ingrese un Correo";
    
    if ((inputs.email).length >= 35) errors.email = "Maximo de Caracteres Superado";
    
    if (!regexPass.test(inputs.password)) errors.password = "Tiene que tener al menos un numero";
    
    if ((inputs.password).length < 6) errors.password = "Muy Corto";
    
    if ((inputs.password).length > 10) errors.password = "Es muy largo";
    

    return errors;
}
//1 : 00 : 20