import express from "express";
// import the morgan module
import morgan from "morgan";

const app = express();
const port = 3000;
// mount the middleware using the Express .use() method
// inside the parenthesis, specify the format of the logging output e.g. "tiny" or "combined"
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
