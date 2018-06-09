var express = require('express');
var bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

// bodyParser.json() returns a middleware function that converts incoming JSON request to a JS object 
// and populates a req.body property available to the next middleware in the stack
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    // extract JS object from req and create a Todo
    var todo = new Todo ({
        text: req.body.text
    });

    // save the doc to MongoDB
    todo.save().then(doc => {
        res.send(doc);
    }, e => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});
