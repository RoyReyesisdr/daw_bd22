//Consola(log, info, warm, error)
console.log("Hola Munndo");
console.info("Esto es lo importatne");
console.warn("Esto es una advertencia");
console.error("Esto es un error");
console.assert(1 === 1);

//== compara valores
console.assert(1 == true);

//=== Compara valor y tipo de dato
console.assert(1 === true);

console.assert(1 == "1");

//Variables constantes,
//Las constantes no se pueden modificar desde el cliente
const precio = 59.99;

//manera antigua de declarar variables, no se recomienda porque
//tiene alcance de función
var robot = "Fanuc";

for(var i = 0; i<10; i++){
    console.log(i);
}

console.log(i);

// Manera nueva de declarar variables, tiene alcance de ámbito {}
let carrera = "ISDR";

console.log(carrera)
for(var j = 0; j<10; j++){
    console.log(j);
}

//La siguiente línea marca error porque 1 murio en el ciclo for
// Console.log(j)

console.log(1 + 3 + "4")
console.log("3" + 4 + 1)

//Alert, prompt, confirms
alert("HOLA :)");

const nombre = prompt("Como te llamas?");
console.log("hola" + nombre);

const respuesta = confirm("Tienes sueño?");

if(respuesta)
{
    console.log("NECESITAS CAFE!");
}else
{
    console.log("NO TOMES CAFE");

}

//Funciones
function tomar_cafe ()
{
    console.log("Glu glu glu");

}

tomar_cafe();

function tomar(bebida){
    console.log("Tomando " + bebida)
}

// Funciones modernas
let comer = () => {
    console.log("Comiendo");
}

comer();

let comer_variado = (comida) => {
    console.log("Comiendo " + comida);
} 
comer_variado("Torta ");

comer = comer_variado;

comer("sandwich ");

// Arreglos
// ARREGLOS

const arreglo = [1,2,3,"ELEMENTO"];
arreglo.push("ISDR");
arreglo[10] = "Uno mas";
console.log(arreglo);

//Arreglos asociativos

arreglo["ISDR"] = "Ingeniero en Sistemas digitales y Robotica";
console.log(arreglo);

document.write(arreglo);