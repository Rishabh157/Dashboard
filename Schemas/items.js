const mongoose = require("mongoose");

const items = mongoose.Schema({
    txnid: {
        type: String,
        required: [true, "txnid is required"]
    },
    date: {
        type: String,
        required: [true, "today date is required"]
    },
    catogary: String,
    items: [
        {}
    ]
})

module.exports = mongoose.model("ItemsVendor", items);
