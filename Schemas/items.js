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
    catogary: {
        type: String,
        required: [true, "vendor catogary type is required"]
    },
    items: [Object]
})

module.exports = mongoose.model("ItemsVendor", items);
