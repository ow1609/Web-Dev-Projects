let gamePattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];


function addNextInSequence() {
    let randomNumber = (Math.floor(Math.random() * 4));
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
}

/*
Key Learning Point:
NB startGame instead of startGame() (ie. without parentheses) 
so the startGame function only gets called as a callback function
upon the click event, as per event listener syntax
We only want the function to be called upon the click event happening
With parentheses, startGame() would be called with or without the click event
*/
$("#start-game-btn").click(startGame); 

$(".btn").on("click", function(event) {
    // event.target is the DOM element that triggered the event
    let userChosenColour = event.target.id;
    animateButton(userChosenColour);
    playButtonSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
});
    
    
function startGame(){
    $("#start-game-btn").hide();
    addNextInSequence()
    // NB animateButton instead of animateButton() for same reason as before
    gamePattern.forEach(animateButton);
    gamePattern.forEach(playButtonSound);
    }

function animateButton(colour) {
    $("#" + colour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function playButtonSound(colour) {
    let buttonSound = new Audio("./sounds/" + colour + ".mp3");
    buttonSound.play();
}

