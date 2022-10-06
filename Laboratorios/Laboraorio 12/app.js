const bodyParser = require('body-parser');
const { request, response } = require('express');
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
const path = require('path');

app.use(express.static(path.join(__dirname,'public'))); //Instalación del comando estatico para incluir el css en en HTML
app.set('view engine','ejs');
app.set('views','views');
//Declaracio de un Middleware
/*app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});*/
//Llamar modulos
const misRutas = require('./routes/user.routes');
app.use('/user', misRutas);

app.use((request,response,next) =>{
    console.log('Un Midelware');
    next();
});
// Ruta a C++
app.get('/lenguaje/cmas',(request,response,next) => {
    let html = '<!DOCTYPE html>';
    html += "<h1>Inicio C ++</h1>";
    response.send(html);
});

// Ruta a python
app.get('/lenguaje/python',(request,response,next) => {
    let html = '<!DOCTYPE html>';
    html += "<h1>Inicio python</h1>";
    response.send(html);
}); 
// Ruta C
app.use('/c',(request,response,next) =>{
    response.send('La respuesta de la ruta /c');
});
app.use('/inicio',(request,response,next) =>{
    response.send("¡Hola Mundo!");
});
//Si la ruta no esta mandar un 404
app.use((request,response,next) => {
    response.status(404);
    response.sendFile(path.join(__dirname,'views','error.html'));
});
app.listen(3000);