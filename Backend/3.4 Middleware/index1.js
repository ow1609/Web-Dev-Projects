/*
Purpose of this file:
To render the html form in index.html (from the public folder of this directory)
as the thing we are going to return (i.e. the response) from the server
*/

import express from "express";
// import dirname (directory name) from the "path" module that's bundled with Node
import { dirname } from "path";
// import fileURLToPath from the build-in "url" module that's bundled with Node
import { fileURLToPath } from "url";
// Use conversion to end up with a constant called __dirname (directory name)
// __dirname is all of the path up until the path that we want to access
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

// Add middleware to parse incoming form data
app.use(express.urlencoded({extended: true}));
const port = 3000;
/*
Explanation of the above:
app.use() tells Express to use middleware for all incoming requests
express.urlencoded() is the built-in middleware that parses URL-encoded form data
(the type of data HTML forms send by default)
{ extend: true } allows for rich objects and arrays to be encoded
into the URL-encoded format (it uses a library called qs under the hood for more complex parsing)

Without this middleware, req.body would be undefined and we would not be able to access the form data
*/

// A route handler for GET requests to the homepage
/*
The following lines of code should mean that we see the html form from index.html
rendered on screen when we make a GET request to the homepage
*/

app.get("/", (req, res) => {
  /* 
  We can log the directory name plus the path to the file we want
  So when we hit up the GET route (i.e. make a GET request from a client or Postman)
  in Postman, we will see a log of the exact path in the log
  Once the project is hosted somewhere online, the path will be relative to the computer it's hosted on
  */
  console.log(__dirname + "/public/index.html");

  /* 
  In previous lessons, we have seen res.send but here we're using res.sendFile 
  res.sendFile requires an exact path in order to know which file to send back
  want to send index.html from the public folder of this directory
  in order to get the full path of the index file have to do some extra work
  see end of file for explanation
  */
  res.sendFile(__dirname + "/public/index.html");
});


// Create a POST route handler
app.post("/submit", (req, res) => {
  console.log(req.body);
})
/*
Explanation:

The above creates a route handler to catch POST requests
which are sent to the /submit route from the HTML form in index.html

app.post() creates a route handler specifically for POST requests
/submit is the path that matches the `action` attribute in the HTML form
(req, res ) => {} is the callback function that runs when someone makes a POST request to /submit
req.body is where the parsed form data will be available (thanks to the middleware added above)
console.log(req.body) will print the form data to the terminal/console so we can see what was submitted
*/

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


/*
When your server is hosted on a cloud computer 
when server no longer hosted locally (on local host)
which is the case for most servers
in order to figure out the directory name for where index.html lives it takes a little work
These lines at the top of the file handle this:

  import { dirname } from "path";
  import { fileURLToPath } from "url";
  const __dirname = dirname(fileURLToPath(import.meta.url));

See in-line notes above

__dirname is all of the path up until
and INCLUDING the directory (folder) where the file that we want is located
hence dirname meaning "directory name". It's the path pointing to the folder name

In my case it would be:

`/Users/onuorawright/Web-Dev-Projects/Backend/3.4 Middleware/`

And this is all figured out with just these 3 lines of code:

  import { dirname } from "path";
  import { fileURLToPath } from "url";
  const __dirname = dirname(fileURLToPath(import.meta.url));

Because when it is true for local development, such as the path at the moment, 
once we've actually put our server up into the cloud and host it somewhere,
the path will change. 

Therefore, we need a way to figure out the path to the directory dynamically
this is one of the best ways to figure out the path dynamically using Node and Express


*/