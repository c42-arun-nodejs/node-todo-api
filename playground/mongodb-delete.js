const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    const db = client.db('TodoApp');

    // db.collection('Users').deleteMany({name: 'Arun'})
    //     .then(results => console.log(JSON.stringify(results, undefined, 2)))
    //     .catch(err => console.log(err));

    db.collection('Users').findOneAndDelete({_id: new ObjectId('5aeeaf02bc097b033cd8bdb0')})
    .then(results => console.log(JSON.stringify(results, undefined, 2)))
    .catch(err => console.log(err));

    //client.close();
});