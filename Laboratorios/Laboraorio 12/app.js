const bodyParser = require('body-parser');
const { request, response } = require('express');
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
//Declaracio de un Middleware
/*app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});*/
const usuario = [];
app.use((request,response,next) =>{
    console.log('Un Midelware');
    next();
});
//Declarar pequeño html
app.get('/user/new',(request, response, next) =>{
    let html = '<!DOCTYPE html>';
    html += "<h1>Register User</h1>";
    html += '<form action = "/user/new" method = "POST" >';
    html += '<label for = "nombre"> Nombre usuario</label>';
    html += '<input type = "text" id="nombre" name="nombre">';
    html += "<br><br>";
    html += '<input type = "submit" id="enviar" name="enviar" value="Registrar">';
    html += '</form>';
    response.send(html);
});
app.get('/perfil',(request,response,next) => {
    let html = '<!DOCTYPE html>';
    html += "<h1>Perfil de Usuario</h1>";
    html += "<ul>"
    for (let u of usuario){
        html += u;
    }
    html += "</u>";
    response.send(html);
});
app.post('/user/new',(request, response, next) => {
    console.log(request.body);
    usuario.push(request.body.nombre);
    response.redirect('/Perfil');
});

app.use('/c',(request,response,next) =>{
    response.send('La respuesta de la ruta /c');
});
app.use('/inicio',(request,response,next) =>{
    response.send("¡Hola Mundo!");
});

app.listen(3000);