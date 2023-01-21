import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Showloginfeedback(){
    let [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/login/feedgetall")
    .then(res=>setData(res.data))
    .catch(err=>setData(err))
    })
    return(
        <div className="container">
            <table className="table table-bordered" style={{backgroundColor:"pink"}}>
                <tr>
                    <th>id</th><th>Company Name</th><th>Rating</th><th>Email </th><th>Product Name</th><th>Remark</th>
                </tr>
                {data.map((result,i)=><tr key={i}>
                    <td>{result._id}</td><td>{result.companyName}</td><td>{result.rating}</td><td>{result.email}</td><td>{result.feedBack}</td><td>{result.productName}</td>
                    <td><Link to="/Editloginfeed" state={result._id} className="text-info"> Edit </Link></td>
                    <td><Link to="/Deletelogfeed" state={result._id} className="text-info"> Delete </Link></td>

                </tr>)}
            </table>
        </div>
    )
    
}