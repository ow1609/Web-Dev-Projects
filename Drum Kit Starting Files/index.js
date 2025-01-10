let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        let buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
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
    });
}



