require("dotenv").config({ path: "./.env" })
const express = require("express");
const PORT = 4000;
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

/****** MONGODB CONNCECTIONS & SCHEMAS  *****/
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


/****** Search Vendors Name ********/

app.post("/get-vendor-today", (req, res) => {

    let { firstName } = req.body

    vendorSchema.find({ firstName })
        .then((result) => {
            res.send({ msg: "Found the Vendor for the entry", vendor: result })
        }).catch((err) => {
            res.send({ msg: "something went wrong try again", error: err })
        });

})

/****** Fetch All The Vendors ********/
app.post("/get-all-vendors-name", (req, res) => {
    vendorSchema.find({})
        .then((result) => {
            res.send({ msg: "Fetch All Vendors", vendors: result })
        }).catch((err) => {
            res.send({ msg: "error", error: err })
        });
})


app.post("/add-items", (req, res) => {
    const { txnid, date, catogary, items } = req.body

    let addItems = new itemsSchema({
        txnid, date, catogary, items
    })

    addItems.save().then((result) => {
        res.send({ msg: "Items Add SuccessFully", data: result })
    }).catch((err) => {
        res.send({ msg: "items are not added", data: err })
    })
})


app.post("/add-papers-forms", async (req, res) => {

    let { _id, newObj } = req.body

    await vendorSchema.findOneAndUpdate({ _id }, {
        $push: {
            items: newObj
        }
    }).then((result) => {
        res.send({ msg: "Items Added SuccessFully in the Array", data: result })
    }).catch((err) => {
        res.send({ msg: "Items are Not Added ", data: err })
    })
})


// app.post("/add-papers-forms", async (req, res) => {

//     let { txnid, newObj } = req.body

//     console.log(txnid)
//     console.log(newObj)

//     await itemsSchema.findOneAndUpdate({ txnid }, {
//         $push: {
//             items: newObj
//         }
//     }).then((result) => {
//         res.send({ msg: "Items Added SuccessFully in the Array", data: result })
//     }).catch((err) => {
//         res.send({ msg: "Items are Not Added ", data: err })
//     })
// })


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
