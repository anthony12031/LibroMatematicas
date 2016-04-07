var dibujarPunto = function(board,x,y,propiedades){
    xy = board.create('point',[x,y],propiedades);
    return xy;
};

var dibujarRecta = function(board,p1,p2,propiedades){
    recta =  board.create('arrow', [p1,p2], propiedades);
    return recta;
};

