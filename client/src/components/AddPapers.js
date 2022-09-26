import React, { useState, useEffect } from 'react';
import "./Styles/style.css";
import { Paper } from "@mui/material";
// import toast, { Toaster } from "react-hot-toast";

export default function AddPapers() {

    const [date, setDate] = useState("");

    useEffect(() => {
        let today = new Date().getMonth();
        setDate(today)
    }, [date])

    return (
        <div className="Add-Papers m-4">
            <div className="mb-1">
                {/* <Toaster /> */}
                <span>Add Todays Papers</span>
            </div>
            <Paper>
                <div className="pt-2">
                    <div className="row">
                        <div className="col-md-4">
                            <h3>Vendor's Details</h3>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex justify-content-center">
                                <input type="text" className="form-control"></input>
                            </div>
                        </div>
                        <div className="col-md-4 text-end pe-4">
                            <span>{date}</span>
                        </div>
                    </div>
                </div>
            </Paper>
        </div >

    )
}
