

var gamePattern = new Array();
var userPattern = new Array();
var buttonColors =['red','blue','green','yellow'];
var level=0;
var started=false;

document.addEventListener("keypress",function(){
    if (!started){
        nextSequence();
        started=true;
    }
});

$("button").click(function(event){
    var userSelectedColor = event.target.className ;
    userPattern.push(userSelectedColor);
    
    playanimation(userSelectedColor);
    playSound(userSelectedColor);

    checkanswer(userPattern.length-1);
});

function nextSequence(){
    userPattern=[];
    level++;
    $("h1").text("Level "+ level);
    var randomNumber = Math.floor(Math.random()*4) ;
    var randomColor = buttonColors[randomNumber] ;
    $(document).ready(function(){
        $("."+randomColor).animate({ opacity : 0.2},200).animate({ opacity : 1},200);
        playSound(randomColor);
    });
    gamePattern.push(randomNumber);

}

function playSound(sound){
    var audio = new Audio("./sounds/"+sound+".mp3");
    audio.load(); 
    audio.play();
}

function playanimation(color){
    $("."+color).addClass('pressed');
    setTimeout(function(){
        $("."+color).removeClass('pressed');
    },200);
}

function checkanswer(last_index){
    if (buttonColors[gamePattern[last_index]]===userPattern[last_index]){
        if (gamePattern.length===userPattern.length){
            setTimeout(()=>nextSequence(),1200);
        }
    }
    else{
        $("h1").text("Game-Over,Press any key to restart")
        playSound("wrong");
        $('body').addClass('game-over');
        setTimeout(function(){
            $('body').removeClass('game-over');
        },200);
        startover();
    }
}

function startover(){
    level=0;
    gamePattern.length=0;
    started=false
}

