# Custom Middleware

Previously, we've seen middleware that's used for pre-processing data in HTTP requests by using the baked in express body parsing tools to create the `req.body`

As previously mentioned, uses of middleware are:
- pre-process HTTP requests
- logging HTTP requests
- authentication of HTTP requests
- identifying and handling errors in HTTP requests

## Morgan

Morgan is a middleware for logging HTTP requests in Node.js applications built with Express.js. It logs useful information about incoming requests.

Morgan — Request Logger
Logging is crucial for debugging and monitoring. Morgan provides an easy way to log HTTP requests in Node.js applications.

### Installing Morgan:

```bash
npm install morgan
```

Usage:

```js
const morgan = require("morgan");

app.use(morgan("dev")); // Logs requests in the console

```

### Why Use Morgan?
✅ Helps with debugging
✅ Logs request details
✅ Supports different formats


[Morgan documentation](https://www.npmjs.com/package/morgan)

[FreeCodeCamp's Guide to Morgan middleware](https://www.freecodecamp.org/news/how-does-the-morgan-library-work/)

[Morgan guide](https://expressjs.com/en/resources/middleware/morgan.html)


[Blog on building one's own middleware](https://blog.stackademic.com/i-thought-i-knew-node-js-until-i-tried-building-my-own-middleware-68fcdd21e884)

## Logging middleware exercise

Exercise instructions:
1. Use `npm` to install the `morgan` package
2. Run `index2.js` with nodemon
3. Import the `morgan` module
4. Mount the middleware using the Express `.use()` method
5. Test the logging on localhost and with Postman

### My Morgan Logging Outputs

With:

```js
app.use(morgan("combined"));
```

The output was:

```bash
::1 - - [04/Jan/2026:12:30:43 +0000] "GET / HTTP/1.1" 200 5 "-" "PostmanRuntime/7.41.2"
```

With:

```js
app.use(morgan("tiny"));
```

The output was:

```bash
GET / 200 5 - 2.881 ms
```


NB Just because index2.js only has a GET route handler for the homepage `/`, you can make any type of HTTP request on Postman and the Morgan middleware will still output some meaningful logging information simply because the line `app.use(morgan("format"));` runs before the request reaches any of the route handlers.

Therefore, when trying a `POST` request to the `/submit` on Postman we get the following logging output from Morgan

```bash
GET /submit 404 145 - 1.916 ms
```

Even though we don't even have a handler to deal with POST requests to `/submit`, because the middleware actually happens before the request reaches any of the handlers, we still have a valid middleware action that's happening, telling us that a POST request was submittedvto the /submit route.

It was a 404, because of course it is not handled and it took 1.916 ms.

The output in Postman was:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Error</title>
</head>

<body>
    <pre>Cannot GET /submit</pre>
</body>

</html>
```

## DIY custom Middleware