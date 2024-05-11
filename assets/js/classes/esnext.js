class Retangulo{
    #area = 0;
    constructor(base =0, altura = 0)
    {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }
    calcularArea(){
        console.log(this.#area);
    }
}

const retangulo = new Retangulo(10, 15);

retangulo.calcularArea();
console.log(retangulo);