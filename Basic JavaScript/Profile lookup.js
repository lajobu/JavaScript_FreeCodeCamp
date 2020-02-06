var contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
]; //Primero creamos una serie de contactos "Kristian", "Erika"...

function lookUpProfile(name, prop) { //Creamos la funcion con las variables "name" y "prop"
    for (var x = 0; x < contacts.length; x++) { //Se ejecuta el bucle comenzando por el primer contacto, el contacto en la posicion 0
        if (contacts[x].firstName === name) { //Si "firstname" coincide con la variable "name" la funcion pasa
            if (contacts[x].hasOwnProperty(prop)) { //Utilizando "hasOwnProperty", verificamos si existe "prop" emn nuestra lista de contactos
                return contacts[x][prop]; //En ese caso la funcion nos devolvera el valor "prop"
            } else {
                return "No such property"; //Si la segunda declaracion falla obtendremos "No such property", es decir, si no pasa el loop con "prop"
            }
        }
    }
    return "No such contact"; //Si la primera condicion no coincide, obtendremos "No such contact", es decir, en caso de no coincidir "firstName"
}
lookUpProfile("Akira", "likes"); //En este caso obtendremos "Pizza", "Coding", "Brownie Points", piuesto que el contacto y la propierdad se encuentra dentro de la libreria "contacts"
},