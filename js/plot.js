window.addEventListener('load',init,false);

var c = null;
var ctx = null;
var origen=[249, 249];   //centro (249,249)
var escala =25;          // si 25 ent. 1:1

function init () {
	c = document.getElementById('plotter');
	ctx = c.getContext('2d');
    ctx.clearRect(0,0,500  , 500);
    ///////   rectas plano   //////////
    ctx.fillStyle='#D0D0D0';
    ctx.fillRect(0,origenY(0)+1,500,1);
    ctx.fillRect(origenX(0)+1,0,1,500);
    ///////////////////////////////////
    ctx.fillRect(origenX(0),origenY(0),3,3);
    generar_funcion();
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
        case 'k': ctx.strokeStyle='black';break;
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
	return x*Math.sin(x);
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
	x=linspace(-10,10, 10000);
	y=evaluarFuncion(x,f);
	plot(x,y, 'b')
}

function origenX(x){
	return origen[0]+x*escala;
}
function origenY(y){
	return origen[1]-y*escala;
}

function zoomIn () {
    if (escala>500) {escala=500;};
    escala+=25;
    init();

}
function zoomOut () {
    escala-=25;
    if (escala<=25) {escala=25;};
    init();
}

function moverR(){
    origen[0]+=10;
    init();
}
function moverL(){
    origen[0]-=10;
    init();
}
function moverUp(){
    origen[1]-=10;
    init();
}
function moverDown(){
    origen[1]+=10;
    init();
}
function reset(){
    origen=[249, 249];   //centro (249,249)
    escala =25;          // si 25 ent. 1:1
    init();
}
// function plot () {
// 	ctx.fillStyle = "#FF0000";
// 	ctx.moveTo(0,0);
// 	ctx.lineTo(200,100);
// 	ctx.stroke();
// }
