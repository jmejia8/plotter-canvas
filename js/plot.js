window.addEventListener('load',init,false);

var c = null;
var ctx = null;
var origen=[249, 249];   //centro (249,249)
var escala =25;

function init () {
	c = document.getElementById('plotter');
	ctx = c.getContext('2d');
}

function plot (x,y, color) {
    n=x.length;
    if (y.length!=n) {error("Ha ocurrido un error al graficar.");return 0;};
    ctx.beginPath();
    switch(color){
        case 'b': ctx.strokeStyle='blue';break;
        case 'g': ctx.strokeStyle='green';break;
        case 'r': ctx.strokeStyle='red';break;
        case 'o': ctx.strokeStyle='orange';break;
        case 'p': ctx.strokeStyle='purple';break;
    }
    for (var i = 0; i < n; i++) {
        ctx.lineTo(origenX(x[i]),origenY(y[i]),1,1);
    };
    ctx.stroke();
}

function linspace (a,b,n) {
    var l = new Array(n), part=(b-a)/n;
    for (var i = 0; i<n-1; i++) {
        l[i]=a;
        a+=part;
    };
    l[n-1]=b;
    return l;
}

function f (x) {
	return x*x*x;
}
function evaluarFuncion(x, f) {
    n=x.length;
    var y=new Array(n)
    for (var i = 0; i < x.length; i++) {
        y[i]=f(x[i]);
    };
    return y;
    
}
function generar_funcion () {
	x=linspace(-5,5, 1000);
	y=evaluarFuncion(x,f);
	plot(x,y, 'b')
}

function origenX(x){
	return origen[0]+x*escala;
}
function origenY(y){
	return origen[1]-y*escala;
}
// function plot () {
// 	ctx.fillStyle = "#FF0000";
// 	ctx.moveTo(0,0);
// 	ctx.lineTo(200,100);
// 	ctx.stroke();
// }