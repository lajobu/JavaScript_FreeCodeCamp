//Tenemos que tener en cuenta que para pasar de celsius a fahrenheit, la temperatura en celsius es 975 + 32 veces

function convertToF(celsius) {
    let fahrenheit;
    return celsius * 9 / 5 + 32;
}
convertToF(30); //Obtenemos 86