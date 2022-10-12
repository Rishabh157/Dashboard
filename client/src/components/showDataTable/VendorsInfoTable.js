import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function VendorsInfoTable() {

  const [existingVendor, setExistingVendor] = useState([]);

  useEffect(() => {
    const location = localStorage.getItem("location")
    axios.post("http://127.0.0.1:5000/get-all-vendors-name")
      .then(async (result) => {
        const sorteByLocation = await result.data.vendors.filter(arr => {
          return arr.location == location
        })
        setExistingVendor(sorteByLocation)
        console.log("from axios request", sorteByLocation)
      }).catch((err) => {
        console.log(err)
      });
  }, [])

  return (
    <table className="table table-hover table-all-vendor">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">FirstName</th>
          <th scope="col">MiddleName</th>
          <th scope="col">LastName</th>
          <th scope="col">Catogary</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Aadhar</th>
          <th scope="col">Pan Card</th>
          <th scope="col">Address</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody className='tbody'>
        {existingVendor.map((ele, ind) => {
          return (
            <tr key={ind} className="pb-3">
              <th scope="row">{ind + 1}</th>
              <td>{ele.firstName}</td>
              <td>{ele.middleName}</td>
              <td>{ele.lastName}</td>
              <td>{ele.catogary}</td>
              <td>{ele.infoVendor.phone}</td>
              <td>{ele.infoVendor.email}</td>
              <td>{ele.infoVendor.aadhar}</td>
              <td>{ele.infoVendor.panCard}</td>
              <td>{ele.infoVendor.address}</td>
              <td>{ele.location}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}
