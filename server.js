//Laboratorio 10
//1. Crear varias rutas

// Activar server
const http = require('http');

const server = http.createServer((request,response) =>  { 
    console.log(request.url);
    if(request.url == "/f1"){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE.html>');
        response.write('<h1>Bienvenido a la Formula 1 </h1>');
        response.write("<u1>");
        response.write("<u1>");
        response.end();
    }else if(request.url == "/f1/autos" && request.method == "GET"){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE.html>');
        response.write('<h1>Registrar Robot </h1>');
        response.write("<u1>");
        response.end();
    }
})
server.listen(3000);