import React from 'react';
import { Paper, Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ReplyIcon from '@mui/icons-material/Reply';

export default function AddVendorsForm() {
    return (
        <div className="Add-Vendor-Form">

            <div className="m-3">
                <div className="mb-2">
                    <span>Add New Vendors</span>
                </div>

                <div className="px-4">
                    <div className="d-flex justify-content-between px-4 pt-2">
                        <div>
                            <Button
                                startIcon={<AddIcon />}
                                variant="contained"
                                sx={{ marginRight: "20px" }}>
                                Add Papers
                            </Button>
                        </div>
                        <div>
                            <Button
                                startIcon={<ReplyIcon />}
                                variant="contained"
                                sx={{ marginRight: "20px" }}>
                                Back
                            </Button>
                        </div>
                    </div>
                    {/* REAL-FORM  */}
                    <Paper variant="outlined" className="FormClass">

                        <TextField
                            id="outlined-basic"
                            label="FirstName"
                            helperText="Please enter your name"
                            variant="outlined"
                        />

                        <TextField
                            id="outlined-basic"
                            helperText="Please enter your surname"
                            label="LastName"
                            variant="outlined"
                        />


                    </Paper>
                </div >
            </div >

        </div >
    )
}
