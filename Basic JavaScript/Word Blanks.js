function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    //Utilizamos "{" siempre antes de comenzar a aplicar la funcion
    //Definimos la funcion, con cuatro diferentes variables: "myNoun" "myAdjective" "myVerb" y "myAdverb"

    var result = "My " + myAdjective + " " + myNoun + " " + myVerb + " very " + myAdverb + ".";
    //Creamos la variable "result" asignando diferentes valores, ademas de añadir el operador "+"
    //Tener en cuenta que "My y "very" deben de ir seguidos de un espacio para que el resultado sea correcto

    return result;
    //Pedimos que nos retorne el resultado
}
wordBlanks("dog", "big", "ran", "quickly");
//Hemos asignado diferentes valores a la variable ("myNoun: dog", "myAdjetive: big", "myNoun: ran" y "myAdverb: quickly"
//La consola mostrara el resultado: My big dog ran very quickly.

//RESUMEN:
//Con la funcion "wordBlanks" primero hemos definido las variables a utilizar, en este caso cuatro
//Hemos creado la variable resultado, formada con las 4 variables de la funcion ademas de cadenas, utilizando el operador "+"
//Añadimos return, con el fin de que nos devuelva la variable creada
//Une vez hayamos ejecutado la funcion, asignamos un valor a las variables