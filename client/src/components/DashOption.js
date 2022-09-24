import React from 'react';
import "./Styles/style.css";
import { Link } from "react-router-dom";

export default function DashOption(props) {
    return (
        <div className="px-3">
            <div className="pt-4">
                <div className="text-light pb-4">
                    <span className="header-title"> {props.heading} </span>
                </div>
                {props.titleData.map((ele, ind) => {
                    return (
                        <div className="item-option ps-3 pb-4" key={ind}>
                        
                            <img className={{
                                fill: "red"
                            }} src={ele.sideImg} alt="dashboard" height="24px" />
                            <Link to={ele.path}><span className="title text-light ps-3">{ele.title}</span></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
