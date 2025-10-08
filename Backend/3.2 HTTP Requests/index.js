// Repeat to reinforce exercise

import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send(`<h1>Home Page</h1><img src="https://picsum.photos/id/237/300/200" alt="cute dog"></img>`);
});

app.get("/about", (req, res) => {
    res.send("<h1>About</h1>");
});

app.get("/button", (req, res) => {
    res.send("<button>DO NOT Click to return to home</button>");
});


const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})