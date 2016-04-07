var p1 = [1,2];
var p2 = [3,4];
var p3 = [2,4];
var p4 = [5,1];
var p5 = [3,4];
var p6 = [2,-3]; 
var puntos = [p1,p2,p3,p4,p5,p6];
var indice = 0;
var indPre = 0;
var nres = [[4,6],[7,5],[1,7]]
var res=['4+6i','7+5i','1+7i'];
var pro = ['(1+2i) + (3+4i)','(2 + 4i) + (5 + i)','(3+4i) -(2-3i)']


//Crear el eje de coordenadas
board = JXG.JSXGraph.initBoard('box', {boundingbox: [-10, 10, 10, -10], axis: true,showCopyright:false});

var org,x,y,xy,axy;
//Graficar el origen(0,0)
org = board.create('point', [0,0], {style:10,visible:true,fixed:true,name:' '});

var verificarRespuesta = function (){
r = $("#respuesta").get(0).value; //Obtener la respuesta del usuario
r = r.replace(/\s/g,''); // Eliminar caracteres en blanco
if(r === res[indPre]){ // Comprobar que la respesta es correcta
$("#respuesta").get(0).value = 'CORRECTO';
    //Mostar graficamente la respuesta al usuario
   graficarRespuesta();
$("#siguiente").get(0).style.display="inline";
indPre++;
}
else{
    $("#respuesta").get(0).value = 'Intenta de nuevo';
}
}

var dibujarRecta = function(p1,p2,propiedades){
    recta =  board.create('arrow', [p1,p2], propiedades);
    return recta;
};
var dibujarPunto = function(x,y,propiedades){
    xy = board.create('point',[x,y],propiedades);
    return xy;
};

var graficarRespuesta = function(){
    xy = dibujarPunto(nres[indPre][0],nres[indPre][1],{style:7,color:'green',name:nres[indPre][0]+'+'+nres[indPre][1]+'i'});
    axy = dibujarRecta(org,xy,{strokeColor:'red'});
    var ax2 = dibujarRecta(x,xy,{strokeColor:'blue',strokeWidth:1,dash:1}); 
    var ay2 = dibujarRecta(y,xy,{strokeColor:'blue',strokeWidth:1,dash:1});
};
var graficarProblema = function(){
    //Primer numero complejo
    x= dibujarPunto(puntos[indice][0],puntos[indice][1],{style:5,color:'blue',name:puntos[indice][0]+'+'+puntos[indice][1]+'i',fixed:true});
    //Segundo numero complejo
    y = dibujarPunto(puntos[indice+1][0],puntos[indice+1][1],{style:5,color:'blue',name:puntos[indice+1][0]+'+'+puntos[indice+1][1]+'i',fixed:true})
    //Rectas de los numeros complejos
    var ax = dibujarRecta(org,x,{strokeColor:'blue'});    
    var ay = dibujarRecta(org,y,{strokeColor:'blue'});
}
var eliminar = function(){
board.removeObject(x);
board.removeObject(y);
board.removeObject(xy);
board.removeObject(axy);  
$("#respuesta").get(0).value = ''; //Limpiar el campo de respuesta
$("#siguiente").get(0).style.display="none"; // Ocultar el boton pra cambiar el problema
}

var cambiarProblema = function(){
if(pro[indPre]){ // Si hay mas problemas entonces
$("#problema").get(0).innerHTML = pro[indPre] //Cambiar el problema en pantalla
eliminar();//Eliminar las graficas del problema anterior
indice+=2;
graficarProblema(); 
}    

}

graficarProblema();