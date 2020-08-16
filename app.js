const express = require("express");
const url = require("url");
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  
  res.send("hello world");
});

app.listen(port, () => console.log("U R connecting to Port:5000"));
