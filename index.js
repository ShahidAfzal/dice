// code for first dice
var randomNumber1 = Math.floor(Math.random() *6)+1;
var randomImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomImage;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

// code for 2nd dice 
var randomNumber2 = Math.floor(Math.random() *6)+1;
var randomDice2= "images/dice" +randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDice2);


if(randomImageSource>randomDice2){
    document.querySelector("h1").innerHTML=("player 1 wins🚩");
}
else if(randomImageSource===randomDice2){
    document.querySelector('h1').innerHTML="Draw!";
}
else{
    document.querySelector("h1").innerHTML=("player 2 wins🚩");
}

