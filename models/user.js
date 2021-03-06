const mongoose = require('mongoose');
const{ Schema } = mongoose;
const userSchema = new Schema({
    firstName : {
        type: String,
        required: true,
    },
    lastName : {
        type: String,
        required: true,
    },
    userName: {
        type : String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        

    }
});

module.exports = mongoose.model('User', userSchema)