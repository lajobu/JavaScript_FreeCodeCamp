function largestOfFour(arr) {
    var results = []; //Creamos una variable que almacene todos los maximos numeros de la matriz
    for (var n = 0; n < arr.length; n++) {
        //console.log(arr[i]); //Obtenemos cuatro diferentes matrices, que forman la matriz principal
        var largestNumber = arr[n][0];
        for (var = 1; j < arr[n].length; j++) {
            //console.log(arr[i][]j) //Obtenemos cada numero separado, formando una matriz diferente
            if (arr[n][j] > largestNumber) {
                largestNumber = arr[n][j]; //Almacenamos el numero mas grande obtenido, dentro de nuestra matriz
            }
        }
        results[n] = largestNumber;
    }
    return results;
}
largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);