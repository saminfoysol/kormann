/*$(document).ready(function () {

				if ($(window).width() < 600){
					return;
				}
				else{

                var imageFile = ["url(img/background3.JPG)","url(img/background14.JPG)","url(img/background1.png)","url(img/background16.jpg)","url(img/background17.jpg)"];
                var currentIndex = 0;

              	setInterval(function () {
                    if (currentIndex == imageFile.length) {
                        currentIndex = 0;
                    }
                    $(".home-hero").css('background-image', imageFile[currentIndex++]).fadeIn(3000);
                }, 9000);
                }   
            });*/

function imagesPreload(){
     var imgArray = new Array("img/background3.jpg", "img/background16.jpg", "img/background19.jpg","img/background24.jpg","img/background21.jpg","img/background14.jpg");
     for (var i=0; i<imgArray.length; i++) {
         (new Image()).src = imgArray[i];
     }
 }

 window.onload = function() {
    var imgArray = new Array("img/background3.jpg", "img/background16.jpg", "img/background19.jpg","img/background24.jpg","img/background21.jpg","img/background14.jpg");
     for (var i=0; i<imgArray.length; i++) {
         (new Image()).src = imgArray[i];
     }
    
    document.getElementById("first").onmouseover = function fun() {
        $('.home-hero').css('background-image','url(img/background3.jpg)').fadeIn(3000);
        //validation code to see State field is mandatory.  
    }
    document.getElementById("second").onmouseover = function fun() {
        $('.home-hero').css('background-image','url(img/background16.jpg)').fadeIn(3000);
        //validation code to see State field is mandatory.  
    }
    document.getElementById("third").onmouseover = function fun() {
        $('.home-hero').css('background-image','url(img/background19.jpg)').fadeIn(3000);
        //validation code to see State field is mandatory.  
    }
    document.getElementById("fourth").onmouseover = function fun() {
        $('.home-hero').css('background-image','url(img/background24.jpg)').fadeIn(3000);
        //validation code to see State field is mandatory.  
    }
    document.getElementById("fifth").onmouseover = function fun() {
        $('.home-hero').css('background-image','url(img/background21.jpg)').fadeIn(3000);
        //validation code to see State field is mandatory.  
    }
    document.getElementById("sixth").onmouseover = function fun() {
        $('.home-hero').css('background-image','url(img/background14.jpg)').fadeIn(3000);
        //validation code to see State field is mandatory.  
    }

}