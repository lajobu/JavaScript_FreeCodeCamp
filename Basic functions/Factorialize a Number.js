//Tnemeos que crear una funcion, que retorne el facturial de un numero entero

//De tal manera que: 5!(5 factorial) = 1 * 2 * 3 * 4 * 5 = 120

function factorialize(num) { //En este caso ha sido aplicado un loop fara conseguir el objetivo
    var product = 1;
    for (var i = 1; i <= num; i++) { //(var i=1) = Test condition; (i<=num) = test condition; i++ = updater (incrementa o reduce el contador del loop)
        product *= i;
    }
    return product;
}
factorialize(5); //Obtenemos el valor 120