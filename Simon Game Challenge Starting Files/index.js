let gamePattern = [];
let userClickedPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];


function addNextInSequence() {
    console.log(`addNextInSequence invoked. Current game pattern is ${gamePattern}. Adding a new colour...`);
    userClickedPattern = []; // Reset user's pattern for the new sequence
    let randomNumber = (Math.floor(Math.random() * 4));
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(randomChosenColour + " added to Sequence");
    console.log("gamePattern is now: " + gamePattern);
}



let gameStarted = false; // Flag to track if the game has started

// Event listener for the Start Game button
$("#start-game-btn").on("click", function () {
    if (!gameStarted) {
        gameStarted = true;
        $("#start-game-btn").hide();
        playGamePattern();
    }
})

function playGamePattern() {
    let delay = 0;

    gamePattern.forEach((color, index) => {
        setTimeout(() => {
            buttonAnimation(color);
        }, delay);

        delay += 800; // Increment delay for the next color
    })
}

function buttonAnimation(randomChosenColour) {
    $("#" + randomChosenColour)
        .animate({ opacity: 0.5 }, 200) // Reduce opacity to 0.5 over 100ms (fade out effect for clearer visible change for user)
        .animate( {opacity: 1 }, 200); // Restore opacity to 1 over 100ms
    
    // Play the corresponding sound
    let buttonSound = new Audio("./sounds/" + randomChosenColour + ".mp3");
    console.log("buttonSound: " + buttonSound);
    buttonSound.play();   
    }



// Event listener for button clicks
$(".btn").on("click", function(event) {
    /*
    Get the id of the button (<div> element)that triggered the event
    and store it in a variable called userChosenColor
    event.target is the DOM element that triggered the event
    */
    let buttonClickedByUser = event.target.id;
    console.log("User clicked: " + buttonClickedByUser);
});

function animatePress(currentColour) {
    // TODO: Add implementation later

}





