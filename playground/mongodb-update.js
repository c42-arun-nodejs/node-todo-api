const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }

    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId('5aeeb3088a18ed6a161f29e0')
    }, {
        $set : {
            name: 'Rishi R Menon'
        },
        $inc : {
            age: -1
        }
    }, {
        returnOriginal: false
    })
    .then(results => console.log(results))
    .catch(err => console.log(err));
});