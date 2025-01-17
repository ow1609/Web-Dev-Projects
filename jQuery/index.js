
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
for (var i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "blue";
    })
}