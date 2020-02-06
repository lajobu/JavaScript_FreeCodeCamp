//"if" se utiliza para tomar una decision acerca del codigo, JS dira si la condicion entre parentesis "()", es "True" o "False"

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true" //Primero aplicamos la sentencia "True"
    }
    return "No, that was false"; //En segundo lugar aplicamos la sentencia "False"
}
trueOrFalse(true); //La consola nos va a devolver el valor "Yes, that was true"