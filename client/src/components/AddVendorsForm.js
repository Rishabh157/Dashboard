import React from 'react';
import { Paper, Button, TextField, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
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
                    <div className="d-flex justify-content-between pt-2">
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
                                variant="contained">
                                Back
                            </Button>
                        </div>
                    </div>
                    {/* REAL-FORM  */}
                    <Paper variant="outlined" className="d-flex FormClass bg-light">
                        <div className="col-4">
                            <div className="mb-4">
                                <TextField
                                    id="outlined-basic"
                                    label="FirstName"
                                    helperText="Enter Vendor name"
                                    variant="outlined"
                                />
                            </div>

                            <div className="mb-4">
                                <TextField
                                    id="outlined-basic"
                                    helperText="Enter Vendor surname"
                                    label="LastName"
                                    variant="outlined"
                                />
                            </div>

                            <div className="mb-2">
                                <InputLabel id="demo-simple-select-label">Select Catogary</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value="Cash"
                                    helperText="Select Vendor type"
                                    label="Age"
                                    sx={{
                                        width: "69%"
                                    }}
                                >
                                    <MenuItem value="credit">Credit</MenuItem>
                                    <MenuItem value="cash">Cash</MenuItem>
                                </Select>
                                <FormHelperText>With label + helper text</FormHelperText>
                            </div>
                        </div>

                        <div className="col-4">

                            <div className="mb-4">
                                <TextField
                                    type="number"
                                    id="outlined-basic"
                                    helperText="Enter Mobile Number"
                                    label="Phone"
                                    variant="outlined"
                                />
                            </div>

                            <div className="mb-4">
                                <TextField
                                    id="outlined-basic"
                                    helperText="Enter email address"
                                    label="Email"
                                    variant="outlined"
                                />
                            </div>

                            <div className="mt-2">
                                <TextField
                                    id="outlined-basic"
                                    helperText="Enter email address"
                                    label="Email"
                                    variant="outlined"
                                />
                            </div>
                        </div>

                        <div className="col-4">
                            <div className="mb-4">
                                <TextField
                                    id="outlined-basic"
                                    helperText="Enter pan number"
                                    label="PAN"
                                    variant="outlined"
                                />
                            </div>

                            <div className="mb-3">
                                <TextField
                                    id="outlined-basic"
                                    helperText="Enter aadhar card number"
                                    label="AADHAR"
                                    variant="outlined"
                                />
                            </div>

                            <div className="mb-4">
                                <TextField
                                    multiline
                                    rows={2}
                                    id="outlined-basic"
                                    helperText="Enter Address"
                                    label="Address"
                                    variant="outlined"
                                />
                            </div>
                        </div>

                    </Paper>
                </div >
            </div >

        </div >
    )
}
