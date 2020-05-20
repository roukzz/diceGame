
var randomNumber1= Math.floor((Math.random()*6)) +1;// 1-6

var randomImage1 = "images/dice"+randomNumber1+".png";


document.querySelector(".img1").setAttribute("src",randomImage1);

var randomNumber2= Math.floor((Math.random()*6)) +1;// 1-6
var randomImage2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomImage2);

  var win1= "Player 1 Wins!"
  var win2= "Player 2 Wins!"

// wining conditions.

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML=win1;
} else if (randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML="DRAW!";
} else {
    document.querySelector("h1").innerHTML=win2;
}

document.getElementById("btn-id").addEventListener("click",reload);

function reload(){
  window.location.reload();
}
