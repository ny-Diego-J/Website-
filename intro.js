var y = 0;
function mainloop1(){

    if(y <= 9){
        var x = 'gif/tile05.png';
        x = 'gif/tile0' + y + '.png'
        console.log(x);
    }else{
        var x = 'gif/tile05.png';
        x = 'gif/tile' + y + '.png'
        console.log(x);
    };
    
    
    
    document.getElementById("androidgif").src = x;
    y = y + 1;
};
setInterval(mainloop1,1000);