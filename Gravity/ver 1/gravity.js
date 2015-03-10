"use strict";

function showValue(newValue, planet)
{
	if(planet == "1"){
		document.getElementById("range_planet1").innerHTML=newValue;
		//document.getElementById('myCanvas').radius =newValue;
	} if(planet == "2"){
		document.getElementById("range_planet2").innerHTML=newValue;
	} if(planet == "3"){
		document.getElementById("range_planet3").innerHTML=newValue;
	}
		
}

  window.onload = function(){
	
var canvas = document.getElementsByTagName("canvas")[0]; //get the canvas dom object
var ctx = canvas.getContext("2d"); //get the context
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var planet1 = {  //create an object to draw
  x:100,  //x value
  y:canvas.height/2,  //y value
  r:5 //radius
}
var planet2 ={
  x:200,  //x value
  y:canvas.height/2,  //y value
  r:5 //radius
}
var planet3 ={
  x:300,  //x value
  y:canvas.height/2,  //y value
  r:5 //radius
}
var redraw = function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height); //clear canvas
  ctx.beginPath();  //draw the object c
  ctx.arc(planet1.x, planet1.y, planet1.r, 0, Math.PI*2); 
  ctx.arc(planet2.x, planet2.y, planet2.r, 0, Math.PI*2);
  ctx.arc(planet3.x, planet3.y, planet3.r, 0, Math.PI*2);  
  ctx.closePath();
  ctx.fill();
    
  requestAnimationFrame(redraw);
}
function planet_size(){
	var size1 = document.getElementById("planet1").value;
	var size2 = document.getElementById("planet2").value;
	var size3 = document.getElementById("planet3").value;
	planet1.r = size1;
	planet2.r = size2;
	planet3.r = size3;
	console.log('sizeplanet1' + " "+ "rad = " + size1);
	console.log('sizeplanet2' + " "+ "rad = " + size2);
	console.log('sizeplanet3' + " "+ "rad = " + size3);
}

/*function move(){
  var x = Math.random() // this returns a float between 0.0 and 1.0
  planet1.x = x * canvas.width;
  planet1.y = x * canvas.height;
}*/
redraw();

setInterval(planet_size, 100);
  }


