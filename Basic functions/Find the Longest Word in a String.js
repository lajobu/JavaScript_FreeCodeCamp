function findLongestWordLength(str) {
    var words = str.split(' '); //Separa el codigo en caracteres
    var maxLength = 0;
    for (var i = 0; i < words.length; i++) { //Aplicamos un loop, en que comenzando desde cero
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            /Haremos que obtengamos la palabra mas larga de nuestra cadena
        }
    }
    return maxLength;
}