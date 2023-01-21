import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";
 
const Deletelogfeed=()=>{
     let data=useLocation();
     axios.delete(`http://localhost:4000/login/delete/${data.state}`)
     .then(response=>{
        alert("Data Deleted")
        window.location.href='/Showloginfeedback'

     })
     .catch(err=>console.log(err))
    return(<div>
<h1>Deletelogfeed</h1>
    </div>)
}
export default Deletelogfeed;