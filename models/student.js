const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName: {
        type:String,
        required: [true, 'First name is required']
    },
    lastName : {
        type:String,
        required: [true, 'Last name is required']
    }
});

module.exports = { Student : mongoose.model('students',studentSchema) };
