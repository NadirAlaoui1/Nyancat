//Moving Nyan Function

function Nyan() {
    var elem = document.getElementById("myAnimation");
    var pos = 0;
    var id = setInterval(frame, 10);

    function frame() {
        if (pos >= 100) {
            clearInterval(id);
        } else {
            pos += 0.1;
            elem.style.top = pos + '%';
            elem.style.left = pos + '%';
        }
    }
}

//Toggle background on/off 

var elembg = document.getElementById("background");
var elembtn = document.getElementById("button");

function noBackground() {
    elembg.style.visibility = "hidden";
    elembtn.style.visibility = "visible";
}


function showBackground() {
    elembg.style.visibility = "visible";
    elembtn.style.visibility = "hidden";
    setTimeout(noBackground, 11000);
}

//Start and Stop Nyansong

var x = document.getElementById("soundtrack");

function playNyan (){
    x.play();
    setTimeout(pauseAudio, 11000);
}

function pauseAudio (){
    x.pause();
}