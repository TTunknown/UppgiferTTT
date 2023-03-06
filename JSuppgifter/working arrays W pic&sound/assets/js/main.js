let dessertDisplay = new Array();

dessertDisplay[0] = new Image();
dessertDisplay[0].src = 'assets/images/bananasplit.jpg';
dessertDisplay[0].title = 'Banana Split';
dessertDisplay[0].audio = new Audio();
dessertDisplay[0].audio.src = 'assets/audio/bass.mp3';
dessertDisplay[0].onmousemove =
function() {
  alert("basstest");
  this.audio.play();
}

dessertDisplay[1] = new Image();
dessertDisplay[1].src = 'assets/images/cremebrulee.jpg';
dessertDisplay[1].title = 'Creme Brulee';
dessertDisplay[1].audio = new Audio();
dessertDisplay[1].audio.src = 'assets/audio/boom.mp3';
dessertDisplay[1].onmousemove =
function() {
  alert("boomtest");
  this.audio.play();
}

dessertDisplay[2] = new Image();
dessertDisplay[2].src = 'assets/images/konpeito.jpg';
dessertDisplay[2].title = 'Konpeito';
dessertDisplay[2].audio = new Audio();
dessertDisplay[2].audio.src = 'assets/audio/skeleton.mp3';
dessertDisplay[2].onmousemove =
function() {
  alert("skeletonSoundtest");
  this.audio.play();
}

dessertDisplay[3] = new Image();
dessertDisplay[3].src = 'assets/images/lemondrops.jpg';
dessertDisplay[3].title = 'Lemon Drops';
dessertDisplay[3].audio = new Audio();
dessertDisplay[3].audio.src = 'assets/audio/xqc.mp3';
dessertDisplay[3].onmousemove =
function() {
  alert("xqcTest");
  this.audio.play();
}

function nextImage(){
    let img = document.getElementById("mainImage");
    
    
    for(let i = 0; i < dessertDisplay.length;i++){
        if(dessertDisplay[i].src == img.src){
            if(i === dessertDisplay.length -1){
                document.getElementById("mainImage").src = dessertDisplay[0].src;
                document.getElementById("mainText").innerHTML = dessertDisplay[0].title;
                break;
            }
            document.getElementById("mainImage").src = dessertDisplay[i+1].src;
            document.getElementById("mainText").innerHTML = dessertDisplay[i+1].title;
            break;
        }
    }
}
function previousImage(){
    let img = document.getElementById("mainImage");
    for(let i = dessertDisplay.length-1; i >=0 ;i--){
        if(dessertDisplay[i].src == img.src){
            if(i === 0 ){
                document.getElementById("mainImage").src = dessertDisplay[5].src;
                document.getElementById("mainText").innerHTML = dessertDisplay[5].title;
                
                break;
            }
            document.getElementById("mainImage").src = dessertDisplay[i-1].src;
            document.getElementById("mainText").innerHTML = dessertDisplay[i-1].title;
            break;
        }
    }
}
