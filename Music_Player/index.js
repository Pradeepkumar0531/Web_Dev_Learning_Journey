

// JavaScript

document.addEventListener('keypress',function(event){
    playSound(event.key);
    forAnimation(event.key);
});

for(var i=0; i<7; i++){
    document.querySelectorAll('button')[i].addEventListener("click",function (){
        var buttonInner = this.innerHTML;
        playSound(buttonInner);
        forAnimation(buttonInner);
    });
}

function playSound(sound){
    switch (sound){
            case "f":
                var audio = new Audio('./sounds/tom-1.mp3');
                audio.play();
                break;
            case "a":
                var audio = new Audio('./sounds/tom-2.mp3');
                audio.play();
                break;
            case "s":
                var audio = new Audio('./sounds/tom-3.mp3');
                audio.play();
                break;
            case "d":
                var audio = new Audio('./sounds/tom-4.mp3');
                audio.play();
                break;
            case "j":
                var audio = new Audio('./sounds/crash.mp3');
                audio.play();
                break;
            case "k":
                var audio = new Audio('./sounds/kick-bass.mp3');
                audio.play();
                break;
            case "l":
                var audio = new Audio('./sounds/snare.mp3');
                audio.play();
                break;
            default:
                break;
        }
}

function forAnimation(current){

    var activateButton = document.querySelector("."+current);
    activateButton.classList.add("pressed");

    setTimeout(function(){
        activateButton.classList.remove("pressed");
    },150)

}
