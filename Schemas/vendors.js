const mongoose = require("mongoose");

const vendorsSchema = mongoose.Schema({
    name: {
        first: {
            type: String,
            required: true
        },
        middle: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    phone: {
        mob: {
            type: Number,
            required: true
        },
        mobalter: {
            type: Number,
            required: true
        },
    },
    govinfo: {
        pan: {
            type: String,
            required: true
        },
        aadhar: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        }
    },

})

module.exports = mongoose.model("Vendors", vendorsSchema)



// mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true
//     },
//     middleName: {
//         type: String,
//         required: true
//     },
//     lastName: {
//         type: String,
//         required: true
//     },
//     catogary: {
//         type: String,
//         required: true
//     },
//     phone: {
//         type: Number,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     pan: {
//         type: String,
//         required: true
//     },
//     aadhar: {
//         type: String,
//         required: true
//     },
//     address: {
//         type: String,
//         required: true
//     },
//     alterNum: {
//         type: String,
//         required: true
//     },
// })
