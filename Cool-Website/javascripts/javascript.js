
var image1=new Image()
image1.src = "images/istanbul.jpg"

var image2=new Image()
image2.src = "images/city.jpg"

var image3=new Image()
image3.src = "images/Eiffel.jpg"

var image4=new Image()
image4.src = "images/h1.jpg"

var image5=new Image()
image5.src = "images/b1.jpg"

var image6=new Image()
image6.src = "images/tour-map.jpg"

var image7=new Image()
image7.src = "images/child.jpg"

var image8=new Image()
image8.src = "images/disabled.jpg"

var image9=new Image()
image9.src = "images/surgery.jpg"

var image10=new Image()
image10.src = "images/spa5.jpg"

function slideit() {
	
     document.images.slide.src = eval("image" + step + ".src");

    if (step < 10)
        step++
    else
        step = 1
    setTimeout("slideit()", 2000)
//var step = 1
}


$(function() {

    var marquee = $("#marquee"); 
    marquee.css({"overflow": "hidden", "width": "100%"});

    // wrap "My Text" with a span (IE doesn't like divs inline-block)
    marquee.wrapInner("<span>");
    marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align":"center" }); 
    marquee.append(marquee.find("span").clone()); // now there are two spans with "My Text"

    marquee.wrapInner("<div>");
    marquee.find("div").css("width", "200%");

    var reset = function() {
        $(this).css("margin-left", "0%");
        $(this).animate({ "margin-left": "-100%" }, 10000, 'linear', reset);
    };

    reset.call(marquee.find("div"));

    });