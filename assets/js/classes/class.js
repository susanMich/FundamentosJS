//Crear clases en llaves
class Persona {
    
    static _conteo = 0;
    
    static get conteo (){
        return Persona._conteo + 'instancias';
    }

    static mensaje(){
        console.log('es un método estatico');
    }
    //Inicialización de propiedades de clases
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';
    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ){
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;
        Persona._conteo++;
    }
    //Set para establecer un valor
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }
    //Get para recuperar un valor
    get getComidaFavorita() {
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }
    //Crear métodos
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo} `);
    }
    
    miFrase()
    {
        this.quienSoy();
        console.log(`${ this.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new Persona('Michell', 'abv123', 'hello world');
const spiderman01 = new Persona('Susan', 'def456', 'Bye world');

spiderman.quienSoy();
spiderman.miFrase();

console.log( spiderman01 );
spiderman.setComidaFavorita = 'el pay de cereza';


console.log( spiderman.getComidaFavorita);

console.log( spiderman );

//Persona._conteo = 2;
console.log('Conteo stático', Persona._conteo);

console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo';
console.log(Persona.propiedadExterna);