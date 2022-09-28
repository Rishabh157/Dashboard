import React, { Component } from 'react';
import "./Styles/style.css";
import { Paper, Button } from "@mui/material";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { getFullTimeLine, getTotal } from "./validations/date";

export default class AntriesOfPapers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            existingVendorsList: [],
            showInfoVendor: [],
            dataForTable: [
                // { paper: "DB", quantity: "23", rate: "4", discount: 25, total: 332 },
            ],
            firstName: "",
            _id: "",
            date: "",
            paper: "",
            quantity: 0,
            rate: 0,
            catogary: "",
            showTable: false,
        }
    }

    submitItems = () => {

        let { _id, paper, quantity, rate, date, dataForTable } = this.state
        let total = getTotal(quantity, rate, "Credit")

        if (quantity > 0) {
            let newObj = { paper, quantity, rate, total, date }
            let [...newDataTable] = dataForTable
            newDataTable.unshift(newObj)

            this.setState({ dataForTable: newDataTable })

            axios.post("http://127.0.0.1:4000/add-papers-forms", { _id, newObj })
                .then((result) => {
                    console.log(result.data)
                }).catch((err) => {
                    console.log(err)
                });
        } else {
            toast.error("Enter a valid rate and quantity")
        }



    }
    render() {
        return (
            <div className="Add-Vendor-Form m-4">
                <div className="mb-1">
                    <Toaster />
                    <span>Add New Entries</span>
                    <Paper elevation={10}>
                        <div className="p-5">

                            <div className="row">
                                <div className="col-md-3">
                                    <p>Hello {this.state.firstName}</p>
                                    {/* <p>Your Location is MOHU NAKA</p> */}
                                </div>
                                <div className="col-md-6 d-flex">
                                    <input onChange={(e) => this.setState({ firstName: e.target.value })}
                                        className="form-control text-center halo me-4"
                                        list="all-countries"
                                        type="text"
                                        placeholder="Name" />
                                    <datalist id="all-countries">
                                        {this.state.existingVendorsList.map((ele, ind) => {
                                            let { firstName, middleName, lastName, catogary } = ele
                                            return (
                                                <option key={ind} value={ele.firstName}>{firstName} {middleName} {lastName} {catogary}</option>
                                            )
                                        })}
                                    </datalist>

                                    <Button
                                        onClick={() => {
                                            let { firstName } = this.state
                                            if (firstName !== "") {
                                                axios.post("http://127.0.0.1:4000/get-vendor-today", { firstName })
                                                    .then(result => {
                                                        let arr = result.data.vendor
                                                        this.setState({ showInfoVendor: arr, _id: arr[0]._id, showTable: true, dataForTable: arr[0].items })
                                                    })
                                                    .catch(err => toast.error(err))
                                            } else {
                                                toast.error("Enter The Vendor Name First")
                                            }
                                        }}
                                        variant="contained">
                                        Add
                                    </Button>

                                </div>
                                <div className="col-md-3">
                                    {this.state.showInfoVendor.map((ele, ind) => {
                                        return (
                                            <div key={ind}>
                                                <span className="badge bg-dark">ID : {ele._id}</span> <br />
                                                <span className="badge bg-dark">Location : {ele.location}</span>
                                                <span className="badge bg-dark">type : {ele.catogary}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {this.state.showTable ? (
                                <div className="mt-5">
                                    <div className="row">
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Items</th>
                                                        <th>quantity</th>
                                                        <th>rate</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <input onChange={(e) => this.setState({ paper: e.target.value })}
                                                                className="form-control text-center halo me-4"
                                                                list="all-papers"
                                                                type="text"
                                                                placeholder="paper" />
                                                            <datalist id="all-papers">
                                                                <option value="DB" />
                                                                <option value="PT" />
                                                                <option value="NB" />
                                                                <option value="HT" />
                                                                <option value="JJ" />
                                                            </datalist>
                                                        </td>

                                                        <td>
                                                            <input onChange={(e) => this.setState({ quantity: e.target.value })}
                                                                className="form-control venSlect" />
                                                        </td>

                                                        <td>
                                                            <input onChange={(e) => this.setState({ rate: e.target.value })}
                                                                className="form-control venSlect" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-center align-items-center">
                                            <Button
                                                onClick={() => { this.submitItems() }}
                                                variant="contained">
                                                Save items
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ) : <p className='text-center mt-5'>ENTER THE VALID VENDOR NAME</p>}
                        </div>
                    </Paper>
                </div>

                <table className="table table-hover mt-5">
                    <thead>
                        <tr>
                            <th scope="col">no.</th>
                            <th scope="col">date</th>
                            <th scope="col">items</th>
                            <th scope="col">quantity</th>
                            <th scope="col">rate</th>
                            <th scope="col">discount</th>
                            <th scope="col">total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.dataForTable.map((ele, ind) => {
                            return (
                                <tr key={ind}>
                                    <th scope="row">{ind + 1}</th>
                                    <th scope="row">{ele.date}</th>
                                    <td>{ele.paper}</td>
                                    <td>{ele.quantity}</td>
                                    <td>{ele.rate}</td>
                                    <td>{ele.discount}</td>
                                    <td>{ele.total}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
    async componentDidMount() {
        let todayDate = getFullTimeLine()
        this.setState({ date: todayDate })
        await axios.post("http://127.0.0.1:4000/get-all-vendors-name")
            .then((result) => {
                this.setState({ existingVendorsList: result.data.vendors })
            }).catch((err) => {
                console.log(err)
            });
    }
}
