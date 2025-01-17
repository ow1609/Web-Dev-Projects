
// .click() method adds event listener for clicking h1 element
// .click() will call the callback function when the h1 is clicked
$("h1").click(function() {
    // callback function changes colour of the h1
    $("h1").css("color", "purple");
})

// .html() method means browser will read html tags and apply them
// whereas .text() would include what is intended as an html tag and render it simply as a string

$("button").html("<em>Hey<em>"); // changes innerHTML updating text to hey and making it italic


// .attr() method can be used to get and set the attributes of html elements
// below jquery selects anchor tag element and sets its href attribute to google.com and adds content of anchor tag with text
$("a").attr("href", "https://www.google.com").text("Search"); 


// vanilla js to add event listeners to all 5 button elements 
// so when any of the buttons is clicked, it calls the callback function which changes the h1's colour

// for (var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "blue";
//     })
// }

// below is jquery equivalent of the above js for loop method 
// no need for for loop as it jquery adds it to all buttons
// also less verbose in general with $ etc
// $("button").click(function() {
//     $("h1").css("color", "pink");
// })

// add event listener to detect for keystrokes inside out textbox (input html element) using jquery

$("input").keypress(function(event) {
    console.log(event.key); // when key pressed (the event) console log the "key" property of the keypress event
})

// options for detecting keypresses anywhere on page with jquery selectors: $("body") or $(document)

// $("body").keypress(function(event) {
//     alert("You pressed the " + event.key + " key");
// })

$(document).keypress(function(event) {
    console.log("The use pressed the " + event.key + " key");
})

// using .on() method to add event listeners
// $("a").on("mouseover", function() {
//     $("a").css("color", "pink");
// })

$("button").on("mouseout", function() {
    $("button").text("visited");
})

// using jquery to add new html elements
// the .before() method stipulates to position the new button element before the h1
$("h1").before("<button>New Button Element</button>");

// the .after() method stipulates to create the new element after the selected element
$("a").after("<p>Enter your text inside this box:</p>");

// .prepend() method to add an element inside another element just after its opening tag
$("h1").prepend("<button>Button prepended inside h1 element just after h1's opening tag</button>");

// .append() method to add an element inside another element just before its closing tag
$("h1").append("<button>This button is appended inside the h1 element just before the h1's closing tag</button>")

// the following line selects all our button elements and deletes them
// $("button").remove();


// Adding animation using jquery

// .hide() animation method
// our click event listener method will call the callback function
// which will hide the h1 element when any button is clicked
// $("button").click(function() {
//     $("h1").hide();
// })

// to make the h1 show instead
// $("button").click(function() {
//     $("h1").show();
// })


// .toggle() to hide and show the h1
// $("button").click(function() {
//     $("h1").toggle();
// })


// .fadeOut() method 

// $("button").click(function() {
//     $("h1").fadeOut();
// })


// // .fadeIn() method
// $("button").on("mouseover", function() {
//     $("h1").fadeIn();
// })

// .fadeToggle() 

// $("button").click(function() {
//     $("h1").fadeToggle();
// })


// .slideUp() - useful for drop down menus

// $("button").click(function() {
//     $("h1").slideUp();
// })

// .slideDown() - useful for drop down menus

// $("button").on("mouseover", function() {
//     $("h1").slideDown();
// })

// .slideToggle() - useful for drop down menus

// $("button").click(function() {
//     $("h1").slideToggle();
// })

// .animate() method allows you to define some custom css that you want to gradually animate toward
// $("button").on("click", function() {
//     $("h1").animate({opacity: 0.5});
// })

// NB can only put css rules that take a numerical value inside the .animate() method
// ie. cannot do $("h1").animate({color: red}); but CAN do $("h1").animate({margin: 20});
// CAN do $("h1").animate({margin: "20%"}) becuase although it's a string, its still a numerical value as a percentage

// chaining animations together

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})