let gamePattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour = buttonColours[nextInSequence()];


function updateGamePattern() {
    gamePattern.push(randomChosenColour);
}

function nextInSequence() {
    let randomNumber = (Math.floor(Math.random() * 4));
    return randomNumber;
}

/*
NB startGame instead of startGame() (ie. without parentheses) 
so the startGame function only gets called as a callback function
upon the click event, as per event listener syntax
We only want the function to be called upon the click event happening
With parentheses, startGame() would be called with or without the click event
*/
$("#start-game-btn").click(startGame); 
    
    
function startGame(){
    console.log("Start button pressed");
    $("#start-game-btn").hide();
    updateGamePattern() 
    // NB animateButton instead of animateButton() for same reason as before
    gamePattern.forEach(animateButton);
    }

function animateButton(randomChosenColour) {
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}