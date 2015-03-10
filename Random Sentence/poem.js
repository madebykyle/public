//enforces strict syntax rules
"use strict";

var read = function(){
	return document.body.innerHTML;
}

//print function developed in class
var print = function(input, delay){
	var delay_in_seconds = delay*1000;
	setTimeout(function(){
		document.getElementById("sentence").innerHTML = input;
		document.getElementById("reflection").innerHTML = input;
	}	,delay_in_seconds);
	console.log(delay_in_seconds+" in seconds");
	return(input+' was placed in the document');
};

window.onload = function(){

	var firstWord = ["Holy", "Happy", "Jumping", "Emotionless","Creeping","Haphazard", "Dynamic"];
	var secondWord = ["Crapsicle", "Cartwheel", "Documentary", "Genius", "Banana", "Duo", "Elegance"];
	
	for (var i=0; i<=firstWord.length;i++) {
			 var test_number = Math.floor((Math.random()*firstWord.length)+1);
			print(firstWord[test_number]+' '+secondWord[i],3*i);
			console.log(i);
				};	
	 
	

};