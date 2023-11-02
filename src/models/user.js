const moongose = require('mongoose');

const userSchema = new moongose.Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
})

module.exports = moongose.model('User', userSchema);