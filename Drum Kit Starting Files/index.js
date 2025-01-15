let numberOfDrumButtons = document.querySelectorAll(".drum").length;


// detecting mouse click on on-screen buttons
for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// detecting keyboard presses
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key) {

    switch (key) {
        case "w":
            let crashSound = new Audio("./sounds/crash.mp3");
            crashSound.play();    
            break;
        
        case "a":
            let kickDrumSound = new Audio("./sounds/kick-bass.mp3");
            kickDrumSound.play();
            break;
        
        case "s":
            let snareSound = new Audio("./sounds/snare.mp3");
            snareSound.play();
            break;
        
        case "d":
            let tom1Sound = new Audio("./sounds/tom-1.mp3");
            tom1Sound.play();
            break;

        case "j":
            let tom2Sound = new Audio("./sounds/tom-2.mp3");
            tom2Sound.play();
            break;

        case "k":
            let tom3Sound = new Audio("./sounds/tom-3.mp3");
            tom3Sound.play();
            break;
        
        case "l":
            let tom4Sound = new Audio("./sounds/tom-4.mp3");
            tom4Sound.play();
            break
        
        default: console.log(buttonInnerHTML);

    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    // apply "pressed" class from css file to create shadow effect on click or on keyboard press
    activeButton.classList.add("pressed");

    // time out function to restore button back to normal
    setTimeout(function() {
        activeButton.classList.remove("pressed");

    }, 100) // 100 milliseconds = a 0.1 second wait before shadow is removed
}

