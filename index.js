var ml = [
    {
        song:"Mask OFF",
        author:"...",
        source:"./audio/Future+Mask+Off.mp3"
    },
    {
        song:"Bad Boy",
        author:"Marwa Loud",
        source:"./audio/Bad+Boy+Marwa+Loud+Lyrics+🎵.mp3"
    }
]

var x = document.getElementById("bb"); 
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var mxv =1.0;
function playAudio() { 
    myFunction();
    x.play(); 
    function myFunction() {
        var element = document.getElementById("mus");
        element.classList.toggle("rotate");
        play.classList.add("hide");
        pause.classList.remove("hide");
    }
  } 
  
  function pauseAudio() { 
    myFunctionp();
    x.pause(); 
    function myFunctionp() {
        var element = document.getElementById("mus");
        element.classList.remove("rotate");
        pause.classList.add("hide");
        play.classList.remove("hide");
    }
  } 
  function setHalfVolume() { 
    var i;
    x.volume += 0.1;
  } 
    
  function setFullVolume() { 
    x.volume -=0.1;
  } 

