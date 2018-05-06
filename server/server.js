const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// can then update zero or more fields (if no validation exists)
// const newTodo = new Todo({
// });

const newTodo = new Todo({
    text: '  Eat lunch ',
});

newTodo.save()
    .then(res => {
        console.log('Todo saved:', res);
    })
    .catch(e => console.log(e));

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

const newUser = new User({
    email: 'trtr'
});

newUser.save()
    .then(res => {
        console.log('User saved:', res);
    })
    .catch(e => console.log(e));