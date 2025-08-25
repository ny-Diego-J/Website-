function mainloop(){

    if(scrollY > 100){
        console.log("test complete");
    }
    
    document.getElementById("test").style.left = scrollY;



}

setInterval(mainloop,1000);