function crearPersona( nombre, apellido)
{
    return{ nombre, apellido }
}

//Función flecha
const crearPersona2 = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Michell','Aviles');
const persona2 = crearPersona2('Susan','Litardo');
console.log(persona);
console.log("flecha: ",persona2);


function imprimeArguentos(){
    console.log(arguments);
}
imprimeArguentos(10, true, false, 'Susan', 'Hola');

//const imprimeArguentos2 = (...arguments) => {console.log(arguments);}
const imprimeArguentos2 = (edad,...args) => {
    // console.log(edad,args);
    return args;
}
const [casado, vivo, nombre, saludo] = imprimeArguentos2(11, true, false, 'Susan', 'Hola');
console.log({casado, vivo, nombre, saludo});

//cambiar nombre de la variable
const { apellido: nuevoApellido } = crearPersona2('Susan','Litardo');
console.log({nuevoApellido});

let tony = {
    nombre: 'Susan',
    codeName: 'Su',
    vivo: false,
    edad: 24,
    trajes:['Mark I', 'Mark V', 'Hulkbuster'],
};

/* const imprimePropiedades = () => {
    console.log('nombre',tony.nombre  );
    console.log('codeName',tony.codeName);
    console.log('vivo',tony.vivo  );
    console.log('edad',tony.edad  );
    console.log('trajes',tony.trajes  );
} */

const imprimePropiedades = ({nombre, codeName, vivo, edad=15, trajes}) =>{
    console.log({nombre}); 
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes}); 
}
imprimePropiedades(tony);


