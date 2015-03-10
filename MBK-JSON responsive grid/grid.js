
function screenCheck(){
	 //if (window.innerWidth>1200){
		//$('#grid').html(gridTemplate_desktop({data:projectJson}));
	//};
	 if (window.innerWidth>641){
		$('#grid').html(gridTemplate_tablet({data:projectJson}));
	}; 	if (window.innerWidth<641) {
		$('#grid').html(gridTemplate_mobile({data:projectJson}));
	};
};

function variableCheck(){
	if (window.innerWidth != holderWidth) {
		screenCheck();
		console.log("difference "+window.innerWidth+" and "+holderWidth);
		holderWidth=window.innerWidth;
	};
};

var holderWidth;


jQuery(document).ready(function($) {

var holderWidth = window.innerWidth;

projectJson = JSON.parse('[{"type":"link","src_id":"beef_book","dest":"Projects/kylebarber_beefbookspreads.pdf"},{"type":"link","src_id":"city_lights","dest":"http://www.instructables.com/id/City-lights/"},{"type":"iframe","src":"triangle_blue.html"},{"type":"link","src_id":"evolution","dest":"#"},{"type":"link","src_id":"gas","dest":"Projects/naturalgas.pdf"},{"type":"link","src_id":"sound_box","dest":"#"},{"type":"link","src_id":"city","dest":"demo.html"},{"type":"link","src_id":"ride_city","dest":"#"},{"type":"link","src_id":"batlur","dest":"batlur.html"},{"type":"iframe","src":"triangle.html"},{"type":"link","src_id":"lysee", "dest":"lysee.html"},{"type":"link","src_id":"niczoe","dest":"niczoe.html"},{"type":"link","src_id":"bebe","dest":"bebe.html"},{"type":null,"color":null},{"type":null,"color":null},{"type":null,"color":null},{"type":null,"color":null},{"type":null,"color":null},{"type":null,"color":null},{"type":null,"color":null},{"type":null,"color":null},{"type":"iframe","src":"triangle.html"}]');

/*
	gridTemplate_desktop = _.template(
		'<div class="row" id="row1">'
			+'<% var p = 1; %>'
			+'<% var r = 2; %>'
			+'<% _.each(data, function(d){ %>'
				+'<% if (p == 5 || p == 10 || p == 14 || p == 19 || p == 23) { %>'
					+'</div><div class="row" id="row<%= r %>">'
					+'<% r++; %>'
					+'<% if (p == 23) { return false; } %>'
				+'<% } %>'
				+'<% if (d.type == "iframe") { %>'
					+'<div id="triangle" class="projects_main"><iframe src="<%= d.src %>" style="border:0px"></iframe></div>'
				+'<% } else if (d.type == "link") { %>'
					+'<a href="<%= d.dest %>"><div id="<%= d.src_id %>" class="projects_main"></div></a>'
				+'<% } else { %>'
					+'<div id="project<%= p %>" class="projects_main"<% if(d.color) { %> style="background-color: <%= d.color %>"<% } %>></div>'
				+'<% } %>'
				+'<% p++; %>'
			+'<% }); %>'
		+'</div>'

	);
*/
		gridTemplate_tablet = _.template(
		'<div class="row" id="row1">'
			+'<% var p = 1; %>'
			+'<% var r = 2; %>'
			+'<% _.each(data, function(d){ %>'
				+'<% if (p == 3 || p == 6 || p == 8 || p == 11 || p == 13) { %>'
					+'</div><div class="row" id="row<%= r %>">'
					+'<% r++; %>'
						+'<% if (p == 13) { return false; } %>'
				+'<% } %>'

				+'<% if (d.type == "iframe") { %>'
					+'<div id="triangle" class="projects_main"><iframe src="<%= d.src %>" style="border:0px"></iframe></div>'
				+'<% } else if (d.type == "link") { %>'
					+'<a href="<%= d.dest %>"><div id="<%= d.src_id %>" class="projects_main"></div></a>'
				+'<% } else { %>'
					+'<div id="project<%= p %>" class="projects_main"<% if(d.color) { %> style="background-color: <%= d.color %>"<% } %>></div>'
				+'<% } %>'
				+'<% p++; %>'
			+'<% }); %>'
		+'</div>'
	);


		gridTemplate_mobile = _.template(
		'<div class="row" id="row1">'
			+'<% var p = 1; %>'
			+'<% var r = 2; %>'
			+'<% _.each(data, function(d){ %>'
				+'<% if (p == 2 || p == 4 || p == 5 || p == 7 || p == 8 || p==10 || p==11) { %>'
					+'</div><div class="row" id="row<%= r %>">'
					+'<% r++; %>'
						+'<% if (p == 11) { return false; } %>'
				+'<% } %>'

				+'<% if (d.type == "iframe") { %>'
					+'<div id="triangle" class="projects_main"><iframe src="<%= d.src %>" style="border:0px"></iframe></div>'
				+'<% } else if (d.type == "link") { %>'
					+'<a href="<%= d.dest %>"><div id="<%= d.src_id %>" class="projects_main"></div></a>'
				+'<% } else { %>'
					+'<div id="project<%= p %>" class="projects_main"<% if(d.color) { %> style="background-color: <%= d.color %>"<% } %>></div>'
				+'<% } %>'
				+'<% p++; %>'
			+'<% }); %>'
		+'</div>'
	);
screenCheck();
setInterval(variableCheck,100);
});