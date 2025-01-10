let numberOfDrumButtons = document.querySelectorAll(".drum").length;
let audio = new Audio("./sounds/tom-1.mp3");

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
       audio.play(); 
    });
}


