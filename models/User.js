const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchema = new Schema({
    username:{
        type: String,
        unique: true,
        required: "Username is required",
        trim: true
    },
    password:{
        type: String,
        unique: true,
        required: "Password is required",
        trim: true,
        validate: [
            input => {
                return input.length > 6; //returns boolean
              },
              //if boolean is false sends message below
              "Password must be 7 or more characters"
        ]
    }
});

const Test = mongoose.model("Test", TestSchema);
module.exports = Test;