const express = require("express");
const url = require("url");
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  
  res.send("hello world");
});
app.post('/AddNewBusiness',(req,res)=>{
    console.log("here new business");
    res.send("New Business Added")
})

app.listen(port, () => console.log("U R connecting to Port:5000"));
