import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const PostDemo=()=>{
    let [name, setName]=useState(null);
    let [email, setEmail]=useState(null);
    let [mobileno, setMobileno]=useState(null);
    let [city, setCity]=useState(null);
    let [password, setPassword]=useState(null);
    // let [process, setProcess]=useState(null);
    
    const SubmitRegistration=()=>{
        axios.post("http://localhost:6000/insertlog",{name, email, mobileno, city, password})
    .then(res=>console.log(res.data))
      .catch(err=>console.log(err));
    }
    return(<div className="regbg">
        <div className="reg_background ">
        <form >
            
                Name<input type="text" className="form-control col-sem-2" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)}/>
     
           
                No<input type="tel" className="form-control col-sem-2" placeholder="Enter your Mobile No." onChange={(e)=>setMobileno(e.target.value)}/>
               
                email<input type="email" className="form-control col-sem-2" placeholder="Enter your E-mail" onChange={(e)=>setEmail(e.target.value)}/>
               city
                <input type="text" className="form-control col-sem-2" placeholder="Enter your City" onChange={(e)=>setCity(e.target.value)}/>
                <smaill id="cityerr" className="form-text text-muted">City Error..</smaill>
              <button type="submit" className="btn btn-primary" onClick={SubmitRegistration}>
            Registration Data
            </button>

                    </form>

        </div>
    </div>)
}
export default PostDemo;