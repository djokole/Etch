function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

var numsq = prompt("Please enter number of squares per side");

function buildGrid (numsq) {
	for (var x = 0; x < numsq; x++) {
        for (var y = 0; y < numsq; y++) {
            $(".grid").append("<div class='unit'></div>");
        };
    };
    var usize = (700 - numsq * 2) / numsq
    
    $('.unit').css({'width': usize,
		'height': usize	
	});
};

$(document).ready(function() {
    
    buildGrid(numsq);
	
	$('.unit').mouseover(function() {
  		$(this).addClass('hovered');
	});

	$('#blackbt').on('click', function() {
		$('.unit').mouseover(function() {
  		$(this).css({'background-color': 'black'});
		});
	});
	
	$('#clearbt').on('click', function () {
		$('.unit').css({'background-color': 'white'});
	});

	$('#colorbt').on('click', function() {
			$( ".unit" ).mouseover(function() {
				$(this).css({'background-color': getRandomColor()});
			});
	});
	
	$('#sizebt').on('click', function() {
		$('.unit').remove();
		var numsq = prompt("Please enter number of squares per side");
		buildGrid(numsq);
	});

});



