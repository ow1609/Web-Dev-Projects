let gamePattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];


function nextSequence() {
    let randomNumber = (Math.floor(Math.random() * 4));
    return randomNumber;
}

let randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);

function buttonAnimation(randomChosenColour) {
    switch (randomChosenColour) {
        case "red":
            $("#red").animate({opacity: 0.5});
            let redButtonSound = new Audio("./sounds/red.mp3");
            redButtonSound.play();
            break;

        case "blue":
            $("#blue").animate({opacity: 0.5});
            let blueButtonSound = new Audio("./sounds/blue.mp3");
            blueButtonSound.play();
            break;
        
        case "green":
            $("#green").animate({opacity:0.5});
            let greenButtonSound = new Audio("./sounds/green.mp3");
            greenButtonSound.play();
            break;
        
        case "yellow":
            $("#yellow").animate({opacity: 0.5});
            let yellowButtonSound = new Audio("./sounds/yellow.mp3");
            yellowButtonSound.play();
            break;
        
        default: console.log(randomChosenColour);

    }
}
