$(document).ready(function () {

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
            });