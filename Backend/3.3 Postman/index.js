import express from "express";
const app = express();
const port = 3000;

// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************



app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});


/* 
*************************************************
I tried the three alternatives below to experiment with sending multiple things.
All three sent errors. This has been a crucial part of my learning through trial and error. 

The trial and error feedback loop is the quickest way for me to learn and understand how http request and responses work

See Copilot's explanation at the end of the file.



app.get("/", (req, res) => {
  res.sendStatus(200).send("<h1>Home Page</h1>").send("<p>Hey, I'm your server, I'm also sending a paragraph as part of the response to your GET request</p>");
});

app.get("/", (req, res) => {
  res.sendStatus(200);
  res.send("<h1>Home Page</h1>");
});

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>").send("<p>Hey, I'm your server, I'm also sending a paragraph as part of the response to your GET request</p>");
});

*******************************
*/

// Thanks to copilot's explanation, I was able to send multiple things (i.e. the status and the html)
app.get("/paragraph", (req, res) => {
  res.status(200).send("<h1>Paragraph Page</h1><p>Hey, I'm your server, I'm sending a paragraph as part of the response to your GET request</p>");
});


app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

app.put("/user/put/onuora", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/patch/onuora", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/delete/onuora", (req, res) => {
  //Deleting
  res.status(200).send("<p>Deleting user account</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


/* Copilot's explanation of the errors:

What your code is doing right now You have: app.get("/", (req, res) => { res.sendStatus(200).send("<h1>Home Page</h1>").send("<p>Hey, I'm your server, I'm also sending a paragraph as part of the response to your GET request</p>"); });

res.sendStatus(200) immediately sends a response with status 200 and ends it. It also sends a tiny body like “OK”.
Because the response is already sent and closed, the next .send(...) tries to send more, which isn’t allowed.
Even if sendStatus weren’t there, chaining send(...).send(...) would still be wrong because the first send ends the response too.
Analogy: sealing an envelope

res.status(200) is like writing the address on the envelope (it doesn’t mail it yet).
res.sendStatus(200) is like sealing the envelope and putting it in the mailbox right away (no more changes allowed).
res.send("...") is also sealing and mailing the envelope (with your letter inside).
In your code, you mail the envelope first (sendStatus), then try to add letters (send), which the post office rejects—hence “Cannot set headers after they are sent”.
How to fix it (pick ONE of these patterns)

One status + one body in a single send (recommended)
Replace your entire line with: res.status(200).send("<h1>Home Page</h1><p>Hey, I'm your server, I'm also sending a paragraph as part of the response to your GET request</p>");
Status only (no body)
If you don’t need to send HTML here: res.sendStatus(200);
Less common: stream pieces, then end
Only if you truly want to send in parts: res.status(200); res.write("<h1>Home Page</h1>"); res.write("<p>Hey, I'm your server, I'm also sending a paragraph as part of the response to your GET request</p>"); res.end(); Note: This is valid but not typical for basic Express routes—option 1 is cleaner.
Also fix your DELETE route the same way You currently have: res.sendStatus(200).send("<p>Deleting user account</p>");

That mails the envelope, then tries to add a letter. Change it to ONE of:
res.status(200).send("<p>Deleting user account</p>");
res.sendStatus(204); // No Content, if you don’t want a body
Rule of thumb

One request → exactly one final response. If you set status, chain it to the send that actually delivers the body: res.status(201).send("Created");
Don’t chain sendStatus with send; sendStatus already sends and ends the response.
After you replace that GET line with option 1 above, save the file and hit the route again in Postman—the error will go away.

GPT-5 • 1x

*/