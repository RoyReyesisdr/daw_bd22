const express = require('express');
const router = express.Router();
const path = require('path');


//Declarar pequeño html
// Registro de usuario datos
router.get('/new',(request, response, next) =>{
    
});
router.post('/new',(request, response, next) => {
    console.log(request.body);
    usuario.push(request.body.nombre);
    response.redirect('/user/perfil');
});
router.get('/perfil',(request,response,next) => {
    let html = '<!DOCTYPE html>';
    html += "<h1>Perfil de Usuario</h1>";
    html += "<ul>"
    for (let u of usuario){
        html += u;
    }
    html += "</u>";
    response.send(html);
});
router.get('/git', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'previous',  'frontend', 'git.html'));
});
module.exports = router;