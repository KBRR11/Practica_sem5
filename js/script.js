var n;
function acciones(){


 n = document.getElementById("cajita").value;


 if(n>100){
    var para = document.createElement("button") ;
    var node = document.createTextNode("Boton");
    para.appendChild(node);
    var element =document.getElementById("cuerpito");
    element.appendChild(para); 
    ;
 }else if(n<100){
    var paras = document.createElement("input") ;
    var nodes = document.createTextNode("Hello world");
    paras.setAttribute("value","Hello World");
    paras.appendChild(nodes);
    var elemento =document.getElementById("cuerpito");
    elemento.appendChild(paras) ;
 }else{
    var paro = document.createElement("p") ;
    var nodo = document.createTextNode("Error de Datos");
    paro.setAttribute("value","color", "red");
    paro.appendChild(nodo);
    var elementito = document.getElementById("cuerpito");
    elementito.appendChild(paro);
 }

}