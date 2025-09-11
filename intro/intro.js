var y = 0;
var o = Math.floor(Math. random()*10) + 1;
function mainloop1(){

    if(y <= 9){
        var x = '/gif/tile05.png';
        x = '/gif/tile0' + y + '.png'
       
         document.getElementById("androidgif").src = x;
        y = y + 1;
    }else{
        if(y < 19){
            var x = '/gif/tile05.png';
            x = '/gif/tile' + y + '.png'
           
             document.getElementById("androidgif").src = x;
            y = y + 1;
        }else{
            
            y = y + 1;
        }
    };
    if(y == 21){
        y = 0
    };
    
    
   
};
function redirect(){
    if(o == 50){
        window.location.href = '../main/main.html';
        console.log(o)
    }else{
        o = o + 1;
        console.log(o)
    };
};
setInterval(mainloop1,100);
setInterval(redirect,100)