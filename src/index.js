const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("hello");
});

const server = app.listen(8080, () => {
  console.log(`server running on port ${server.address().port}.`);
});
