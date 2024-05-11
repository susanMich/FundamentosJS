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

class Heroe extends Persona{
    clan = 'Sin clan';

    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        this.clan = 'Avengers';
    }
    quienSoy(){
        console.log(`Soy ${this.nombre} del clan ${this.clan} `);
        super.quienSoy();
    }
    
}
const spiderman = new Heroe('Michell', 'abv123', 'hello world');
//const spiderman = new Heroe();
console.log( spiderman );
spiderman.quienSoy();