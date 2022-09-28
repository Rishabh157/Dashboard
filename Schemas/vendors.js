const mongoose = require("mongoose");

const vendorsSchema = mongoose.Schema({
    firstName: {
        type: String,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z ]{2,30}$/.test(v)
            },
            message: props => `${props.value} is not valid Name`
        },
        required: [true, "Vendor Name is Required"]
    },
    middleName: {
        type: String,
        required: [true, "Vendor Middle Name is Required"]
    },
    lastName: {
        type: String,
        required: [true, "Vendor Last Name is Required"]
    },
    catogary: {
        type: String,
        required: [true, "Vendor Catogary is Required"]
    },
    location: {
        type: String,
        required: [true, "Vendor Location is Required"]
    },
    infoVendor: {
        mobile: {
            type: String,
            validate: {
                validator: function (v) {
                    return /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/.test(v)
                },
                message: props => `${props.value} is not valid number`
            },
            required: [true, "Vendor Phone Number is Required"],
        },
        phone: {
            type: String,
            validate: {
                validator: function (v) {
                    return /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/.test(v)
                },
                message: props => `${props.value} is not valid number`
            },
            required: [true, "Vendor Phone Number is Required"]
        },
        email: {
            type: String,
            validate: {
                validator: function (v) {
                    return /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/.test(v)
                },
                message: props => `${props.value} is not valid email`
            },
            required: [true, "Vendor Email is Required"]
        },
        aadhar: {
            type: String,
            validate: {
                validator: function (v) {
                    return /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/.test(v)
                },
                message: props => `${props.value} is not valid aadhar number`
            },
            required: [true, "Vendor Aadhar Number is Required"]
        },
        panCard: {
            type: String,
            validate: {
                validator: function (v) {
                    return /([A-Z]){5}([0-9]){4}([A-Z]){1}$/.test(v)
                },
                message: props => `${props.value} is not valid pan card number`
            },
            required: [true, "Vendor Pan Card Number is Required"]
        },
        address: {
            type: String,
            required: [true, "Vendor Address is Required"]
        },
    },
    items: [Object]
})

module.exports = mongoose.model("Vendors", vendorsSchema)
