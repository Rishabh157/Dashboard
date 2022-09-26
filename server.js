const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 4000;
const app = express();

/****** MONGODB CONNCECTIONS  *****/
const connectDb = require("./DB/connecrion");
const vendorSchema = require("./Schemas/vendors");
const itemsSchema = require("./Schemas/items");

connectDb()

/*****  Middlewares  *****/
app.use(bodyParser.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send({ msg: "OK", data: ["Addicted of INOVATION TECH MYSTRY"] })
})

/****** Add Vendors Api ********/
app.post("/submit-vendors-details", (req, res) => {

    let { firstName, ...data } = req.body
    // console.log(firstName, data)
    let addVendors = new vendorSchema({
        firstName, ...data
    })

    addVendors.save()
        .then((result) => {
            res.send({ serverKey: "success", msg: "Successfully Vendor Add", data: result })
        }).catch((err) => {
            res.send({ serverKey: "error", msg: "Something Went Wrong", data: err.message })
        });
})


/****** Search Vendors Api ********/

app.post("/get-vendor-today", (req, res) => {

    let { firstName } = req.body

    vendorSchema.find({ firstName })
        .then((result) => {
            res.send({ msg: "Successfully Find Vendor in Database", data: result })
        }).catch((err) => {
            res.send({ msg: "error", data: err })
        });

})


app.post("/add-items", (req, res) => {
    const { txnid, date, catogary, items } = req.body
    // console.log(items)

    let addItems = new itemsSchema({
        txnid, date, catogary, items
    })

    addItems.save().then((result) => {
        res.send({ msg: "Items Add SuccessFully", data: result })
    }).catch((err) => {
        res.send({ msg: "items are not added", data: err })
    })
})


app.post("/get-items-details", (req, res) => {
    let { txnid } = req.body

    itemsSchema.find({ txnid }).then((result) => {
        res.send({ msg: "Items Found SuccessFully", data: result })
    }).catch((err) => {
        res.send({ msg: "items are not Finded", data: err })
    })
})






app.listen(PORT, () => {
    console.log(`SNPN-PANEL RUN ON ${PORT}`.bold)
})
