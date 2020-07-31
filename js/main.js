/// prueba de img
//var carpeta = "image/*";
//
//console.log(carpeta)
//var images = [];
//images.forEach(function(img) {
//  var image = new Image();
//  image.src = carpeta + "/" + img;
//  image.onerror = error;
//	console.log(image.src)
//});
//
//function error(e) {
//  console.log(e)
//}



//curso javascript


var boton=document.querySelector('.button_1')

boton.addEventListener('click', function(){
	console.log("boton pulsado");
	
})
// Register a mouseover event on this div, which calls an animation
//option1
function docwrite (){
	var nodes=document.getElementById("text_p").getElementsByTagName("p");
    nodes[0].style.border = "solid";
	nodes[0].style.borderColor="fuchsia"


	var p=document.getElementById("p_javascript")
	p.innerHTML="Hello ";
//	p.style.color= "green";
	
	
};
//option-2
function apendToDoc () {
	var nodes=document.getElementById("text_p").getElementsByTagName("p");
    nodes[1].style.border = "solid";
	nodes[1].style.borderColor="aquamarine"
	var p=document.getElementById("p_javascript2");
	p.append("Hello ");
	p.style.color="white"
	p.style.background= "#6F5499";
}  


//option-3
function multiplyDoc () {
	var nodes=document.getElementById("text_p").getElementsByTagName("p");
    nodes[2].style.border = "solid";
	nodes[2].style.borderColor="chartreuse"

	var op_value=document.getElementById("input_multiply").value;
	var p=document.getElementById("p_javascript3");
	p.style.color="white"
	p.style.background= "#F38630";
	var x=0;
//	console.log (op_value);
    while (x < op_value) {
		x++;
		p.append("hello ");
	}

}    

//console tests
var nombre="Serguei";

console.log("Hola mi nombre es: ",nombre);

//alert("This is JS project tests by Serguei")

function saludo() {
	var nombre = "Serguei Castillo";
	console.log(nombre);
}

saludo();

var edad = 25;
var cantidad ="100"
var nuevacantidad= Number(cantidad);
var fecha = new Date();
var persona = {nombre: 'Serguei', edad: '35'}
var personas= [
	{nombre: 'Serguei1', edad: '24'},
	{nombre: 'Serguei2', edad: '30'},
	{nombre: 'Serguei3', edad: '35'},
	persona
]

var personaJSON = JSON.stringify(persona);
var nuevaPersonaJSON = JSON.parse(personaJSON)

//Pruebas aritmeticas

var datoA = 10
var datoB= 20

var suma = datoA + datoB
var resta = datoA - datoB
var multiplicacion = datoA * datoB
var division = datoA / datoB
var residuo = datoA % datoB
var incremento = datoA
var decremento = datoB

var ternario = 10>20 ? "si" : "no"

//Condicionales
 if (datoA>datoB){
	 resultado= "la condicion se cumplio";
 } else {
	 resultado="no Se cumplio"
 }

//if else 
//	if anidada

switch (edad){
	case 30:
		switchres ="la edad es 30"
	break;
	case 35:
		switchres="la edad es 35"
	break;
	default:
		switchres="no se ha cumplido ninguno"
	break;
}

//loops

//var producto = 5;
//
//for (let contador = 1;contador<=producto;contador++){
//	console.log("producto #"+ contador);
//}

//while (producto>0){
//	console.log('Producto Vendido'+producto);
//	producto--;
//}

//do {
//	console.log ("producto no vendido"+producto)
//	producto--;
//}
//while(producto>=1)

//var contador = 0;
//var cuenta = 0;
//
//for (contador = 0; contador <= 20; contador++) {
	//	if (contador == 5) {
	//		break;
	//	}
	//	if ( contador % 2 == 0) {
	//		continue;
	//	}
	//	cuenta++;
	//}

	//funciones

//	function contar(cuenta1, cuenta2, ...cuenta3) {
//
//		console.log("Hola")
//		console.log(cuenta1)
//		console.log(cuenta2)
//		console.log(cuenta3)
//	}
//
//	var cuentas = ["34", "56"]

//	function animates() {
//		var p_canvas = document.getElementById("p_particle");
//		if (p_canvas.style.display === "none") {
//			p_canvas.style.display = 'block';
//		} else {
//			p_canvas.style.display = 'none';
//		}
//
//	}
var p_canvas = document.getElementById("p_particle");
p_canvas.style.display = 'none'
var boton_p=document.querySelector('.button_pr');

boton_p.addEventListener('click', function(){
		var p_canvas = document.getElementById("p_particle");
	console.log(p_canvas.style.display)
		if (p_canvas.style.display == 'none') {
			p_canvas.style.display = 'block';
		} else {
			p_canvas.style.display = 'none';
		}
	
})
	//Particles javascript
	// declare vars
	var ps = [];
	var MAX_NUM = 1000;
	var colors = ['#FF3C50', '#27AE60', '#E67E22', '#6F5499', '#DB49D8', '#FC880F', '#1B9AF7'];

	var c = document.getElementById("p_particle");
	var ctx = c.getContext("2d");

	window.requestAnimFrame = window.requestAnimationFrame ||
								window.webkitRequestAnimationFrame ||
								window.mozRequestAnimationFrame ||
								window.oRequestAnimationFrame ||
								window.msRequestAnimationFrame ||
		function (e) {
			window.setTimeout(e, 1e3);
		};
	window.onload = function () {
		c.width = c.width;
		c.height = c.height;
		spawn();
		draw();
		update();
	};

	//create particles
	function spawn() {
		for (var i = 0; ps.length < MAX_NUM; i++) {
			ps[i] = {
				x: Math.random()*window.innerWidth,
				y: Math.random()*window.innerHeight,
				r: Math.random()*5,
				c: colors[Math.floor(Math.random()*colors.length)]
				
			};
		}
	}

	function update() {
		reset();

		c.width = window.innerWidth;
		c.height = window.innerHeight;
		for (var i = 0; i < ps.length; i++) {
			ps[i].y += 3;
			ps[i].x += -1 + (Math.random() * 3);
			//ps[i].r = Math.random()*5;
		}

		draw();

		window.setTimeout(requestAnimFrame(update), 1e3);
	}

	function reset() {
		//reset the x and y coordinates if leaves the canvas
		for (var i = 0; i < ps.length; i++) {
			//reset if y or coordinate left the canvas
			if (ps[i].y > c.height) {
				ps[i].y = Math.random()*window.innerHeight;
				ps[i].color = colors[Math.floor(Math.random() * colors.lenght)];
				
			}

			//reset if x or coordinates has left canvas
			if (ps[i].x > c.width || ps[i].x < 0) {
				ps[i].x = Math.random()*window.innerWidth;
				ps[i].color = colors[Math.floor(Math.random() * colors.length)];
			}

		}
	}

	function draw() {
		for (var i = 0; i < ps.length; i++) {
			ctx.beginPath();
			ctx.arc(ps[i].x,ps[i].y, ps[i].r, 0, 6);
			ctx.fillStyle = ps[i].c;
			ctx.fill();
		}
	}

	// setInterval(function() {
	//   update();
	//   draw();
	//   reset();
	// }, 30);

// // declare vars
//var ps = [];
//var MAX_NUM = 500;
//var colors = [ '#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423' ];
//
//var c=document.getElementById("p_particle");
//var ctx=c.getContext("2d");
//
//window.requestAnimFrame = window.requestAnimationFrame ||
//                          window.webkitRequestAnimationFrame ||
//                          window.mozRequestAnimationFrame ||
//                          window.oRequestAnimationFrame ||
//                          window.msRequestAnimationFrame ||
//                          function(e){
//                            window.setTimeout(e,1e3)
//                          };
//window.onload=function(){
//  c.width=c.width;
//  c.height=c.height;
//  spawn();
//  draw();
//  update();
//}
//
////create the particles
//function spawn() {
//  for(var i=0; ps.length < MAX_NUM; i++) {
//    ps[i] = { x: Math.random()*window.innerWidth,
//              y: Math.random()*window.innerHeight,
//              r: Math.random()*5,
//              c: colors[Math.floor(Math.random()*colors.length)]
//            };                  
//   }
//}
//
//function update() {
//    reset();
//
//    c.width = window.innerWidth;
//    c.height = window.innerHeight;
//    for(var i=0; i<ps.length; i++) {
//        ps[i].y += 1 ;
//        ps[i].x += -1 + (Math.random() * 3);
//        //ps[i].r = Math.random()*5;
//    }
//
//    draw();
//
//    window.setTimeout(requestAnimFrame(update),1e3);
//
//}
//
//function reset() {
//    //reset the x and y coordinates if leaves the canvas
//    for(var i=0; i<ps.length; i++) {
//        //reset if y or coordinate has left the canvas
//        if(ps[i].y > c.height) {
//            ps[i].y = Math.random()*window.innerHeight;
//            ps[i].color = colors[Math.floor(Math.random() * colors.length)];
//        }
//        //reset if x or coordinate has left the canvas
//        if(ps[i].x > c.width || ps[i].x < 0){
//          ps[i].x = Math.random()*window.innerWidth;
//          ps[i].color = colors[Math.floor(Math.random() * colors.length)];
//        }
//    }
//}
//  
//
//function draw() {
//  for(var i=0; i<ps.length; i++) {
//    ctx.beginPath();
//		ctx.arc( ps[i].x, ps[i].y, ps[i].r, 0, 6);
//		ctx.fillStyle = ps[i].c;
//		ctx.fill(); 
//  }
//}
//
//// setInterval(function() {
////   update();
////   draw();
////   reset();
//// }, 30);
