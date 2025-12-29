# HTTP Response status codes

HTTP = Hypertext Transfer Protocol

HTTP is for **client** computers  to **communiticate** with our **server**.

## Client-side:
- everything the end user uses to access our applicaion or website. i.e. laptop, desktop, tablet, mobile

## Server-side
- aka backend
- Consists of everything going on in the background (in the backend)
- i.e.
    - the computer that is running the server code,
    - the application (an application could simply be a single index.js file)
    - a database


In order to commmunicate between the client-side and the server-side:

- HTTP Requests made by the client side
- Can also return **HTTP Responses from the server**

Client-side -> HTTP Req -> Server-side
Client-side <- HTTP Res <- Server-side

Req = client to server
Res = server to client

HTTP Response from server could be simply text or some HTML as we saw in previous lesson. Can also send a Response with a status code


## HTTP Response Status Codes
For more information see the [MDN developer docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)

### 100 - 199 = informational responses

### 200 - 299 = Successful responses
- 200
- 201 created - everything went all okay when the client made a POST or PUT request and when that object was successfully created, instead of returning something back. If there's nothing to return back to the client and everything was posted successfully, the server can simply send a 201 response to confirm everything went okay. Becuase it wasn't a get request and the server didn't need to actually bring something to the client.

### 300 - 399  = Redirection messages
- redirection of the website where the server redirects you to a different location from that you are requesting 
- e.g. if you request googl.com (missing the 'e'), the server will actually redirect you to google.com because Google bought a lot of the similar domains. The server gives a "301 Moved Permanently" response meaning the URL of the requested resource has been changed permanently. The new URL is given in the response.

### 400 - 499 = Client error responses
- When the client has requested or done something that is incorrect
- e.g. 404 Not Found = server cannot find the requested resources = i.e. page doesn't exist = usually when the user on the client-side has mistyped a URL. The 404 response is always a response to a GET request

### 500 - 599 = Server error responses
- When the server-side application or server-side computer has something wrong with it


There are lots of status codes that are really specific to the type of request that the client makes.

Easy way to remember the 5 categories of status codes according to Sander Hoogendoorn:

1. Hold on - something's happening / I'm giving you some information
2. It's all good homey - voila, here's what you requested, I fulfilled your request
3. Go away - redirect
4. You messed up - client-sider error - the user making the request
5. I messed up - server-side error e.g. a missing resource or a bug in the server-side code


1. Info
2. Granted
3. Over There
4. Nope
5. Oops


IGONO