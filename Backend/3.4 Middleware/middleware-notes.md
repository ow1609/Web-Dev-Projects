# Middleware

Middleware is like a middleman, checkpoint **before** the server processes and responds to http requests.

When a http request from the client is sent to the server, middleware sits before the request gets processed by all of the route handlers (e.g. GET, POST, PUT, PATCH, DELETE). 

## What Middleware can do
- pre-process http requests
    - when we know that a request is going to go to multple handers (e.g. it could be processed by GET, POST or PUT), at the intermediate stage, the middleware can change aspects of the request or perform various functions on the request before it goes to its final routing
- logging the request (gathering data about the request)
    - How long did it take the request to come through?
    - What type of request was it? GET, POST, PUT, PATCH etc
    - What is the status of the request being handled?
- authentication
    - before we allow the request through to our backend handlers, we can see if that request actually came from a client that is authorised to make that request e.g. does the user have permission to make a POST request / update the company logo etc
- identify and handle errors in the request before they go through to the handlers

## Body Parser
 
Body parser middleware is an essential component in Express applications. It processes incoming request bodies, making it easier to handle POST and PUT requests. By parsing the body of an HTTP request and attaching it to the `req.body` property, it simplifies data extraction and manipulation in server-side logic.

Guide to [Understanding Body Parser Middleware in Express](https://medium.com/@AbbasPlusPlus/understanding-body-parser-middleware-in-express-ac1966c36998)

## HTML forms

An example of an html form

```html
  <form action="/submit" method="POST">
    <label for="street">Street Name:</label>
    <input type="text" name="street" required>
    <label for="pet">Pet Name:</label>
    <input type="text" name="pet" required>
    <input type="submit" value="Submit">
  </form>
```
### How do we incorporate the form above into our backend?
 - see [index.html](./public/index.html) and [index1.js](./index1.js) for comments and explanation

 Result of console log statement (`console.log(__dirname + "/public/index.html");`) in [index1.js](./index1.js):
 - ![console log](console-log.png) 
 

 - Screenshots of Postman with response to GET request to homepage:
    - Response
      - ![Screenshot of Postman](./postman-screenshet.png)

    - Raw tab
      - ![Screenshot of Postman raw tab](./postman-screenshot-raw.png)
    
    - Preview tab
      - ![Screenshot of Postman preview tab](./postman-screenshot-preview.png)

Preview tab = a useful feature on Postman
