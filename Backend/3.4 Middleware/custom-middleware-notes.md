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

[FreeCodeCamp's Guide to Morgan middleware](https://www.freecodecamp.org/news/how-does-the-morgan-library-work/)

[Morgan documentation](https://expressjs.com/en/resources/middleware/morgan.html)


[Blog on building one's own middleware](https://blog.stackademic.com/i-thought-i-knew-node-js-until-i-tried-building-my-own-middleware-68fcdd21e884)