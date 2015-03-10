$( document ).ready(function() {

//trigger css animations with add remove class values for the current slide of the hire me section, so thrilled when i figured this one out

$('.single-item').slick({
	dots: true,
	infinite:true,
	slide:'div',
});
//console.log($('.single-item').slickCurrentSlide());

function runArround(){
var cuz = $('.single-item').slickCurrentSlide();

if (cuz == 1) {
	$("#knowledge_photoshop p").addClass("percent");
	$("#proficiency_photoshop p").addClass("percent");

	$("#knowledge_aftereffects p").addClass("percent");
	$("#proficiency_aftereffects p").addClass("percent");

	$("#knowledge_processing p").addClass("percent");
	$("#proficiency_processing p").addClass("percent");

	$("#knowledge_illustrator p").addClass("percent");
	$("#proficiency_illustrator p").addClass("percent");

	$("#knowledge_finalcut p").addClass("percent");
	$("#proficiency_finalcut p").addClass("percent");

	$("#knowledge_html p").addClass("percent");
	$("#proficiency_html p").addClass("percent");

	$("#knowledge_indesign p").addClass("percent");
	$("#proficiency_indesign p").addClass("percent");

	$("#knowledge_c4d p").addClass("percent");
	$("#proficiency_c4d p").addClass("percent");

	$("#knowledge_arduino p").addClass("percent");
	$("#proficiency_arduino p").addClass("percent");

	$("#knowledge_flash p").addClass("percent");
	$("#proficiency_flash p").addClass("percent");

	$("#knowledge_protools p").addClass("percent");
	$("#proficiency_protools p").addClass("percent");

	$("#knowledge_java p").addClass("percent");
	$("#proficiency_java p").addClass("percent");

} else {
	$("#knowledge_photoshop p").removeClass("percent");
	$("#proficiency_photoshop p").removeClass("percent");

	$("#knowledge_aftereffects p").removeClass("percent");
	$("#proficiency_aftereffects p").removeClass("percent");

	$("#knowledge_processing p").removeClass("percent");
	$("#proficiency_processing p").removeClass("percent");

	$("#knowledge_illustrator p").removeClass("percent");
	$("#proficiency_illustrator p").removeClass("percent");

	$("#knowledge_finalcut p").removeClass("percent");
	$("#proficiency_finalcut p").removeClass("percent");

	$("#knowledge_html p").removeClass("percent");
	$("#proficiency_html p").removeClass("percent");

	$("#knowledge_indesign p").removeClass("percent");
	$("#proficiency_indesign p").removeClass("percent");

	$("#knowledge_c4d p").removeClass("percent");
	$("#proficiency_c4d p").removeClass("percent");

	$("#knowledge_arduino p").removeClass("percent");
	$("#proficiency_arduino p").removeClass("percent");

	$("#knowledge_flash p").removeClass("percent");
	$("#proficiency_flash p").removeClass("percent");

	$("#knowledge_protools p").removeClass("percent");
	$("#proficiency_protools p").removeClass("percent");

	$("#knowledge_java p").removeClass("percent");
	$("#proficiency_java p").removeClass("percent");
}
};

setInterval(runArround,300);

//the next two arrays are for the different quotes/authors i want to appear on the site, number in the quote array must match author in the other, next time make these as objects so they can have multiple fields dumbass

    var quotes = [
  "blue... BERRY!",
  "Where's my kajigger!",
  "back scratcher, BACK SCRATCHER!",
  "The broccoli says 'I look like a small tree', the mushroom says 'I look like an umbrella', the walnut says 'I look like a brain', and the banana says 'Can we please change the subject?'",
  "Chuck wood, the woodchuck could."
]
 var authors = [
 "-Kyle", 
 "-Hattie McDoogal", 
 "-Peter Griffin", 
 "-Anonymous",
 "-yoda"
 ]

// set global to prevent save quote/author showing up twine in a row
lastQuote = null;

// quotes are globals
function fadeInAndOut(divID, auth, interval) {
  setInterval(function () {
    var loopVar = 1
    while (loopVar == 1) {
      var randomNumber = Math.floor(Math.random() * quotes.length);
      if (randomNumber != lastQuote) {
        loopVar = 0;
      }
    }
    lastQuote = randomNumber;
  	
    $(divID).fadeOut('slow', function() {
      $(this).text(quotes[randomNumber]);
      $(this).fadeIn('slow');
    });
      $(auth).fadeOut('slow', function() {
      $(this).text(authors[randomNumber]);
      $(this).fadeIn('slow');
    });
  }, interval);
}


fadeInAndOut('#quotes', '#author', 6500);
 

 //begin background animation here


    var colors = new Array(
      [0,136,108],
      [0,89,136],
      [17,228,216],
      [30,200,255]);

    var step = 0;
    //color table indices for: 
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0,1,2,3];

    //transition speed
    var gradientSpeed = 0.002;

    function updateGradient() {
      var c0_0 = colors[colorIndices[0]];
      var c0_1 = colors[colorIndices[1]];
      var c1_0 = colors[colorIndices[2]];
      var c1_1 = colors[colorIndices[3]];

      var istep = 1 - step;
      var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
      var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
      var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
      var color1 = "#"+((r1 << 16) | (g1 << 8) | b1).toString(16);

      var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
      var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
      var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
      var color2 = "#"+((r2 << 16) | (g2 << 8) | b2).toString(16);

        $('#gradient').css({background: "-webkit-radial-gradient(80% 10%, circle, "+color1+", transparent), -webkit-radial-gradient(80% 50%, circle, "+color2+", transparent)"});
        
        step += gradientSpeed;
        if ( step >= 1 )
        {
          step %= 1;
          colorIndices[0] = colorIndices[1];
          colorIndices[2] = colorIndices[3];
          
          //pick two new target color indices
          //do not pick the same as the current one
          colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
          colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
          
        }
    } setInterval(updateGradient,10);

});