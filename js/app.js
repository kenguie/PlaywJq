$(document).ready(function(){
    
    $( ".image1 img" ).hide();
    $( ".image2 img" ).hide();
    
    
    function letsAnimate() {

        $(".first").animate({
            opacity: .25
        }),2000;
        
        $(".one").fadeOut(2000);
        
        $(".two").slideUp(2000);
        
        $(".three").slideDown(2000);
        
        $(".four").fadeOut(2000);
        
        $('body').animate({backgroundColor:'cyan'}, 2500);
        
        $(".five").animate({
            opacity: .1
        },2000);
        
        $(".head2").animate({
            "margin-left":"900px"
        },4000);
        
        $(".head2").animate({
            "margin-left":"90px"
        },4000);
        
        $(".head3").fadeOut(2000);
        
        $("p").animate({
            "margin-left":"900px"
        },4000);
        
        $("p").animate({
            "margin-left":"0"
        },4000);
        
        $("footer").fadeOut(3000);
        
        $('body').animate({backgroundColor:'orange'}, 2500);
        
        $(".one").fadeIn(2000);
        $(".four").fadeIn(2000);
        $(".head3").fadeIn(2000);
        $(".one").fadeOut(2000);
        $(".four").fadeOut(2000);
        $(".head3").fadeOut(2000);
        $("footer").fadeIn(3000);
        $("footer").fadeOut(3000);
        
        $(".one").fadeIn(3000);
        $(".four").fadeIn(3000);
        $(".head3").fadeIn(3000);
        $(".footer").fadeIn(3000);
        
        $(".two").slideDown(2000);
        
        $(".three").fadeIn(2000);
        
        $(".first").animate({
            opacity: 1
        }),4000;
        
        $('body').animate({backgroundColor:'lightblue)'}, 2500);
        
        $(".five").animate({
            opacity: 1
        },4000);
        
        $(".head2").animate({
            "margin-left":"0"
        },4000);
        
        $(".image1 img").fadeIn(4000);
        
        $(".image2 img").fadeIn(4000);
        
        $("footer").fadeIn(3000);
        
        $('body').animate({backgroundColor:'white'}, 2500);
        
    };
    
    $("body").mousedown(function() {
        letsAnimate();
    });    
});

/*
 Create a basic HTML page with no styling that has at least 10 separate elements on it

Use jQuery to create an animated “show”! Try changing an element’s CSS, hiding, showing, fading, and sliding, and making the page run amok

Once the “show” works, rig it up to only fire when the user clicks anywhere on the page

If you finish this exercise, implement jQuery into some of the websites you built last week and try playing around with some other functions: http://api.jquery.com/ (Links to an external site.)


<h1 class="first"> This  </h1>
    
    <ul class="list">                                   
        <li class="one">is </li>
        <li class="two">a </li>
        <li class="three">word  </li>
        <li class="four">show </li>
        <li class="five">!!! </li>
    </ul>

    <h2 class="head2"> Hope you liked it! </h2>
    <h3 class="head3"> See you next time! </h3>
    
    <p class="sentance"> This has been fun!  </p>
    <footer>Bye bye! </footer>
    
    $(“body”).hide();
    show
    fadeOut(1000) 1 second
    fadeIn()
    .slideUp(1000)
    .slideDown(1000)
    
    
    Use jQuery’s animate() method to
animate most CSS properties that are
numeric
$(“.my-element”).animate( {
opacity: 0.25,
width: 70%
} , 2000 );

$(“ul li a”).click( function(){
alert(‘imclicked!’);
});


*/