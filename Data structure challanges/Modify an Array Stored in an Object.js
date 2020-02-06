let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) { //Nuestra funcion tiene dos argumentos
    userObj.data.friends.push(friend); //Hemos añadido una nueva propiedad a friend
    return userObj.data.friends; //Retornamos el o jeto añadido
}
console.log(addFriend(user, 'Pete')); //Obtenemos la matriz: ["Sam", "Kira", "Tomo", "Pete"]
//Hemos añadido la nueva propiedad 'Pete'
//Obtenemos la siguiente matriz:  ["Sam", "Kira", "Tomo", "Pete"]