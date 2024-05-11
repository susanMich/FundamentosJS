const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

 console.warn('Not o la negación');
 console.log(true); //true
 console.log(!true);//False
 console.log(!false);//true

 console.log(!regresaFalse());

 console.log('And'); //resultara true si todos los valores son verdaderos
 console.log(true && true);
 console.log(true && false);
 console.log(true && !false);

 console.log( regresaFalse() && regresaTrue());
 console.log( regresaTrue() && regresaFalse());

 console.log('4 condiciones ',true && true && true && false);//False

 console.log('OR'); //Para que este operador regrese true al menos una condición debe de devolver true
 console.log(true || false);
 console.log(false || false);
 console.log( regresaTrue() || regresaFalse());
 console.log('4 condiciones ',true || true || true || false);

 console.warn('Asignaciones');

 const soyUndefine = undefined;
 const soyNull = null;
 const soyFalse = false;
 
 const a1 = false && 'Hola mundo' && 150;
 const a2 = 'Hola' && 'Mundo' && soyFalse && true;
 const a3 = soyFalse || 'Ya no soy falso';
 const a4 = soyFalse || soyNull || soyUndefine || 'Ya no soy falso de nuevo' || true;
 const a5 = soyFalse || regresaTrue() || soyUndefine || 'Ya no soy falso de nuevo' || true;
 

 console.log({ a1, a2, a3, a4, a5 });
