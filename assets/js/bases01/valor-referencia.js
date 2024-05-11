let a = 10;
let b = a;
a=30;

console.log({ a, b });

let juan = { nombre: 'Juan' };
let ana = { ...juan };
ana.nombre = 'ana';
console.log({juan, ana});

const cambiaNombre = ( {...persona} ) => {
    persona.nombre='Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let Tony = cambiaNombre(peter);

console.log({ peter,Tony });

//Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('spread');
const otrasFrutas1 = [...frutas];
console.timeEnd('spread');

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

otrasFrutas.push('Mango');

console.table({frutas,otrasFrutas})

//PASO POR VALOR
const sumar = (numero) => numero += 1;

  let num = 5;
  sumar(num);
  console.log('Paso por valor: ', num); 

  //PASO POR REFERENCIA
const modificarObjeto = (objeto) => { objeto.nombre='Nuevo nombre'; }

let persona = { nombre: 'Susan' };
modificarObjeto(persona);
console.log('Paso por referencia; ',persona.nombre);