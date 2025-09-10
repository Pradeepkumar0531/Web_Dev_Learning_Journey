var randomNumber1 = Math.floor(Math.random()*6)+1;
var imageName1 = "./images/dice"+ randomNumber1 +".png";
var player1 = document.querySelectorAll("img")[0];
player1.setAttribute("src",imageName1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var imageName2 = "./images/dice"+ randomNumber2 +".png";
var player2 = document.querySelectorAll("img")[1];
player2.setAttribute("src",imageName2);

if (randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML="Player1 Won";
}
else if (randomNumber1<randomNumber2){
    document.querySelector('h1').innerHTML="Player2 Won";

    document.querySelector('h1').style.color="rgb(231, 107, 231)";
    document.querySelector('body').style.backgroundColor="rgb(97, 24, 116)";
}
else if (randomNumber1==randomNumber2){
    document.querySelector('h1').innerHTML="Draw";
    document.querySelector('body').style.backgroundColor="black";
}
