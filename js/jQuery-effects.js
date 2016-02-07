$(document).ready(function(){


	//The Facebook like button interaction
    $('.btn-like').mouseenter(function(){
    	$('.btn-like').fadeTo('fast', 0.75);
    });
    $('.btn-like').mouseleave(function(){
    	$('.btn-like').fadeTo('fast', 1);
    }); 

	//The Facebook Share button interaction
    $('.btn-share').mouseenter(function(){
    	$('.btn-share').fadeTo('fast', 0.75);
    });
    $('.btn-share').mouseleave(function(){
    	$('.btn-share').fadeTo('fast', 1);
    }); 
	//The Facebook Share button interaction

	//The Twitter tweet button interaction
    $('.btn-tweet').mouseenter(function(){
    	$('.btn-tweet').fadeTo('fast', 0.75);
    });
    $('.btn-tweet').mouseleave(function(){
    	$('.btn-tweet').fadeTo('fast', 1);
    }); 
	//The Twitter tweet button interaction

	//The Daily UI title coming in from the left.
    $("#header").hide().show('slow');
    $(".btn-email").hide().show('slow');
});