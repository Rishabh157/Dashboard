import React from 'react';
import { Avatar, Button } from '@mui/material';
import { deepOrange } from "@mui/material/colors";
import AddIcon from '@mui/icons-material/Add';
import ReplyIcon from '@mui/icons-material/Reply';

export default function DashNavBar() {
    return (
        <div>
            <div className="d-flex justify-content-end pe-4 py-2 shadow-sm">
                <Avatar
                    sx={{
                        bgcolor: deepOrange[500]
                    }}
                    alt="Rishbah"
                    src="/broken-image.jpg"
                >R</Avatar>
            </div>
            <div className="px-4 mt-3">
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
            </div>
        </div>
    )
}
