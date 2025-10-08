/* index1 = lesson 1 - creating our first server using express and node js*/

/* 
Express is a JS framework that uses Node - widely used to build back ends
We're using module-based JS - the latest version of JS so we can import express from the express module we just installed
*/


// import express from the express module we just installed
import express from "express";

// create an app using this express object
const app = express();

/* Once we've created that app, there's a method on that app called 'listen'

1st argument passed into the 'listen' method is 3000 - the port
- The port is the location of our server where we're going to be listening for requests from the client-side

2nd argument is a callback function - console.log
- This call back function will be triggered when our server is set up
So, as soon as our app is listening on port 3000 and everything is done, it's going to trigger this callback function

*/

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// })


// below is better way of specifying the port so not hardcoded into the listen method like above...
// create a 'port' variable instead so can use that for every reference to the port
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})