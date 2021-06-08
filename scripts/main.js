/* 1- 
- Crea un array amb el teu nom on cada posició correspongui a una lletra.
- Fes un bucle que recorri aquest array i mostri per consola cadascuna de les lletres. */

let nom = ["D", "A", "V", "I", "D"];

for (let i = 0; i < nom.length; i++) {
    console.log(nom[i]);
}


/* 2- 
- Al bucle, si la lletra és una vocal imprimeix a la consola: ‘He trobat la VOCAL: __’. Sinó, imprimeix: ‘He trobat la CONSONTANT: __’.
- Si trobes un número, mostra per pantalla: ‘Els noms de persones no contenen el número: __’ */

let nomEx2 = ["D", "A", "V", "I", 1, "D"];
let mensaje = "Partim del nom: ";

for (let i = 0; i < nomEx2.length; i++) {
    mensaje += nomEx2[i];    
}

mensaje += "."

console.log(mensaje);

for (let i = 0; i < nomEx2.length; i++) {
    if (!isNaN(nomEx2[i])) {
        console.log("Els noms de persones no contenen el número: " + nomEx2[i]);
    }
    else {
        switch (nomEx2[i]) {
            case "A":
                console.log("He trobat la VOCAL: " + nomEx2[i]);
                break;
            case "E":
                console.log("He trobat la VOCAL: " + nomEx2[i]);
                break;
            case "I":
                console.log("He trobat la VOCAL: " + nomEx2[i]);
                break;
            case "O":
                console.log("He trobat la VOCAL: " + nomEx2[i]);
                break;
            case "U":
                console.log("He trobat la VOCAL: " + nomEx2[i]);
                break;
            default:
                console.log("He trobat la CONSONANT: " + nomEx2[i]); 
        }
    }    
}


/* 3- Emmagatzemar en array les lletres i nombre de vegades que apareixen. Utilitza el mètode map().*/
let nomEx3 = ["D", "A", "V", "I", "D", "D", "D", "A", "V", "V"];

let nomMap = nomEx3.map(function(letra){
    //Creamos un array con todas las repeticiones de una letra
    let nomFilter = nomEx3.filter(function(caracter){
        return caracter == letra;
    });

    return nomFilter[0] + ": " + nomFilter.length;

});

console.log(nomMap);

let nomMap2 = nomEx3.map(function(letra){
    let numRepeticiones;
    let contador = 0;
    
    for (let i = 0; i < nomEx3.length; i++) {
        if (letra == nomEx3[i]) {
            contador++;
        }
    }

    numRepeticiones = letra + ": " + contador;

    return numRepeticiones;    
});

console.log(nomMap2);


/* 4-
- Crea una altra array amb el teu cognom on cada posició correspongui a una lletra.
- Fusiona els dos arrays en un. A més, afegeix una posició amb un espai buit entre la primera i la segona. És a dir, partim de 'array name i surname i al acabar l’execució només tindrem una que es dirà fullName.*/

let arrName = ["D", "A", "V", "I", "D"];
let arrSurname = ["C", "A", "S", "T", "R", "I", "L", "L", "Ó", "N"];
let arrFullName = arrName.concat(" ").concat(arrSurname);

console.log(arrFullName);


/* Nivel 2- Crea una funció que retorni un array amb tots els email (sense repetir) del següent text:*/
var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email'; 

console.log(returnArrEmail(str));

function returnArrEmail (texto) {    
    const expresion =/([a-z0-9-]+)@([a-z0-9-ñ]+)\.([a-z]{2,8})(\.[a-z]{2,8})?/gi;
    let validation = texto.match(expresion);
    return validation;
}