split(''): //Separa nuestro codigo en caracter por caracter, coge nuestra cadena como una matriz
    reverse(): //Coge nuestra matriz de caracteres y los reversa
    join(''): //Coge todos los caracteres de la matriz, y los devuleve a convertir en una cadena

    function reverseString(str) {
        return str.split('').reverse().join('');
    }
reverseString("hello"); //Obtendremos: "olleh"