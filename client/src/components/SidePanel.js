import React, { useEffect, useState } from 'react';
import "./Styles/style.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// Components 
import DashNavBar from './DashNavBar';
import AddVendorsForm from "./AddVendorsForm";
import AntriesOfPapers from './AntriesOfPapers';
import VendorsInfoTable from "./showDataTable/VendorsInfoTable";
// Icons 
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DatasetIcon from '@mui/icons-material/Dataset';
import AllInboxIcon from '@mui/icons-material/AllInbox';

export default function SidePanel() {
    const navigate = useNavigate();
    const [_id, set_id] = useState("");
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [showVendorForm, setShowVendorForm] = useState(true);
    const [showPaperForm, setShowPaperForm] = useState(false);
    const [showAllVendor, setShowAllVendor] = useState(false);

    useEffect(() => {
        const _id = localStorage.getItem("adminId")
        set_id(_id)

        if (_id !== "") {
            axios.post("http://127.0.0.1:5000/admin-locator", { _id })
                .then(res => {
                    const { name, location } = res.data.adminData
                    setName(name)
                    setLocation(location)
                }).catch(err => console.log(err))
        } else {
            navigate("/")
        }
    }, [_id])

    return (
        <div className="container-fluid p-0">
            <div className="d-flex">
                <div className="col-lg-2">
                    <div className="d-flex justify-content-center py-3 dash-heading">
                        <p className="text-light fw-bold mb-0"> {name} </p>
                    </div>
                    {/* first row of the dashboard */}
                    <div className="dashboard-leftbar">
                        <div className="px-3">
                            <div className="pt-4">
                                <div className="text-light pb-4">
                                    <span className="header-title"> Dashboard </span>
                                </div>

                                <div className="item-option ps-3 pb-3">
                                    <LocationOnIcon color='primary' />
                                    <span className="title text-light ps-3">{location}</span>
                                </div>
                            </div>

                            {/* Second row of the dashboard */}
                            <div className="pt-4">
                                <div className="text-light pb-4">
                                    <span className="header-title"> Add-Section </span>
                                </div>

                                <div onClick={() => {
                                    setShowVendorForm(true)
                                    setShowPaperForm(false)
                                    setShowAllVendor(false)
                                }} className="item-option ps-3 pb-3">
                                    <GroupAddIcon color='primary' />
                                    <span
                                        className="title text-light ps-3">
                                        Add-Vendors
                                    </span>
                                </div>

                                <div onClick={() => {
                                    setShowVendorForm(false)
                                    setShowPaperForm(true)
                                    setShowAllVendor(false)
                                }} className="item-option ps-3 pb-3">
                                    <DatasetIcon color='primary' />
                                    <span className="title text-light ps-3">
                                        Add-Today-Data
                                    </span>
                                </div>

                                <div className="item-option ps-3 pb-3">
                                    <PostAddIcon color='primary' />
                                    <span className="title text-light ps-3">
                                        Add-Papers
                                    </span>
                                </div>
                            </div>

                            {/* Thrid row of the dashboard */}
                            <div className="pt-4">
                                <div className="text-light pb-4">
                                    <span className="header-title"> Tables-Section </span>
                                </div>

                                <div onClick={() => {
                                    setShowVendorForm(false)
                                    setShowPaperForm(false)
                                    setShowAllVendor(true)
                                }} className="item-option ps-3 pb-3">
                                    <AllInboxIcon color='primary' />
                                    <span className="title text-light ps-3">All Vendors</span>
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
                    {showVendorForm ? <AddVendorsForm /> : null}
                    {showPaperForm ? <AntriesOfPapers /> : null}
                    {showAllVendor ? <VendorsInfoTable /> : null}
                    {/* <AntriesOfPapers /> */}
                    {/* <VendorsInfoTable /> */}
                </div>
            </div >
        </div >
    )
}
