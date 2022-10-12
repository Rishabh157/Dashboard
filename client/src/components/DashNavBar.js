import React from 'react';
import { Avatar, Button } from '@mui/material';
import { deepOrange } from "@mui/material/colors";
import AddIcon from '@mui/icons-material/Add';
import ReplyIcon from '@mui/icons-material/Reply';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export default function DashNavBar() {
    const navigate = useNavigate();
    return (
        <div>
            <div onClick={() => {
                const INP = prompt("Log Out This Panle : YES OR NO")
                if (INP === "yes" || INP === "YES") {
                    toast.success("Logged Out")
                    localStorage.clear()
                    setTimeout(() => { navigate("/") }, 2000)
                }
            }}
                className="d-flex justify-content-end pe-4 py-2 shadow-sm">
                <Toaster />
                <span>
                    <Avatar
                        sx={{
                            bgcolor: deepOrange[500]
                        }}
                        alt="Rishbah"
                    >out</Avatar>
                </span>
            </div>
            <div className="px-4 mt-3">
                <div className="d-flex justify-content-between pt-2">
                    <div>
                        <Button
                            startIcon={<AddIcon />}
                            variant="contained"
                            disabled
                            sx={{ marginRight: "20px" }}>
                            Add Papers
                        </Button>
                    </div>
                    <div>
                        <Button
                            startIcon={<ReplyIcon />}
                            variant="contained"
                            disabled>
                            Back
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
