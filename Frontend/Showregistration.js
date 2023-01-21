import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
export default function Showregistration(){
    let [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/feed/getall")
    .then(res=>setData(res.data))
    .catch(err=>setData(err))
    });
    return(
        <div className="container">
            <table className="table table-bordered ">
                <tr>
                    <td>id</td><td>Name</td><td>Email</td><td>City</td><td>Mobile no.</td><td>Password</td>
                </tr>
                {data.map((result,i)=><tr key={i}>
                    <td>{result._id}</td><td>{result.name}</td><td>{result.email}</td><td>{result.city}</td><td>{result.mobileno}</td><td>{result.password}</td>
                    <td><Link to="/Editregistration" state={result._id} className="text-info"> Edit </Link></td>
                    <td><Link to="/Deleteregistration" state={result._id} className="text-info"> Delete </Link></td>
                </tr>)}
            </table>
        </div>
    )
    
}