//Activar button
var btn = document.getElementById('btn'), contador =0;
function move_page(){
    if(contador==0){
        location.href = "iniciar_sesion.html";
    }
}
btn.addEventListener('click',move_page,true);