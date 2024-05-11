
let juegos = ['Zelda', 'Mario','Metroid','Chrono'];
console.log('Largo:',juegos.length);

let primero = juegos[2-2];
let ultimo = juegos[juegos.length-1];

console.log({primero, ultimo});

juegos.forEach( (elemento, indice, arr) =>{
    console.log({elemento, indice, arr});
});

//Para insertar un nuevo elemento al final
let nuevaLongitud=juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});


//Para insertar un nuevo elemento al inicio
nuevaLongitud=juegos.unshift('Fire emblem');
console.log({nuevaLongitud, juegos});

//Borrar el final
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});


//Borrar en posición especifica

let posicion = 1;

let juegosBorrados=juegos.splice(posicion, 2);
console.log({juegosBorrados, juegos});

let metroidIndex = juegos.indexOf('Metroid');
console.log(metroidIndex);


