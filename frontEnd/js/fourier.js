//Crear el eje de coordenadas
JXG.Options.board.pan.needShift=false;
JXG.Options.board.zoom.wheel=true;
JXG.Options.text.useMathJax = true;
board = JXG.JSXGraph.initBoard('box', {boundingbox: [-15, 30, 15, -2], axis: true,showCopyright:false});

n = board.create('slider',[[8,10],[13,10],[1,1,20]], {name:'n',snapWidth: 1})




//Definicion de algunas funciones matematicas
// f(x) = x
fx1 = function(x){return x }
// f(x) = pi/2
fx2=function(x){return Math.PI/2 }
// f(x) = 2pi - x
fx3 = function(x){return 2*Math.PI - x }
//f(x) = x²
fx4 = function(x){return x*x}

var l = 9
var T = 2*l;

board.create('functiongraph',[fx4,-l,l],{strokeWidth:2});



a0func = function(fdex,l){
    return (1/l)*JXG.Math.Numerics.I([-l,l],fdex)
}

a0medios = a0func(fx4,l)/2;
console.log("a0/2: "+a0medios);

fx = function(x){
    
var suman = 0;
var sumbn = 0;
   
an = function(n){
integralan = function(fdex,l,linf,lsup,n){
        var i = JXG.Math.Numerics.I([linf,lsup],function(x){
            return (1/l)*Math.cos(n*Math.PI*x/l)*fx4(x);
        });
    return i;
}
var sum = integralan(fx4,l,-l,l,n);

return sum;
}
for(var i= 1;i<=n.Value();i++){
suman += an(i)*Math.cos(i*Math.PI*x/l);
//console.log(suman)  
}
    
    return a0medios+suman+sumbn;
}

board.create('functiongraph',[fx,-l,l],{strokeColor:'red',strokeWidth:2});


/*board.create('text',[-13,20,function() { 
    return "`f(x) = a_0 + sum_(i=1)^n a_ncos((2pinx)/T)+b_nsin((2pinx)/T)`";
  }
  ], {fontSize:12,strokeColor:'red',strokeWidth:4});*/

