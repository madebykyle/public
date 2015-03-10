/*
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
*/

//declaration of planet objects
var planet_sun = {
	x_pos:0,
	y_pos:0,
	r:50
}
var planet_earth = {
	x_pos:400,
	y_pos:200,
	r:50
}
var planet_moon = {
	x_pos:600,
	y_pos:200,
	r:50
}
//linked to vector part below that was imported from evanw.github
var sun_vector = new Vector(planet_sun.x_pos, planet_sun.y_pos, 0);
var earth_vector = new Vector(planet_earth.xpos, planet_earth.y_pos, 0);
var moon_vector = new Vector(planet_moon.xpos, planet_moon.y_pos, 0);

//theta variable for all planets polar rotations
var theta_sun = 0;
var theta_earth = 0;
var theta_moon = 0;

//rotates the sun
function sun_move_around(){
	
	var x = (((planet_sun.r)*Math.cos(theta_sun))/3)+(window.innerWidth/2);
	var y = (((planet_sun.r)*Math.sin(theta_sun))/3)+(window.innerHeight/2);
	planet_sun.x_pos = x;
	planet_sun.y_pos =y;

	theta_sun+=0.01;
}

//rotates the earth dependant on the sun
function earth_move_around(){
	
	var x = ((planet_earth.r*2)*Math.cos(theta_earth))+(planet_sun.x_pos);
	var y = ((planet_earth.r*2)*Math.sin(theta_earth))+(planet_sun.y_pos);
	planet_earth.x_pos = x;
	planet_earth.y_pos =y;
	
	theta_earth+=(0.01*(planet_sun.r/10));
	
}

//rotates the moon dependant on the earth
function moon_move_around(){
	
	var x = ((75+(planet_moon.r/10))*Math.cos(theta_moon))+ (planet_earth.x_pos);
	var y = ((75+(planet_moon.r/10))*Math.sin(theta_moon))+ (planet_earth.y_pos);
	planet_moon.x_pos = x;
	planet_moon.y_pos =y;

	theta_moon+=0.01*(planet_moon.r/10);
}

//random planet sizes every time the page is refreshed
function random_sizes(){
	var random_earth =  Math.floor(Math.random() * 300) + 10;
	var random_moon = Math.floor(Math.random()*300)+10;
	var random_sun = Math.floor(Math.random()*300)+10;
 	document.getElementById("planet1").value = random_sun;
 	document.getElementById("planet2").value = random_earth;
 	document.getElementById("planet3").value = random_moon;

}

//converts the value slider into the radius of the planet objects and then updates the css for each planet
function planet_size(){
	var size1 = document.getElementById("planet1").value;
	var size2 = document.getElementById("planet2").value;
	var size3 = document.getElementById("planet3").value;
	planet_sun.r = size1;
	planet_earth.r = size2;
	planet_moon.r = size3;
	document.getElementById("sun").style.width=planet_sun.r;
	document.getElementById("sun").style.height=planet_sun.r;
	document.getElementById("earth").style.width = planet_earth.r;
	document.getElementById("earth").style.height=planet_earth.r;
	document.getElementById("moon").style.width=planet_moon.r;
	document.getElementById("moon").style.height=planet_moon.r;

}

//same as planet_size yet for positions
function planet_position(){

	 document.getElementById("sun").style.left = planet_sun.x_pos;
	 document.getElementById("sun").style.top = planet_sun.y_pos;
	 document.getElementById("earth").style.left = planet_earth.x_pos;
	 document.getElementById("earth").style.top = planet_earth.y_pos;
	 document.getElementById("moon").style.left = planet_moon.x_pos;
	 document.getElementById("moon").style.top = planet_moon.y_pos;

}


setInterval(planet_size,100);
setInterval(planet_position,100);
setInterval(sun_move_around,100);
setInterval(earth_move_around,50);
setInterval(moon_move_around,50);

//executes random sizes for planets everytime the window is reloaded
 window.onload = function(){
 	random_sizes();
 }










 /*
vector.js found at:http://evanw.github.io/lightgl.js/docs/vector.html
not really sure who to source for this git repository but this is all them!
*/

function Vector(x, y, z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
}


Vector.prototype = {
  negative: function() {
    return new Vector(-this.x, -this.y, -this.z);
  },
  add: function(v) {
    if (v instanceof Vector) return new Vector(this.x + v.x, this.y + v.y, this.z + v.z);
    else return new Vector(this.x + v, this.y + v, this.z + v);
  },
  subtract: function(v) {
    if (v instanceof Vector) return new Vector(this.x - v.x, this.y - v.y, this.z - v.z);
    else return new Vector(this.x - v, this.y - v, this.z - v);
  },
  multiply: function(v) {
    if (v instanceof Vector) return new Vector(this.x * v.x, this.y * v.y, this.z * v.z);
    else return new Vector(this.x * v, this.y * v, this.z * v);
  },
  divide: function(v) {
    if (v instanceof Vector) return new Vector(this.x / v.x, this.y / v.y, this.z / v.z);
    else return new Vector(this.x / v, this.y / v, this.z / v);
  },
  equals: function(v) {
    return this.x == v.x && this.y == v.y && this.z == v.z;
  },
  dot: function(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  },
  cross: function(v) {
    return new Vector(
      this.y * v.z - this.z * v.y,
      this.z * v.x - this.x * v.z,
      this.x * v.y - this.y * v.x
    );
  },
  length: function() {
    return Math.sqrt(this.dot(this));
  },
  unit: function() {
    return this.divide(this.length());
  },
  min: function() {
    return Math.min(Math.min(this.x, this.y), this.z);
  },
  max: function() {
    return Math.max(Math.max(this.x, this.y), this.z);
  },
  toAngles: function() {
    return {
      theta: Math.atan2(this.z, this.x),
      phi: Math.asin(this.y / this.length())
    };
  },
  toArray: function(n) {
    return [this.x, this.y, this.z].slice(0, n || 3);
  },
  clone: function() {
    return new Vector(this.x, this.y, this.z);
  },
  init: function(x, y, z) {
    this.x = x; this.y = y; this.z = z;
    return this;
  }
};


Vector.negative = function(a, b) {
  b.x = -a.x; b.y = -a.y; b.z = -a.z;
  return b;
};
Vector.add = function(a, b, c) {
  if (b instanceof Vector) { c.x = a.x + b.x; c.y = a.y + b.y; c.z = a.z + b.z; }
  else { c.x = a.x + b; c.y = a.y + b; c.z = a.z + b; }
  return c;
};
Vector.subtract = function(a, b, c) {
  if (b instanceof Vector) { c.x = a.x - b.x; c.y = a.y - b.y; c.z = a.z - b.z; }
  else { c.x = a.x - b; c.y = a.y - b; c.z = a.z - b; }
  return c;
};
Vector.multiply = function(a, b, c) {
  if (b instanceof Vector) { c.x = a.x * b.x; c.y = a.y * b.y; c.z = a.z * b.z; }
  else { c.x = a.x * b; c.y = a.y * b; c.z = a.z * b; }
  return c;
};
Vector.divide = function(a, b, c) {
  if (b instanceof Vector) { c.x = a.x / b.x; c.y = a.y / b.y; c.z = a.z / b.z; }
  else { c.x = a.x / b; c.y = a.y / b; c.z = a.z / b; }
  return c;
};
Vector.cross = function(a, b, c) {
  c.x = a.y * b.z - a.z * b.y;
  c.y = a.z * b.x - a.x * b.z;
  c.z = a.x * b.y - a.y * b.x;
  return c;
};
Vector.unit = function(a, b) {
  var length = a.length();
  b.x = a.x / length;
  b.y = a.y / length;
  b.z = a.z / length;
  return b;
};
Vector.fromAngles = function(theta, phi) {
  return new Vector(Math.cos(theta) * Math.cos(phi), Math.sin(phi), Math.sin(theta) * Math.cos(phi));
};
Vector.randomDirection = function() {
  return Vector.fromAngles(Math.random() * Math.PI * 2, Math.asin(Math.random() * 2 - 1));
};
Vector.min = function(a, b) {
  return new Vector(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.min(a.z, b.z));
};
Vector.max = function(a, b) {
  return new Vector(Math.max(a.x, b.x), Math.max(a.y, b.y), Math.max(a.z, b.z));
};
Vector.lerp = function(a, b, fraction) {
  return b.subtract(a).multiply(fraction).add(a);
};
Vector.fromArray = function(a) {
  return new Vector(a[0], a[1], a[2]);
};
