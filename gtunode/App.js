const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4000;

// connection to mongodb
mongoose.connect('mongodb://localhost:27017/gtu')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err))

app.get('/', (req, res) => {
    res.send("Hello world")
});

app.get('/savedata', (req, res) => {
    res.send("save data")
});

app.get('/getdata', (req, res) => {
    res.send("getdata")
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});