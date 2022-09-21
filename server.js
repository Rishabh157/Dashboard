const express = require("express");
const bodyParser = require("body-parser");
const PORT = 4000;
const app = express();

/****** MONGODB CONNCECTIONS  *****/
const connectDb = require("./DB/connecrion");
const vendors = require("./Schemas/vendors");

connectDb()

/*****  Middlewares  *****/
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send({ msg: "OK", data: ["Addicted of INOVATION TECH MYSTRY"] })
})


app.post("/short-add-vendors", (req, res) => {
    let {
        name: { first, middle, last },
        phone: { mob, mobalter },
        govinfo: { pan, aadhar, address }
    } = req.body

    let AddVendors = new vendors({
        name: { first, middle, last },
        phone: { mob, mobalter },
        govinfo: { pan, aadhar, address }
    })

    AddVendors.save().then((result) => {
        res.send({ msg: "SUCCESFULLY SAVED VENDORS DETAILS", data: result })
    }).catch((err) => {
        res.send({ msg: "SERVER ERROR", err })
    })
})


app.post("/find-vendors", (req, res) => {
    let { _id } = req.body

    vendors.findById(_id)
        .then((result) => {
            res.send({ msg: "FOUNDED", data: result })
        }).catch((err) => {
            res.send({ msg: "NOT FOUNDED", data: err })
        })
})




app.post("/add-vendors", (req, res) => {

    // let { firstName,
    //     middleName,
    //     lastName,
    //     catogary,
    //     phone,
    //     email,
    //     pan,
    //     aadhar,
    //     address,
    //     alterNum } = req.body

    // let AddVendors = new vendors({
    //     firstName,
    //     middleName,
    //     lastName,
    //     catogary,
    //     phone,
    //     email,
    //     pan,
    //     aadhar,
    //     address,
    //     alterNum
    // })


    // AddVendors.save().then((result) => {
    //     res.send({ msg: "SUCCESFULLY SAVED VENDORS DETAILS", data: result })
    // }).catch((err) => {
    //     res.send({ msg: "SERVER ERROR", err })
    // })
})


app.listen(PORT, () => {
    console.log(`SNPN-PANEL RUN ON ${PORT}`.bold)
})
