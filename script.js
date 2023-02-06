

var x = window.matchMedia("(max-width: 920px)");

if (x.matches) {
    document.getElementById("img1").src="images/img1.png";
}
else{
    document.getElementById("img1").src="images/img1.png";
}

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".nav").css("background" , "blue");
        }
  
        else{
            $(".nav").css("background" , "#000");  	
        }
    })
  })