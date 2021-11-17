        var allimg = document.querySelectorAll(".slider .slider-img");
            var right = document.querySelector(".slider .right-arrow");
            var left = document.querySelector(".slider .left-arrow");
            var imgright = document.querySelector(".slider .img-right");
            var imgcenter = document.querySelector(".slider .img-center");
            var imgleft = document.querySelector(".slider .img-left");
            var numbercenter = 1;

            right.onclick = function(){
                for(i=0;i<allimg.length;i++){
                    allimg[i].style.cssText = "transition: transform ease 1s;"
                }
                numbercenter++
                imgright.style.cssText = "transform: translateX(0%);"
                imgcenter.style.cssText = "transform: translateX(-100%);"
                imgleft.style.cssText = "transform: translateX(-200%);"

                setTimeout(changeimg, 1000);
            };
            left.onclick = function(){
                for(i=0;i<allimg.length;i++){
                    allimg[i].style.cssText = "transition: transform ease 1s;"
                }
                numbercenter--
                imgright.style.cssText = "transform: translateX(200%);"
                imgcenter.style.cssText = "transform: translateX(100%);"
                imgleft.style.cssText = "transform: translateX(0%);"
                setTimeout(changeimg, 1000);
            };
            
            function changeimg(){
                for(i=0;i<allimg.length;i++){
                    allimg[i].style.cssText = "transition: transform ease 0s;"
                }
                if(numbercenter > 5){
                    numbercenter= 1;
                }
                if(numbercenter < 1){
                    numbercenter= 5;
                }
                if(numbercenter >= 5){
                    numberright= 1;
                }
                else{
                    numberright= numbercenter+1; 
                }
                if(numbercenter <= 1){
                    numberleft= 1;
                }
                else{
                    numberleft= numbercenter-1; 
                }
                document.querySelector(".slider .img-right img").src = "img/slider"+ numberright +".webp"
                document.querySelector(".slider .img-center img").src = "img/slider"+ numbercenter +".webp"
                document.querySelector(".slider .img-left img").src = "img/slider"+ numberleft +".webp" 
                imgright.style.cssText = "transform: translateX(100%); transition: transform ease 0s;"
                imgcenter.style.cssText = "transform: translateX(0%); transition: transform ease 0s;"
                imgleft.style.cssText = "transform: translateX(-100%); transition: transform ease 0s;"
            }