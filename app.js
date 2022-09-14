const filesystem = require('fs')
filesystem.writeFileSync('hola.txt','Hola desde node')



console.log("hola desde node")
const arreglo = [5000, 60, 50, 100, 10 ,20, 10000, 0, 120, 2000, 340, 1000, 50];

/*for(let item in arreglo){
    console.log(item);
}
for(let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item);
    
}*/
//const numero = prompt("Ingresa número");
//console.log(numero);

const http = require('http');
const server = http.createServer( (request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write('<DCOTYPE.html>');
    response.write("<h1>Hola Mundo</h1>");
    //response.write("Este el numero:" + numero);
    response.end();   
});
server.listen(3000);

let arrays = [1,1,2,3,5,6,7,8,10];

function arreglos(arr){
    let promedio = 0;
    let suma = 0; 
    let cont = 0;
    for(let i = 0; i < arrays.length; i++ ){
        suma = suma + arrays[i];
        cont++;
    }
    promedio = suma/arrays.length
    console.log(promedio);
}
function file(palabra){
    const newfile = require('fs');
    newfile.writeFileSync('newfile.txt',palabra);
}
arreglos(arrays);
