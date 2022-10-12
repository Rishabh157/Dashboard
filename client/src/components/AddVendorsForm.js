import React, { useState } from 'react';
import {
    Paper, TextField, FormControl, InputLabel,
    Select, MenuItem, Button, InputAdornment
} from '@mui/material';
import axios from "axios";

// Toaster
import toast, { Toaster } from 'react-hot-toast';

// Forms starting icons 
import PersonIcon from '@mui/icons-material/Person';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import BadgeIcon from '@mui/icons-material/Badge';
import HomeIcon from '@mui/icons-material/Home';
// From Regular expresson validation code
import {
    isValidName, isValidMobile, isValidEmail,
    isValidAadharCardNumber, isValidPanCardNumber
} from "./validations/validation";


export default function AddVendorsForm() {

    // for all form bind color 
    const [valid, setValid] = useState("primary");

    const [firstName, setFirstName] = useState("Rishabh");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobile, setMobile] = useState("");
    const [phone, setPhone] = useState("");
    const [catogary, setCatogary] = useState("");
    const [location, setLocationn] = useState("");
    const [email, setEmail] = useState("");
    const [aadhar, setAadhar] = useState("");
    const [panCard, setPanCard] = useState("");
    const [address, setAddress] = useState("");

    const handleCatogary = (e) => {
        setCatogary(e.target.value)
    }

    const handleLocation = (e) => {
        setLocationn(e.target.value)
    }

    const submitVendorsForm = () => {

        axios.post("http://127.0.0.1:5000/submit-vendors-details", {
            firstName, middleName, lastName, catogary, location,
            infoVendor: {
                email, aadhar, panCard, address, mobile, phone,
            }
        }).then((res) => {
            if (res.data.serverKey === "success") {
                console.log(res.data)
                toast.success(res.data.msg)
            } else if (res.data.serverKey === "error") {
                console.log(res.data)
                toast.error(res.data.data)
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="Add-Vendor-Form m-4">
            <div className="mb-1">
                <Toaster />
                <span>Add New Vendors</span>
            </div>
            <Paper elevation={10}>
                <div className="p-5">
                    <div className="row">
                        <div className="col-md-4">
                            <TextField
                                id="firstName"
                                label="FirstName"
                                helperText="Enter Vendor first name *"
                                color={valid}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon color={valid} />
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={(e) => {
                                    if (isValidName(e.target.value)) {
                                        setFirstName(e.target.value)
                                        setValid("success")
                                    } else {
                                        setFirstName("")
                                        setValid("error")
                                    }
                                }}
                            />
                        </div>
                        <div className="col-md-4">
                            <TextField
                                id="middlename"
                                label="MiddleName"
                                helperText="Enter Vendor middle name *"
                                color={valid}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon color={valid} />
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={(e) => {
                                    if (isValidName(e.target.value)) {
                                        setMiddleName(e.target.value)
                                        setValid("success")
                                    } else {
                                        setValid("error")
                                    }
                                }}
                            />
                        </div>
                        <div className="col-md-4">
                            <TextField
                                id="lastname"
                                label="LastName"
                                helperText="Enter Vendor last name *"
                                color={valid}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon color={valid} />
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={(e) => {
                                    if (isValidName(e.target.value)) {
                                        setLastName(e.target.value)
                                        setValid("success")
                                    } else {
                                        setValid("error")
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-4">
                            <TextField
                                id="mobile"
                                label="Mobile"
                                helperText="Enter Vendor mobile number *"
                                color={valid}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <StayCurrentPortraitIcon color={valid} />
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={(e) => {
                                    if (isValidMobile(e.target.value)) {
                                        setMobile(e.target.value)
                                        setValid("success")
                                    } else {
                                        setMobile("")
                                        setValid("error")
                                    }
                                }}
                            />
                        </div>
                        <div className="col-md-4">
                            <TextField
                                id="phone"
                                label="Phone"
                                helperText="Enter Vendor phone number *"
                                color={valid}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocalPhoneIcon color={valid} />
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={(e) => {
                                    if (isValidMobile(e.target.value)) {
                                        setPhone(e.target.value)
                                        setValid("success")
                                    } else {
                                        setPhone("")
                                        setValid("error")
                                    }
                                }}
                            />                        </div>
                        <div className="col-md-4">
                            <FormControl sx={{ width: "37%", marginRight: "20px" }} >
                                <InputLabel id="catgoray">Catogary</InputLabel>
                                <Select
                                    onChange={handleCatogary}
                                    labelId="Catogary"
                                    id="catgoray"
                                    value={catogary}
                                >
                                    <MenuItem value="cash">Cash</MenuItem>
                                    <MenuItem value="credit">Credit</MenuItem>
                                </Select>
                                {/* use for location  */}
                            </FormControl>

                            <FormControl sx={{ width: "37%" }}>
                                <InputLabel id="location">Location</InputLabel>
                                <Select
                                    onChange={handleLocation}
                                    labelId="Location"
                                    id="location"
                                    value={location}
                                >
                                    <MenuItem value="MHOW NAKA">MHOW NAKA</MenuItem>
                                    <MenuItem value="L.I.G Center">L.I.G Center</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-4">
                            <TextField
                                id="email"
                                label="Email"
                                helperText="Enter Vendor email address *"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <EmailIcon color={valid} />
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={(e) => {
                                    if (isValidEmail(e.target.value)) {
                                        setEmail(e.target.value)
                                        setValid("success")
                                    } else {
                                        setEmail("")
                                        setValid("error")
                                    }
                                }}
                            />
                        </div>
                        <div className="col-md-4">
                            <TextField
                                id="aadhar"
                                label="Aadhar"
                                placeholder="1111 2222 3333"
                                helperText="Enter Vendor aadhar card number *"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <RecentActorsIcon color={valid} />
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={(e) => {
                                    if (isValidAadharCardNumber(e.target.value)) {
                                        setAadhar(e.target.value)
                                        setValid("success")
                                    } else {
                                        setAadhar("")
                                        setValid("error")
                                    }
                                }}
                            />
                        </div>
                        <div className="col-md-4">
                            <TextField
                                id="pancard"
                                label="Pan Card Number"
                                placeholder="BNZPM2501F"
                                helperText="Enter Vendor pan card number *"
                                sx={{ textTransform: "uppercase" }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <BadgeIcon color={valid} />
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={(e) => {
                                    if (isValidPanCardNumber(e.target.value)) {
                                        setPanCard(e.target.value.toUpperCase())
                                        setValid("success")
                                    } else {
                                        setPanCard("")
                                        setValid("error")
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-8">
                            <TextField
                                sx={{ width: "91.3%" }}
                                multiline
                                rows={1}
                                id="address"
                                label="Parmanent Address"
                                helperText="Enter Vendor residance address *"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <HomeIcon color={valid} />
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={(e) => { setAddress(e.target.value) }}
                            />
                        </div>
                        <div className="col-md-4">
                            <Button
                                sx={{ width: "83%", height: "68%", fontSize: "1.1rem" }}
                                variant="contained"
                                color="success"
                                onClick={submitVendorsForm}
                            >
                                Save
                            </Button>
                        </div>
                    </div>

                </div>
            </Paper>
        </div>
    )
}
