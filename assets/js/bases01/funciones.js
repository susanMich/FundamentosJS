function saludar(nombre){
    /* console.log(arguments)
    console.log('Hola '+nombre); */
    return 1;
}

const saludar2 = function saludar(nombre){
    console.log('Hola '+nombre);
}
saludar2('Susan');

const saludarFlecha = () =>{
    console.log('Hola mundo f');
}

const saludarFlecha2 = (nombre) => {
    console.log("Hola "+nombre);
}

/* saludarFlecha();
saludarFlecha2('Michell'); */

const retornoDeSaludar = saludar('Susan',40,true, 'Costa Rica');
console.log(retornoDeSaludar);

function sumar(a, b){
    return a+b;
}
//Funcion flecha
/* const sumar2 = (a,b) => {
    return a + b;
} */
const sumar2 = (a,b) =>  a + b;
console.log("función flecha: "+sumar(4,9));
console.log(sumar(1,2));

function getAleatorio(){
    return Math.random();
}
console.log(getAleatorio());

//Función aleatorio con flecha sin {}

const getAleatorio2 = () => Math.random();
console.log("Aleatorio 2: ",getAleatorio2());
