const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 4000;
const app = express();

/****** MONGODB CONNCECTIONS  *****/
const connectDb = require("./DB/connecrion");
const vendorSchema = require("./Schemas/vendors");

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
    let newVendors = new vendorSchema({
        firstName, ...data
    })

    newVendors.save()
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


app.listen(PORT, () => {
    console.log(`SNPN-PANEL RUN ON ${PORT}`.bold)
})
