require("dotenv").config({ path: "./.env" })
const express = require("express");
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();
const path = require("path");

/****** MONGODB CONNCECTIONS & SCHEMAS  *****/
const connectDb = require("./DB/connecrion");
const loginSchema = require("./Schemas/Ragister");
const vendorSchema = require("./Schemas/vendors");
const itemsSchema = require("./Schemas/items");

// Conncection Stablish or Not 
connectDb()

/*****  Middlewares  *****/
app.use(bodyParser.json())
app.use(cors())


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send("APP IS RUNNING")
    })
}

/****** LOGIN API ********/
app.post("/snpn-login", (req, res) => {

    const { email, password } = req.body

    // bcrypt.hash(password, 10).then(async (bypass) => {

    //     const ragister = await new loginSchema({ name, email, password: bypass, location })
    //     await ragister.save()
    //         .then(result => res.send({ msg: "Ragistered", ragisterData: result }))
    //         .catch(err => res.send({ msg: "something went wrong", data: err }))

    // }).catch(byerr => res.send({ msg: "Hash Password Wrong", bypass: byerr }))

    loginSchema.find({ email })
        .then(result => {
            bcrypt.compare(password, result[0].password).then(comPass => {
                if (comPass) {
                    res.send({ status: comPass, msg: "Successfully Logged In", adminData: result[0] })
                } else {
                    res.send({ status: comPass, msg: "Invalid Password" })
                }
            }).catch(comErr => {
                res.send({ status: "Network Problem", adminData: comErr })
            })
        })
        .catch(err => res.send({ msg: "email is not founded" }))
})

/****** Add Vendors Api ********/
app.post("/admin-locator", (req, res) => {
    const _id = req.body
    loginSchema.findById(_id)
        .then(result => res.send({ status: true, msg: "FOUNDED", adminData: result }))
        .catch(err => res.send({ status: false, adminData: err }))
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

app.post("/get-items-details", (req, res) => {

    let { txnid } = req.body

    itemsSchema.find({ txnid }).then((result) => {
        res.send({ msg: "Items Found SuccessFully", data: result })
    }).catch((err) => {
        res.send({ msg: "items are not Finded", data: err })
    })
})

// listening Port for the Application
app.listen(PORT, () => {
    console.log(`SNPN-PANEL RUN ON ${PORT}`.bold)
})
