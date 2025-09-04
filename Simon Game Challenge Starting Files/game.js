/*
TODO step 7 in Game development module - look into persistence
Add a "game level" element

*/

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
    // TODO Call game pattern checker function here
});
    
    
function startGame(){
    // TODO - add check here to know if start game button is hidden or showing
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

/*
TODO
Define a function that checks userClickedPattern against gamePattern
Negative error sound to feedback to user for incorrect press
If  user makes a mistake {
    clear userClickedPattern
    clear gamePattern
    set game level to 0
    reinstate the start game button
}
Positive sound to feedback to user if they reached the end of the gamePattern
    If user completes pattern {
    clear userClickedPattern array
    increment the game level number
    call addNextInSequence() function
    $("#start-game-btn").show();

}

 */

