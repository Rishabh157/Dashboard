import React, { useState, useEffect } from 'react';
import "./components/Styles/style.css";
import { TextField, Button } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("rishabhgour157gmail.com");
    const [password, setPassword] = useState("rishabh13");

    useEffect(() => {
        const adminId = localStorage.getItem("adminId")
        if (adminId !== null) {
            navigate("/dashboard-panel", { replace: true })
        } else if (adminId === null) {
            navigate("/")
        }
    }, [navigate])

    const submitLogin = () => {
        axios.post("http://127.0.0.1:5000/snpn-login", { email, password })
            .then(async (result) => {
                let { status, msg, adminData } = result.data;
                if (status) {
                    toast.success(msg);
                    const { _id, location } = adminData
                    await localStorage.setItem("adminId", _id)
                    await localStorage.setItem("location", location)
                    setTimeout(() => navigate("/dashboard-panel", { replace: true }), 2000)
                } else {
                    toast.error(msg)
                }
            }).catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className="login-container d-flex justify-content-center align-items-center">
            <Toaster />
            <div className="col-4 p-4">
                <div className="loginForm bg-light">
                    <div className="login-text">
                        <p className="text-center py-2"> Login </p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="col-10 mt-4">
                            <div className="">
                                <TextField
                                    fullWidth
                                    id="email-basic"
                                    label="Email"
                                    variant="standard"
                                    className="font-field text-center"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="pt-4">
                                <TextField
                                    fullWidth
                                    id="password-basic"
                                    label="Password"
                                    variant="standard"
                                    className="font-field text-center"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="pt-4">
                                <Button
                                    sx={{ width: "50%", height: "50px", fontSize: "1.1rem", marginLeft: "20px", marginTop: "6px", fontVariant: "small-caps" }}
                                    variant="contained"
                                    color="success"
                                    onClick={submitLogin}
                                >
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
