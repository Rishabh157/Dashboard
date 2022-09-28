import React, { useState } from 'react';
import "./Styles/style.css";
// Components 
import DashNavBar from './DashNavBar';
import AddVendorsForm from "./AddVendorsForm";
// import AddPapers from './AddPapers';
// import VendorsTxn from './showDataTable/VendorsTxn';
import AntriesOfPapers from './AntriesOfPapers';
// Icons 
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DatasetIcon from '@mui/icons-material/Dataset';
import AllInboxIcon from '@mui/icons-material/AllInbox';

export default function SidePanel() {
    const [show, setShow] = useState(false);
    return (
        <div className="container-fluid p-0">
            <div className="d-flex">
                <div className="col-lg-2">
                    <div className="d-flex justify-content-center py-3 dash-heading">
                        <p className="text-light fw-bold mb-0"> MHOW NAKA </p>
                    </div>
                    {/* first row of the dashboard */}
                    <div className="dashboard-leftbar">
                        <div className="px-3">
                            <div className="pt-4">
                                <div className="text-light pb-4">
                                    <span className="header-title"> Dashboard </span>
                                </div>

                                <div className="item-option ps-3 pb-3">
                                    <AdminPanelSettingsIcon color='primary' />
                                    <span className="title text-light ps-3">ADMIN</span>
                                </div>

                                <div className="item-option ps-3 pb-3">
                                    <LocationOnIcon color='primary' />
                                    <span className="title text-light ps-3">MHOW NAKA</span>
                                </div>

                                <div className="item-option ps-3 pb-3">
                                    <LocationOnIcon color='primary' />
                                    <span className="title text-light ps-3">L . I . G</span>
                                </div>
                            </div>

                            {/* Second row of the dashboard */}
                            <div className="pt-4">
                                <div className="text-light pb-4">
                                    <span className="header-title"> Add-Section </span>
                                </div>

                                <div className="item-option ps-3 pb-3">
                                    <GroupAddIcon color='primary' />
                                    <span onClick={() => setShow(true)} className="title text-light ps-3">Add-Vendors</span>
                                </div>

                                <div className="item-option ps-3 pb-3">
                                    <DatasetIcon color='primary' />
                                    <span onClick={() => setShow(false)} className="title text-light ps-3">Add-Today-Data</span>
                                </div>

                                <div className="item-option ps-3 pb-3">
                                    <PostAddIcon color='primary' />
                                    <span className="title text-light ps-3">Add-Papers</span>
                                </div>
                            </div>

                            {/* Thrid row of the dashboard */}
                            <div className="pt-4">
                                <div className="text-light pb-4">
                                    <span className="header-title"> Tables-Section </span>
                                </div>

                                <div className="item-option ps-3 pb-3">
                                    <AllInboxIcon color='primary' />
                                    <span onClick={() => setShow(false)} className="title text-light ps-3">All Vendors</span>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-lg-10">
                    {/* DASHBOARD TOP-NAV-BAR SECTION */}
                    <DashNavBar />
                    {/* DASHBOARD TOP-NAV-BAR SECTION */}

                    {/* ADD-VENDORS-FORMS */}
                    {show ? <AddVendorsForm /> : <AntriesOfPapers />}
                    {/* <AddPapers /> */}
                </div>
            </div>
        </div>
    )
}
