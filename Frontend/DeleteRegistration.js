import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";
 
const Deleteregistration=()=>{
     let data=useLocation();
     axios.delete(`http://localhost:4000/feed/delete/${data.state}`)
     .then(response=>{
        alert("Data Deleted")
        window.location.href='/Showregistration'
     })
     .catch(err=>console.log(err))
    return(<div>
<h1>Deleteregistration</h1>
    </div>)
}
export default Deleteregistration;