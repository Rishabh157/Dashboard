import React, { Component } from 'react';
// import { Paper } from "@mui/material";
// import axios from 'axios';

export default class VendorsTxn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            txn: [],
            txnid: "",
        }
    }
    render() {
        return (
            <div className="p-5">

                <h1> HELLO WORLD FROM VENDORS ALL DATA </h1>
            </div>
        )
    }

    // async componentDidMount() {
    // let { txnid } = this.state

    // axios.post("http://127.0.0.1:4000/get-all-add-items", { txnid })
    //     .then((result) => {
    //         this.setState({ txn: result.data.data })
    //     }).catch((err) => {
    //         console.log(err)
    //     });
    // }
}
