var left = document.querySelector('#left');
var right = document.querySelector('#right');
var imgs = ['1.jpeg' , '2.jpg' , '3.jpg'];
var bg = document.querySelector('#img');
var i = 0;
left.addEventListener('click' , movePre);
right.addEventListener('click' , moveFwd);

function displayKey() {
  left.style.color = "white";
  right.style.color = "white";
}
function displayKeyOut() {
  left.style.color = "black";
  right.style.color = "black";
}

function moveFwd() {
  i++;
//  bg.style.backgroundImage = imgs[i%3];
  bg.style.backgroundImage = "url(" + imgs[i%3].toString() +")";
}

function movePre() {
  i--;
  bg.style.backgroundImage = "url(" + imgs[i%3].toString() +")";
  // bg.style.backgroundImage = transparent;
}
