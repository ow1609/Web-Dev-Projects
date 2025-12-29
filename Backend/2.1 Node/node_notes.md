# Node

## What is Node?

Node is an **asynchronous event-driven JavaScript runtime environment** designed to build scalable network applications. 

- **JavaScript runtime envirnonment**: JS wwas first created and designed only to run in the browser. It **was** impossible to use JS to write any kind of program that's not a website. 

- **V8 Engine**: Node uses the V8 engine which comes with Chromium. The V8 engine is written in C and C++, is blazingly fast and powers the Chrome browser.

Node unlocked the potential to use JS outside of just the browser giving us the freedom to use JS to write any sort of application, desktop or server side

Given that Node  provides us with a JS runtime environment, we can run JS on a machine, such as one's local machine (not just in the browser). Therefore, we can use JS to do almost anything that other populer server side lanugages

## Node REPL

REPL = Read Eval Print Loop
A repl is a computer environment where user inputs are read and evaluated, and then the results are returned to the user.

To initiate the Node REPL, all we have to do in the terminal is type `node`.

```bash
node
```

You should then see a message like below saying "Welcome to Node" and then a right-facing chevron arrow will indicate that you are now in the Node REPL. 

![Welcome to Node REPL](./node-repl-welcome.png
)

In the Node REPL you can type various commands, for example:

```bash
.help
```

`.help` will give you other useful commands, including the most important one because one of the hardest things with REPLs is knowing how to exit them!

## Exiting the Node REPL
Can you `.exit`  or `Ctrl+C`.

## Using the Node REPL
Using the Node REPL, we can run JS code directly in the terminal. 

Can declare and initialise variables.

![Example read eval print loop](./node-repl-example.png
)
