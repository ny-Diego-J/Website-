function mainloop(){

    
    if(scrollY < 300){
        document.getElementById("androidico").style.left = scrollY*3;
        document.getElementById("androidico").style.top =  100 -scrollY;
        document.getElementById("androidico").style.width = 145%;
    }
        

    



}

setInterval(mainloop,1);