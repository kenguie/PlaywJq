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
        
        /*var colorCode = "#";
        var a = "";
        // for (i=0; i<=20; i++) {
            
            for (i=0; i<=5; i++) {
            var a=Math.floor(Math.random()*16).toString(16);
            colorCode = colorCode + a;
            };
        console.log(colorCode);
        $("body").css('background-color',colorCode);
        
        }; */
        
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
        
        $(".image1 img").fadeOut(4000);
        
        $(".image2 img").fadeOut(4000);
        
        $("footer").fadeIn(3000);
        
        $('body').animate({backgroundColor:'white'}, 2500);
        
    };
    
    $("body").mousedown(function() {
        letsAnimate();
    });    
});



/* random color generator using 2 vars
 var colorCode = "#";
//  var a = digit to string;
 
var a = (Math.random().toString16);
 
 $("body")(function() {
            var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            $("body").css('background-color', randomColorChange);
            console.log("color change started");
        });
        };  
 
 
 */

