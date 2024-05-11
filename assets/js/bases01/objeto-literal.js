let personaje = {
    nombre: 'Susan',
    codeName: 'Su',
    vivo: false,
    edad: 24,
    coordenadas:{
        latitud: 34.034,
        longitud: -118.70
    },
    trajes:['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
      zip: '10880, 90265',
      ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity war',
};

console.log(personaje);
console.log('Nombre: ', personaje.nombre);
console.log('Nombre: ', personaje['nombre']);
console.log('Edad: ', personaje.edad);
console.log('Coordenadas: ', personaje.coordenadas);
console.log('Latitud: ', personaje.coordenadas.latitud);
console.log('trajes: ', personaje.trajes.length);
console.log('traje 1: ', personaje.trajes[1]);
console.log('ultimo traje', personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Última película', personaje['ultima-pelicula']);

delete personaje.edad;
personaje.casado=true;
console.log(personaje);

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//Bloquear las modificaciones en el arreglo
Object.freeze(personaje);
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});