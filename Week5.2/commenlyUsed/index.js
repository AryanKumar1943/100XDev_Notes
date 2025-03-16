const express = require('express');
// const bodyParser=require("body-parser");
const app = express();

// Use express.json() middleware to parse JSON bodies
//in Express if you want to send JSON data,
//you need to first parse the json data
// Define a POST route to handle JSON data
app.use(express.json());
//express.json() is a function which returns another function which is used
app.post('/sum', (req, res) => {
  // Access the parsed JSON data from req.body
  const a=parseInt(req.body.a);
  const b=parseInt(req.body.a);
  res.json({
    ans:a+b
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});