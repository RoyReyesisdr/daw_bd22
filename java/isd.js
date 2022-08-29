let elemento_html = document.getElementById("pregunta4");
//console.log(elemento_html);

elemento_html.onclick = () => {
    console.log("click");
    let span = document.getElementById("info_html");
    span.innerHTML = ': No tengo la respuesta a esta pregunta';
}
//elemento_html.onclick = () => {
//    console.log("Clic");
//}