/**
 * Días de semana a las 11,
 * pero los fines de semanas abrimos a las 9  
 */

//Entra a un sitio web, para consultar si está abierto hoy...
const dia = 1;// 0: domingo, 1: Lunes...
const horaActual = 11;

let horaApertura;
let mensaje; //Está abierto, Está cerrado, hoy abrimos a las XX

//if(dia === 0 || dia === 6){
/* if([0,6].includes(dia)){
    console.log('Fi de semana');
    horaApertura = 9;
}else{
    console.log('Día de semana');
    horaApertura = 11;
} */
//Esto es lo mismo del if de arriba
horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;

/* if( horaActual >= horaApertura ){
    mensaje = 'Está abierto';
} else {
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
} */

mensaje = (horaActual >= horaApertura) ? 'Está abierto' : `Está cerradp, hoy abrimos a las ${horaApertura}`;
console.log({ horaApertura, mensaje });