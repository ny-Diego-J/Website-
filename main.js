function mainloop(){

    
    if(scrollY < 227){
        document.getElementById("androidico").style.scale();
        document.getElementById("androidico").style.left = scrollY*4;
        document.getElementById("androidico").style.top =  100 -scrollY;
        
    }
    else{
        document.getElementById("androidico").style.scale = 0.1;
        document.getElementById("androidico").style.top =  10;
        document.getElementById("androidico").style.right = 0;
        
                
    }
    
};

setInterval(mainloop,1);