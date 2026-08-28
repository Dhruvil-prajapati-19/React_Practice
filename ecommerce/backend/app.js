const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
  .then(() => {console.log('Connected to MongoDB')})
  .catch((err) => {console.error('Error connecting to MongoDB:', err)});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});