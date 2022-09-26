import React from 'react';
import "./Styles/style.css";
import DashOption from './DashOption';
// import AddVendorsForm from "./AddVendorsForm";
import AddPapers from './AddPapers';
import { Avatar, Button } from '@mui/material';
import { deepOrange } from "@mui/material/colors"
import AddIcon from '@mui/icons-material/Add';
import ReplyIcon from '@mui/icons-material/Reply';
// Images 
import DashBoardImg from "./images/dashboard.png";
import vendors from "./images/vendors.png";
import papers from "./images/papers.png";

export default function SidePanel() {
    return (
        <div className="container-fluid p-0">
            <div className="d-flex">
                <div className="col-lg-2">
                    <div className="d-flex justify-content-center py-3 dash-heading">
                        <p className="text-light fw-bold mb-0"> MHOW NAKA </p>
                    </div>
                    <div className="dashboard-leftbar">
                        <DashOption
                            heading="Dashboard"
                            titleData={[
                                { title: "ADMIN", sideImg: DashBoardImg },
                                { title: "MHOW NAKA", sideImg: DashBoardImg },
                                { title: "L.I.G Center", sideImg: DashBoardImg }
                            ]}
                        />
                        <DashOption
                            heading="ADD-SECTION"
                            titleData={[
                                { title: "Add Vendors", sideImg: vendors, path: "/add-vendors" },
                                { title: "Add Papers", sideImg: papers, path: "/add-papers" }
                            ]}
                        />
                    </div>
                </div>
                <div className="col-lg-10">
                    {/* DASHBOARD TOP-NAV-BAR SECTION */}
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
                    {/* ADD-VENDORS-FORMS */}
                    {/* <AddVendorsForm /> */}
                    <AddPapers />
                </div>
            </div>
        </div>
    )
}
