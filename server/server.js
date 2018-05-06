const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

// can then update one of more fields
// const newTodo = new Todo({
//     text: 'Walk the dog',
// });

const newTodo = new Todo({
    text: 'Walk the dog',
    completed: true,
    completedAt: 20180507
});

newTodo.save()
    .then(res => {
        console.log('Todo saved:', res);
    })
    .catch(e => console.log(e));