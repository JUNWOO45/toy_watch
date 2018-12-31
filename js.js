var watch = function(){
    var target = document.querySelector('.target');
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(hours < 10){
        hours = "0" + hours;
    }

    target.innerText = hours + " : " + minutes + " : " + seconds;
};

setInterval("watch()", 1000);
document.body.addEventListener("load", watch());
