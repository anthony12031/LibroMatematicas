//1.1Introducción
var board = JXG.JSXGraph.initBoard('box', {boundingbox: [-10, 10, 10, -10], axis: true,showCopyright:false});

var p=dibujarPunto(board,3,2,{style:5,color:'blue',name:'3+2i',fixed:false,showinfobox:false});


var p2=dibujarPunto(board,function(){return p.X() },function(){return -p.Y() },{style:5,color:'blue',name:p.X()+'-'+p.Y()+'i',fixed:false,showinfobox:false})

p.on('drag',function(){
    p.setProperty({name:p.X().toPrecision(2)+' + '+p.Y().toPrecision(2)+'i'});
    p2.setProperty({name:p2.X().toPrecision(2)+'  '+p2.Y().toPrecision(2)+'i'});
});

//1.2 Formas de representar un número complejo

var board2 = JXG.JSXGraph.initBoard('box2', {boundingbox: [-10, 10, 10, -10], axis: true,showCopyright:false});
 
var org = board2.create('point', [0,0], {style:10,visible:true,fixed:true,name:' '});
var x = board2.create('point', [2,2], {style:5,color:'blue',name:'x'});
var y = board2.create('point', [-1,-3], {style:5,color:'blue',name:'y'});
var xy = board2.create('point', 
    ["X(x)+X(y)","Y(x)+Y(y)"], {style:7,color:'green',name:'x+y'});
var ax =board2.create('arrow', [org,x], {strokeColor:'blue'});
var ay =board2.create('arrow', [org,y], {strokeColor:'blue'});
var axy =board2.create('arrow', [org,xy], {strokeColor:'red'});
var ax2 =board2.create('arrow', [x,xy], {strokeColor:'blue',strokeWidth:1,dash:1});
var ay2 =board2.create('arrow', [y,xy], {strokeColor:'blue',strokeWidth:1,dash:1});


