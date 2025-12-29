# HTTP Requests

## GET
Retrieves (gets) information (data) from the specified resources and should only be used to request data (not to modify it)

## POST
Sends data to the server for processing, usually resulting in a change in the server state or side effects on the server

- Usually from an HTML form e.g. a sign up page where you need to give your name, username, email address and password etc.
- That is sent via a POST request, so that data is sent along with that POST request to the server.
- Hopefully the server will do something with that request e.g. putting the data into a database or validating it.
- Once the server has finished its actions, it will send back a 200 response message with some information or perhaps a 201 response where there is no information passed back to the client and just a 201 to say everything was successfully completed

## PUT
Updates a current resource or creates it if it doesn't exist, with the client providing a complete and updated copy of the resource

## PATCH
Updates parts of an exisitng resource, with the client providing only the parts of the resource that need to be updated

## DELETE
Removes the specified resource from the server
