/* index2 = lesson 2 - HTTP Requests */

/*
HTTP = HyperText Transfer Protocol
HTTP = the language that computers use to talk to each other over the internet
'Transfer protocol' part of HTTP is what describes it as a language

HTTP Requests
5 main keywords to understand in terms of HTTP requests:
"GET" - request a resource from the server
    - resources such as e.g. html website, a piece of text, some data
    - you are "getting" something from the server when you make a HTTP GET request using the 'GET' keyword

"POST" - sending a resource to the server
    - e.g. a peice of information if you have a <form> to sign up to your website
        - user's email and password is going to be sent to the server when they click the "sign up" button - this will be done with a POST request
        - then, on the server side, you can take that information and do whatever you will with it
            - e.g. save it into a database or process it or work with it somehow

"PUT" and "PATCH" are both update requests
    - PUT - replace a resource on the server - update something by replacing it comepletely
    - PATCH - patch up a resource on the server - update a resource by updating or fixing part of it
    analogy for the difference between put and patch is an Amazon delivery
        order a bike but it has a broken wheel
        Amazon can update the bike by giving you an entire replacement bike (PUT request)
            - or, can send a working wheel to PATCH up the bike, fixing just the missing part

"DELETE" - remove a resource from the server or from the database
    - a request from the client-side computer saying to the server-side computer that there is something that needs to be deleted

In the following code, we have a server created using Node and Express
We are running this server on port 3000
When we run this code and we try to load up the website at that location (localhost port 3000),
we get an error saying "Cannot GET /"

What this means is you, the client, using the browser, are trying to GET
a resource (namely the homepage) to load up but you "Cannot GET /" because 
our server does not yet have any code that allows us to do that

============================================

import express from "express";

const app = express();


const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

===================================

So, what do we do to fix this?

We need to add a little bit of code to say what will happen when a user is trying to GET at our homepage
The "/"" goes at the end of the home page
    - e.g. you can have "/"" at the end localhost:3000/
    - or, without, you can just have localhost:3000
Either way, when you load this address up, it's trying to make a GET request to the "root"
the root = the homepage

*/

import express from "express";

const app = express();

// Add the express method called "get" so now our server knows what to do
// when that GET request comes through
// in between the curly braces of the anonymous function we can define how our server
// wants to respond to that GET request
app.get("/", (req, res) => {
    // In this example case, we're telling our server to respond by
    // sending over the words Hello, World!
    res.send("Hello, World!");
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

// And now, try to load up our home page at localhost:3000,
// we see the words "Hello, World!" come up on the browser
