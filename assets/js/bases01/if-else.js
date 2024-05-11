let a = 5;
if ( a >= 10 ) {
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}
console.log('Fin de programa');


const hoy = new Date();
let dia = hoy.getDay(); //0: domingo, 1: lunes, 2: martes, 3:miercoles....
console.log(dia);

if(dia === 0){
    console.log('Domingo');
}else if(dia===1){
    console.log('Lunes');
}else{
    console.log('No es lunes ni domingo');
}

//Sin usar if el, o switch, unicamete objetos
dia = 5;
//ARREGLOS
let diaLetras = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
];

console.log('Día arreglo: ',diaLetras[dia] || 'Día no valido');

//OBJETOS
const diaLetras2 = {
   0: 'Domingo',
   1: 'Lunes',
   2: 'Martes',
   3: 'Miércoles',
   4: 'Jueves',
   5: 'Viernes',
   6: 'Sábado',
}
console.log('Día objeto: ',diaLetras2[dia] || 'Día no valido');