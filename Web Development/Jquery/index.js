// manipulating styles with jquery
$("h1").addClass("big-title small-title");
// manipulating text with jquery
$("h1").text("Bye");
// manipulating att with jquery
// adding event listeners with jquery
$("button").click(function(){
    $("h1").css("color","purple");
});
$("h1").on("mouseover",function(){
    $("h1").css("color","red");
});
$("input").keypress(function(event){
    $("h1").text(event.key);
});
// adding or removing elements 
$("h1").before("<button>before</button>");
$("h1").after("<button>after</button>");
$("h1").append("<button>append</button>");
$("h1").prepend("<button>prepend</button>");
$(".first-class").before("<br>");

// adding animations wiht jQuery
$(".first-class").on("mouseover",function(){
    $("h1").slideToggle().animate({opacity:0.4});
});