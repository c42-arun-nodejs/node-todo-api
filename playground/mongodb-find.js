const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }

    console.log('Connected to MongoDb server');

    const db = client.db('TodoApp');

    // db.collection('Users').find().toArray().then(docs => {
    // db.collection('Users').find({name: 'Rishi'}).toArray().then(docs => {
    db.collection('Users').find({_id: new ObjectID('5aed65959f68a0df496c16bc')}).toArray().then(docs => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, err => console.log(err));
});