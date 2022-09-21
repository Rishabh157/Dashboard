import React from 'react';
import "./Styles/style.css";
import DashOption from './DashOption';
import AddVendorsForm from "./AddVendorsForm";

import { Avatar } from '@mui/material';
import { deepOrange } from "@mui/material/colors"
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
                        <p className="text-light fw-bold mb-0"> MAHU NAKA </p>
                    </div>
                    <div className="dashboard-leftbar">
                        <DashOption
                            heading="Dashboard"
                            titleData={[
                                { title: "Dashboard", sideImg: DashBoardImg }
                            ]}
                        />
                        <DashOption
                            heading="ADD-SECTION"
                            titleData={[
                                { title: "Add Vendors", sideImg: vendors },
                                { title: "Add Papers", sideImg: papers }
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

                    {/* ADD-VENDORS-FORMS */}
                    <AddVendorsForm />
                </div>
            </div>
        </div>
    )
}
