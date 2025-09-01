function mainloop(){

    
    if(scrollY < 227){
        document.getElementById("androidico").style.scale = 1;
        document.getElementById("androidico").style.left = scrollY*4;
        document.getElementById("androidico").style.top =  100 -scrollY;
        
    }else{
        document.getElementById("androidico").style.scale = 0.1;
        document.getElementById("androidico").style.top =  auto;
        document.getElementById("androidico").style.right =  auto;
        

    }
        

    



}

setInterval(mainloop,1);