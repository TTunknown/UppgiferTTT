// uppg 2

var index = 0;
var imageList = ['assets/img/bananasplit.jpg', 'assets/img/cremebrulee.jpg'];

function changeImage() {
  index = index + 1;
  if (index == imageList.length) {
     index = 0;
  }
  var image1 = document.getElementById("myImage");
  image1.src = imageList[index];
}

let i = 1;
let chang;

function changeLoop() {
  if (i == 1) {
    clearInterval(chang);
    document.getElementById("changloop").innerHTML = "Start";
    i = 0;
  } else if (i == 0) {
    chang = setInterval(changeImage, 1);
    document.getElementById("changloop").innerHTML = "Stop"
    i = 1;
  }
}


