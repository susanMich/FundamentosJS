
console.log('While');
const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
let i = 0;

while( i < carros.length ) {
    console.log(carros[i]);
    i++;
}

//El ciclo while no se ejecuta con los siguientes valores
//undefined
//null
//false
/* while( carros[i] ) {
    if( i===1 ){
       i++;
       continue;
    }

    console.log(carros[i]);
    i++;
}
 */
console.log('Do while');
//El do while va a ejecutar el bloque interno al menos una vez
let j = 0;
do{
    console.log(carros[j]);
    j++;
}while( carros[j] );
