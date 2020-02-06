//Juego de buscar al Criminal:

let crowd = 'P1P2P3P4P5P6CCCP7P8P9'; //Creamos una multitus
let reCriminals = /c+/i; //Buscamos todas las "C" solas o repetidas, ademas de mayusulas y minusculas
let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals); //En este caso obtendremos "CCC"