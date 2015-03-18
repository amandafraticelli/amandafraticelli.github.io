/*-------------------------
| 1. Slideshow Load to The Hub
--------------------------*/
/*
$(document).ready(function(){

	var mainmenu_links = $('mainmenu a');

	$('#mainmenu a:gt(0)').click(function(event){

		console.log('hello');

		event.preventDefault();//we are taking it from here.

		mainmenu_links.removeClass('selected'); //blanket removal of all links.
		$(this).addClass('selected');//this allows you to see which onre is being selected through the class of selected.

		var section = $(this).attr('data-section');

		// console.log(section);

		if(section == 'slideshow')//condition
		{

			$('#theTarget').load('1-slideshow.html #slideshow', slideshow_apply);

		}	

	})


});
*/

/*-------------------------
| 2. Lightbox Load to The Hub
--------------------------*/


/*
$(document).ready(function(){

	var mainmenu_links = $('mainmenu a');

	$('#mainmenu a').click(function(event){

		event.preventDefault();//we are taking it from here.

		mainmenu_links.removeClass('selected'); //blanket removal of all links.
		$(this).addClass('selected');//this allows you to see which onre is being selected through the class of selected.

		var section = $(this).attr('data-section');

		// console.log(section);

		if(section == 'lightbox')//condition
		{

			$('#theTarget').load('2-lightbox.html #lightbox', lightbox_apply);

		}	

	})


});
*/


/*-------------------------
| 3. Rollovers Load to The Hub
--------------------------*/
/*
$(document).ready(function(){

	var mainmenu_links = $('mainmenu a');

	$('#mainmenu a').click(function(event){

		event.preventDefault();//we are taking it from here.

		mainmenu_links.removeClass('selected'); //blanket removal of all links.
		$(this).addClass('selected');//this allows you to see which onre is being selected through the class of selected.

		var section = $(this).attr('data-section');

		// console.log(section);

		if(section == 'rollovers')//condition
		{

			$('#theTarget').load('3-rollovers.html #rollovers', roll_apply);

		}	

	})


});

*/

/*-------------------------
| 4. Swap Load to The Hub
--------------------------*/
/*
$(document).ready(function(){

	var mainmenu_links = $('mainmenu a');

	$('#mainmenu a').click(function(event){

		event.preventDefault();//we are taking it from here.

		mainmenu_links.removeClass('selected'); //blanket removal of all links.
		$(this).addClass('selected');//this allows you to see which onre is being selected through the class of selected.

		var section = $(this).attr('data-section');

		// console.log(section);

		if(section == 'swap')//condition
		{

			$('#theTarget').load('4-swap.html #swap', swap_apply);

		}	

	})


});

*/

/*-------------------------
| 5. Tabbed Load to The Hub
--------------------------*/
/*
$(document).ready(function(){

	var mainmenu_links = $('mainmenu a');

	$('#mainmenu a').click(function(event){

		event.preventDefault();//we are taking it from here.

		mainmenu_links.removeClass('selected'); //blanket removal of all links.
		$(this).addClass('selected');//this allows you to see which onre is being selected through the class of selected.

		var section = $(this).attr('data-section');

		// console.log(section);

		if(section == 'tabbed')//condition
		{

			$('#theTarget').load('5-tabbed.html #tabbed', tab_apply);

		}	

	})


});

*/








/*-------------------------
|
| AJAX HUB WORK
|
--------------------------*/

// initially when you click the links they will take you to each individual page but we dont want that
//this function below kills the link

function nav_link_click(event) {
	// disable defualt behavior of object
	event.preventDefault(); //thanks we will take it from here.

	//this below highlights what tab they click but wont take you anywhere (which is what we want, for now.)
	$('#mainmenu a').removeClass('selected');
	$(this).addClass('selected');

}

$('#mainmenu a:gt(0)').click(nav_link_click); //this is what makes everything work.


// this will now show when the page first loads
// load default
	$('#theTarget').load('index.html #theTarget');




/*
var section = $ (this).attr('data-section');
$(this).addClass('selected');

var section = $(this).attr('data-section');

if (section == 'slideshow')
{

$('#theTarget').css({'opacity':'0'}).load('1-slideshow.html #slideshow',function(){
 slideshow_apply();
 $('#theTarget').animate({'opacity':'1'},3000);
 console.log('hello');
});

}
else if (section == 'lightbox')
{

$('#theTarget').load('2-lightbox.html #lightbox', lightbox_apply);

}
else if (section == 'rollovers')
{

$('#theTarget').load('3-rollovers.html #rollovers', roll_apply);

}
else if (section == 'swap')
{

$('#theTarget').load('4-swap.html #swap', swap_apply);

}
else if (section == 'tabbed')
{

$('#theTarget').load('5-tabbed.html #tabbed', tab_apply);

}
*/

/*-------------------------
|
| Aninmation Begin
|
--------------------------*/



/*-------------------------
| Bridge Button
--------------------------*/

$(document).ready(function(){
    var state = 'down';


    $(".slideshow").click(function(){
      if(state =='down')
      {
        state ='up';
        $(".slideshow").animate({'opacity':'.5'});
        
      }
      else
      {
        state = 'down';
        $(".slideshow").animate({'opacity':'1'});
        
      }

      console.log(state);

    });
});



/*-------------------------
| Photoshop Button
--------------------------*/


$(document).ready(function(){
    var state = 'down';


    $(".lightbox").click(function(){
      if(state =='down')
      {
        state ='up';
        $(".lightbox").animate({'opacity':'.5'});
        
      }
      else
      {
        state = 'down';
        $(".lightbox").animate({'opacity':'1'});
        
      }

      console.log(state);

    });
});


/*-------------------------
| Illustrator Button
--------------------------*/



$(document).ready(function(){
    var state = 'down';


    $(".rollovers").click(function(){
      if(state =='down')
      {
        state ='up';
        $(".rollovers").animate({'opacity':'.5'});
        
      }
      else
      {
        state = 'down';
        $(".rollovers").animate({'opacity':'1'});
        
      }

      console.log(state);

    });
});



/*-------------------------
| InDesign Button
--------------------------*/


$(document).ready(function(){
    var state = 'down';


    $(".swap").click(function(){
      if(state =='down')
      {
        state ='up';
        $(".swap").animate({'opacity':'.5'});
        
      }
      else
      {
        state = 'down';
        $(".swap").animate({'opacity':'1'});
        
      }

      console.log(state);

    });
});


/*-------------------------
| Contact Button
--------------------------*/


$(document).ready(function(){
    var state = 'down';


    $(".tabbed").click(function(){
      if(state =='down')
      {
        state ='up';
        $(".tabbed").animate({'opacity':'.5'});
        
      }
      else
      {
        state = 'down';
        $(".tabbed").animate({'opacity':'1'});
        
      }

      console.log(state);

    });
});


/*-------------------------
|
| Aninmation End
|
--------------------------*/


/*-------------------------
|
| Transition Start
|
--------------------------*/


/*-------------------------
| Target Transition
--------------------------*/



$(function(){

	$('#theTarget').hide().fadeIn();('click', function() {

	$(this).animate({
		opacity:5.1,
		paddingTop:'+=80'},1000, function() {
			// $(this).remove();


	});
	});
	});

/*
$(function(){

	$('#theTarget').fadeIn('click', function() {

	$(this).animate({
		opacity:1.1,
		paddingBottom:'+=80'},500, function() {
			// $(this).remove();


	});
	});
	});



/*-------------------------
| Button Transition
--------------------------*/

/*
$(function(){

	$('#mainmenu').fadeOut('click', function() {

	$(this).animate({
		opacity:0.5,
		paddingTop:'+=20'},1000, function() {
			// $(this).remove();


	});
	});
	});
*/

$(function(){

	$('#mainmenu').hide().slideDown();('click', function() {

	$(this).animate({
		opacity:0.1,
		paddingBottom:'+=0'},900, function() {
			// $(this).remove();


	});
	});
	});



/*-------------------------
| Logo Transition
--------------------------*/

/*
$(function(){

	$('#logo').fadeOut('click', function() {

	$(this).animate({
		opacity:0.5,
		paddingBottom:'+=0'},1000, function() {
			// $(this).remove();


	});
	});
	});



$(function(){

	$('#logo').fadeIn('click', function() {

	$(this).animate({
		opacity:5.1,
		paddingBottom:'+=0'},1000, function() {
			// $(this).remove();


	});
	});
	});
*/



$(function(){

	$('#logo').hide().slideDown();('click', function() {

	$(this).animate({
		opacity:1.1,
		paddingTop:'+=10'},1000, function() {
			// $(this).remove();


	});
	});
	});







/*-------------------------
|
| Transition End
|
--------------------------*/























/*-------------------------
|
| SHARED FUNCTIONS
|
--------------------------*/

/*-------------------------
| 1. Slideshow Ajax
--------------------------*/



$('#mainmenu .slideshow').click(function(){

	// ajax load
	$('#theTarget').load('1-slideshow.html #slideshow', slideshow_apply);

});

function slideshow_apply(){
				var slideshow = $('#slideshow');

				function slideshow_fade() {
					lastimg = slideshow.find('img:last');

					lastimg.delay(2000).animate({'opacity':'0'},1000, function(){
						lastimg.prependTo(slideshow).css({'opacity':'1'});
						slideshow_fade();
					});
				}

				slideshow_fade();
			}

/*-------------------------
| 2. Lightbox
--------------------------*/

$('#mainmenu .lightbox').click(function(){

	// ajax load
	$('#theTarget').load('2-lightbox.html #lightbox', lightbox_apply);

});


function lightbox_apply(){

	var lightbox = $('#lightbox');

	lightbox.find('.images img').click(function(){
		var theSrc = $(this).attr('src');
		lightbox.find('.light img').attr('src',theSrc);
		lightbox.find('.light').show();
		lightbox.find('.dark').show();
	});

	lightbox.find('.dark, .light button').click(function(){
		lightbox.find('.light').hide();
		lightbox.find('.dark').hide();
	});
}




/*-------------------------
| 3. Rollvoers
--------------------------*/
$('#mainmenu .rollovers').click(function(){

	// ajax load
	$('#theTarget').load('3-rollovers.html #rollovers', roll_apply);

});

function roll_apply(){
	
	$('#rollovers img').stop(true).animate({'opacity':'.5'},1000);

	$('#rollovers img').hover(
		function(){
			$(this).stop(true).animate({'opacity':'1'},1000);
		}, 
		function(){
			$(this).stop(true).animate({'opacity':'.5'},1000);
		}
	);
}


/*-------------------------
| 4. Swap
--------------------------*/
$('#mainmenu .swap').click(function(){

	// ajax load
	$('#theTarget').load('4-swap.html #swap', swap_apply);

});


function swap_apply(){
	var large = $('#swap img.large');

	$('#swap .thumbs img').mouseover(function(){
		var theSrc = $(this).attr('src');
		large.attr('src',theSrc);
	});
}



/*-------------------------
| 5. Tabbed
--------------------------*/

$('#mainmenu .tabbed').click(function(){

	// ajax load
	$('#theTarget').load('5-tabbed.html #tabbed', tab_apply);

});


function tab_apply(){
	$('#tabbed .tab').hide();
	$('#tabbed .tab:first').show();

	$('#tabbed nav.tab-links a').click(function(event){
		event.preventDefault();

		var theHref = $(this).attr('href');
		$('#tabbed .tab').hide();
		$(theHref).show();

		$('#tabbed nav.tab-links a').removeClass('chosen');
		$(this).addClass('chosen');

	});

}





