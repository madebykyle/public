//enforces strict syntax rules
"use strict";

var read = function(){
	return document.body.innerHTML;
};

//print function developed in class
var print = function(input){
	setTimeout(function(){
		document.getElementById("sentence").innerHTML = input;
		document.getElementById("reflection").innerHTML = input;
	});
	return(input+' was placed in the document');
};

//document.getElementById("countdown").innerHTML = delay;

var determiner = ["DETERMINER","The", "A", "Another", "Some","Any","My","Our","Each","This","That","Those","Her","His","Every","An"];
var noun = ["NOUN","man", "mountain", "ocean", "state", "country", "building", "cat","website","ninja","chair","pancake","statue","unicorn","rainbows","bunny"];
var verb = ["VERB","quacked","stalked","slithered","fantasized","galloped","sqauked","squealed","glided","flipped"];
var noun2 = ["NOUN","glitter","toejam","curtains","salad","potatoes","beets","exorcism","dragons","jellybeans","dolls"];

var add_to_array = function(array){

	

	var new_word = prompt("insert word", "new word goes here");
	//what else should determin weather or not the word is added
	if(new_word != undefined && new_word != null && new_word != ""){
		array.push(new_word);
		console.log(new_word + ' ' + "has been added to "+array[0]);
		console.log(array);
	}

};
/* so that this can expand beyond the particular instance of each time it is run
lookup php post and get in order to acces the arrays which will now be separated
ajax throght jquery in order to communicate with the list */

var my_loop = function(determinerPass,nounPass,verbPass,noun2Pass,time, current_index, options){
var i = current_index;	


	if(options == undefined){
		options = {first_time:false,
			};
	};
	//calls first sentence up without a delay then uses return to skip the runthrough of set timeout before
	if (options.first_time == true) {
		print(determinerPass[0] + ' ' + nounPass[0] + ' ' + verbPass[0] + ' ' + noun2Pass[0]);
		i++;
		my_loop(determinerPass,nounPass,verbPass,noun2Pass,time, i);
		//this is what allows it to skip the code below and it is only called up when i!=0
		return;
	};
	setTimeout(function(){

		var determinerRandom = Math.floor((Math.random()*determiner.length));
		var nounRandom = Math.floor((Math.random()*noun.length));
		var verbRandom = Math.floor((Math.random()*verb.length));
		var noun2Random = Math.floor((Math.random()*noun2.length));
		
		var setCountdown = (time/1000)+' '+"Seconds";
		document.getElementById("countdown").innerHTML = setCountdown; 
		
		print(determinerPass[determinerRandom] + ' ' + nounPass[nounRandom] + ' ' + verbPass[verbRandom] + ' ' + noun2Pass[noun2Random]);
		i++;
		if(i<determiner.length){
			my_loop(determinerPass,nounPass,verbPass,noun2Pass,time, i);
		}
		else{
			i = 0;
			my_loop(determinerPass,nounPass,verbPass,noun2Pass,time, i);
		}
	}, time);
};

window.onload = function(){

    
my_loop(determiner,noun,verb,noun2,10000,1, {first_time:true});



};


	 
	

