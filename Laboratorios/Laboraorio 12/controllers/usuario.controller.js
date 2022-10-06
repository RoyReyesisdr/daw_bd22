const path = require('path');
//const Robot = require('../models/robot.model');
const usuario = [];

exports.get_new = (request, response, next) => {
    response.render(path.join('users','new.ejs'), {
        info: '',
    }); 
};

exports.post_new = (request, response, next) => {
    console.log(request.body);
    usuario.push(request.body.nombre);
    response.redirect('/user/perfil');
};

exports.get_perfil =  (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'previous',  'frontend', 'git.html'));
};

exports.get_root = (request, response, next) => {
    
    let info = request.session.info ? request.session.info : '';

    request.session.info = '';

    response.render(path.join('robots', 'list.ejs'), {
        robots: Robot.fetchAll(),
        ultimo_robot: request.session.ultimo_robot ? request.session.ultimo_robot : '',
        info: info,
    }); 
};