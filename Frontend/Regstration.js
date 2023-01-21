import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Registration=()=>{
    let [name, setName]=useState(null);
    let [email, setEmail]=useState(null);
    let [mobileno, setMobileno]=useState(null);
    let [city, setCity]=useState(null);
    let [password, setPassword]=useState(null);
    // let [process, setProcess]=useState(null);
    
    const SubmitRegistration=()=>{
        axios.post("http://localhost:4000/feed/postdata2",{name, email, mobileno, city, password})
    .then(res=>console.log(res.data))
      .catch(err=>console.log(err));
    }
    return(<div className="regbg">
        <div className="reg_background ">
        <form >
            <h1>Registration Form</h1>
            <div className="form-group">
                <label for="name">Name</label>
                <input type="text" className="form-control col-sem-2" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)}/>
                <smaill id="nameerr" className="form-text text-muted">Name Error..</smaill>
            </div>
            <div className="form-group">
                <label for="mobileno">Mobile No.</label>
                <input type="tel" className="form-control col-sem-2" placeholder="Enter your Mobile No." onChange={(e)=>setMobileno(e.target.value)}/>
                <smaill id="mobilenoerr" className="form-text text-muted">Mobile Error..</smaill>
            </div>
            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" className="form-control col-sem-2" placeholder="Enter your E-mail" onChange={(e)=>setEmail(e.target.value)}/>
                <smaill id="emailerr" className="form-text text-muted">Email Error..</smaill>
            </div>
            <div className="form-group">
                <label for="city">City</label>
                <input type="text" className="form-control col-sem-2" placeholder="Enter your City" onChange={(e)=>setCity(e.target.value)}/>
                <smaill id="cityerr" className="form-text text-muted">City Error..</smaill>
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control col-sem-2" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
                <smaill id="passworderr" className="form-text text-muted">password Error..</smaill>
            </div>
            
            <button type="submit" className="btn btn-primary" onClick={SubmitRegistration}>
            <Link to='/Showregistration' className="text-dark">Registration Data</Link>
            </button><br/>
            <Link to='/Feedback' className="text-dark">Feedback</Link>

                    </form>

        </div>
    </div>)
}
export default Registration;