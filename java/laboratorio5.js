const dato = prompt("Ingresa número")
console.log("hola" + dato)
document.write("Esta es una prueba")


// Implementar funcion 2
//Generar dos numero aleatorios en javascript
var x = Math.floor(Math.random()*100);
console.log(x);

var y = Math.floor(Math.random()*100);
console.log(y);

sum = x + y;
console.log(sum);

console.time("t1");
const calculo = prompt("Ingrese el valor de la suma")
if (sum == calculo){
   console.log("Suma correcta")
}else{
   console.log("Suma incorrecta")
}
console.timeEnd("t1");
console.log("t1")


//Implementar funcion 3 
// Funcion contador
function contador(N){
  let arr = [N];
  //Llenado del array
  for(var i = 0; i < N; i++){
    valor = prompt("Ingresa dato: ");
    arr[i] = valor;
    console.log(arr[i]);
  }
  //Conteno de 0, negativos y positivos
  ceros = 0;
  negativo = 0;
  pos = 0;
  for(var i = 0; i < N; i++){
    if(arr[i] == 0){
        ceros++;
    }else if(arr[i] < 0){
        negativo++;
    }
    else if(arr[i] > 0){
        pos++;
    }
  }
  console.log("No. ceros: " + ceros);
  console.log("No negativos: " + negativo);
  console.log("No positivo: " + pos);
}
contador(5);

// Funcion 4 Promedios
function promedios(N){

}

// Funcion inverso
function inverse(N){
    if(N >= 10){
      var div = N/10;
      modulo = N%10;
      console.log(modulo + div)
    }else{
        console.log("El número es inválido")
    }
}
inverse(17);