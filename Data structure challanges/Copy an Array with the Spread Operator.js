//Podemos utilizar el "spread operator" "..." para poder copiar todos los elementos

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// Con thatArray:[true, true, undefined, false, null]
// Con thisArray: remains unchanged, and is identical to thatArray

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) { //Hemos utilizado un loop para que el codigo se repita
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}
copyMachine([true, false, true], 1) //Obtenemos: [true, false, true] (Solo se repite una vez)
    //En el caso de arriba: En este caso el numero es 1, se ejecuta el loop, el codigo pasa, y obtenemos la matriz, al final restamos uno a nuestro numero. 
    //Ahora tenemos el valor cero, en este caso se vuelve a ejecutar el loop, con 0 el codigo no pasa, puesto que no se cumple que nuestro numero es mayor o igual que uno

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) { //Hemos utilizado un loop para que el codigo se repita
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}
copyMachine([true, false, true], 0) //En este caso obtendremos "undefined", es decir, ningun valor

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 2) { //Hemos utilizado un loop para que el codigo se repita
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}
copyMachine([true, false, true], 2) //Obtendremos lo mismo que el primer caso, es decir: [true, false, true] (Solo se repite una vez

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) { //Hemos utilizado un loop para que el codigo se repita
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}
copyMachine([true, false, true], 2) //Obtendremos que "arr" se repite dos veces: [true, false, true], [true, false, true]