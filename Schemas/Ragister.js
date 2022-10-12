const mongoose = require("mongoose");

const RSchema = mongoose.Schema({
    name: {
        type: String,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z ]{2,30}$/.test(v)
            },
            message: props => `${props.value} is not valid Name`
        },
        required: [true, "Admin Name is Required"]
    },
    email: {
        type: String,
        validate: {
            validator: function (v) {
                return /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/.test(v)
            },
            message: props => `${props.value} is not valid email`
        },
        required: [true, "Login Email is Required"]
    },
    password: {
        type: String,
        required: [true, "Login Password is Required"]
    },
    location: {
        type: String,
        required: [true, "Login Center is Required"]
    }
})

module.exports = mongoose.model("logins", RSchema);
