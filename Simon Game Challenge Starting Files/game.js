/*
TODO step 7 in Game development module - look into persistence
Increment level whenever user gets to end of gamePattern with matching sequence

*/

let gamePattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];
let levelCount = 0;
let gameStarted = false;


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
// $("#user-feedback").text(`Level ${levelCount}`);


$(".btn").on("click", function(event) {
    // Key Learning Point:
    // event.target is the DOM element that triggered the event
    let userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);
    animateButton(userChosenColour);
    playSound(userChosenColour);
    checkPatternMatch(userClickedPattern.length - 1);
});
    
    
function startGame(){
    if (!gameStarted) {
        gameStarted = true; // Mark the game as started
        $("#start-game-btn").hide();
        levelCount = 0;
        gamePattern = [];
        nextLevel();
        console.log("gamePattern is: " + gamePattern);
        }
    }


function nextLevel() {
    userClickedPattern = []; // Clear the user's input for the new level
    $("#user-feedback").text(`Level ${levelCount}`);
    levelCount ++;
    addNextInSequence();
    // Key learning point - for a detailed explanation of the following see end of file
    gamePattern.forEach((color, index) => {
        setTimeout(() => {
            animateButton(color);
            playSound(color);
        }, 500 * index);
    })
}

function animateButton(buttonId) {
    $("#" + buttonId).fadeOut(100).fadeIn(100);
}

function playSound(soundName) {
    let sound = new Audio("./sounds/" + soundName + ".mp3");
    sound.play();
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

// while loop for incrementing the game after successful checks

function checkPatternMatch(currentIndex) {
    if (userClickedPattern[currentIndex] === gamePattern[currentIndex]) {
        console.log("Correct input so far!");

        if (userClickedPattern.length === gamePattern.length) {
            console.log("User completed the pattern at this level! Level up!");
            // TODO give visual countdown to user to see when next level about to start
            setTimeout(nextLevel, 2000); // Proceed to the next level after 2 second delay
        }
    } else {
        console.log("Wrong input! Game over.");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 1000);
        $("#user-feedback").text("Game Over! Press Start to Try Again!");
        resetGame();
    }  
}

function resetGame() {
    gameStarted = false;
    gamePattern = [];
    userClickedPattern = [];
    levelCount = 0;
    $("#start-game-btn").show();
}

/*
    Detailed breakdown of:

    gamePattern.forEach((color, index => {
        setTimeout(() => {
            animateButton(color);
            playSound(color);
        }, 1000 * index);
    }))

Courtesy of GitHub Copilot:

    1. . gamePattern.forEach():
        What it does:

        The .forEach() method is used to iterate over each element in the gamePattern array.
        For each element, it executes the callback function provided as an argument.
        Parameters:

        The callback function takes two arguments:
        color: The current element in the array (e.g., "red", "blue", etc.).
        index: The position of the current element in the array (e.g., 0 for the first element, 1 for the second, etc.).
        Example: If gamePattern = ["red", "blue", "green"], the .forEach() method will:

        Call the callback function with color = "red" and index = 0.
        Call the callback function with color = "blue" and index = 1.
        Call the callback function with color = "green" and index = 2.

    2. Arrow Function (=>):
    What it does:

    The arrow function syntax ((color, index) => { ... }) is a shorthand way to define a function.
    It is equivalent to writing:

        
    gamePattern.forEach(function(color, index) {
        setTimeout(function() {
            animateButton(color);
            playSound(color);
        }, 1000 * index);
    });

Key Differences:

Arrow functions are more concise.
Arrow functions do not have their own this context, which makes them useful in certain situations (though this is not relevant here).
Can => Be Replaced with function?:

Yes, you can replace the arrow function with the function keyword. The behavior will remain the same in this case.

3. setTimeout():
What it does:

The setTimeout() function delays the execution of the code inside it by a specified number of milliseconds.
In this case, it delays the execution of animateButton(color) and playButtonSound(color).
Why Use setTimeout()?:

Without setTimeout(), all animations and sounds would play simultaneously.
By adding a delay, each color in the gamePattern is animated and played sequentially.


4. 1000 * index:
What it does:

The delay for each setTimeout() is calculated as 1000 * index.
This ensures that each color in the gamePattern is animated and played 1 second apart.
How It Works:

For the first element (index = 0), the delay is 1000 * 0 = 0ms (no delay).
For the second element (index = 1), the delay is 1000 * 1 = 1000ms (1 second).
For the third element (index = 2), the delay is 1000 * 2 = 2000ms (2 seconds).
This creates a staggered effect where each color is animated and played sequentially.

5. animateButton(color) and playButtonSound(color):
What they do:

animateButton(color): Animates the button corresponding to the current color.
playSound(color): Plays the sound corresponding to the current color.
Why Inside setTimeout()?:

Placing these functions inside setTimeout() ensures that the animation and sound for each color are delayed appropriately.

Full Breakdown of Execution:
Assume gamePattern = ["red", "blue", "green"]:

First Iteration (index = 0):

color = "red".
setTimeout() is called with a delay of 1000 * 0 = 0ms.
animateButton("red") and playSound("red") execute immediately.
Second Iteration (index = 1):

color = "blue".
setTimeout() is called with a delay of 1000 * 1 = 1000ms.
After 1 second, animateButton("blue") and playSound("blue") execute.
Third Iteration (index = 2):

color = "green".
setTimeout() is called with a delay of 1000 * 2 = 2000ms.
After 2 seconds, animateButton("green") and playSound("green") execute.

Summary:
color and index:

color: The current element in the gamePattern array.
index: The position of the current element in the array.
Arrow Function (=>):

A shorthand way to define a function. It can be replaced with the function keyword.
1000 * index:

Ensures that each color is animated and played 1 second apart.
setTimeout():

Delays the execution of animateButton(color) and playButtonSound(color) to create a sequential effect.
            */