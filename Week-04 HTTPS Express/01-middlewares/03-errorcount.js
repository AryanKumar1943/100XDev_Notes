const express = require('express');

const app = express();
let errorCount = 0;

app.get('/user', function (req, res, next) {
  try {
    let a; // Undefined variable
    a.length; // This will throw an error
  } catch (err) {
    errorCount++; // Increment error count when an error occurs
    return next(err); // Pass the error to middleware
  }
  res.status(200).json({ name: 'john' });
});

app.post('/user', function (req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function (req, res) {
  res.status(200).json({ errorCount });
});

// Error handling middleware
app.use(function (err, req, res, next) {
  errorCount++; // Increment error count when an error occurs
  res.status(404).send({}); // Send 404 status code
});

// app.listen(3000);
module.exports = app;
