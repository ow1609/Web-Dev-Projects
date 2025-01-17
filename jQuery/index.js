$("h1").addClass("big-title margin-50").text("Bye"); // .text() method 

// .html() method means browser will read html tags and apply them
// whereas .text() would include what is intended as an html tag and render it simply as a string

$("button").html("<em>Hey<em>"); // changes innerHTML updating text to hey and making it italic
