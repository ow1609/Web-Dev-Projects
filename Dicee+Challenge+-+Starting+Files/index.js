let randomNumber1 = (Math.floor(Math.random() * 6)) + 1;

document.querySelector("img").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
