import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login=()=>{
     const [username, setUsername]=useState("");
     const [password, setPassword]=useState("");
        const Manage=(e)=>{
             e.preventDefault();
            switch (e.target.id){
                case "username":
                    setUsername(e.target.value)
                    break;
                case "password":
                    setPassword(e.target.value)
                    break;
                default: break;
            }

        }
        const Submit=()=>{
            axios.post("http://localhost:4000/logingdata",{
                username: username,
                password: password
            }).then(resp=>{console.log(resp.data);
            if(resp.data.message=="1"){
                window.location='/Loginfeedback'
            }
            else{
                window.location="/Login"
            }
            })
        }
    return(<div>
        <div className="logingbackground ">
        <form className="tabledeco" onSubmit={Submit}>
            <table>
               <center> <tr><b>Login</b></tr></center>
                <tr >
                    <td>
                    <label for="Name"> User_Name</label>
                    <br/>
                    <input type="text" className="tabledeco" placeholder="Enter User Name" id='username' onChange={Manage}/>
                    </td>              
                </tr>
                <tr >
                    <td>
                    <label for="password"> Password</label>
                    <br/>
                    <input type="password" className="tabledeco" placeholder="Enter Password" id='password' onChange={Manage}/>
                    </td>    
                             
                </tr>
                <tr>
                    <td>
                        <Link style={{color:"blue"}} to="/Loginfeedback">Feedback</Link>
                    </td>
                    </tr>
                <tr><td><button type="submit" className="btn btn-primary" onClick={Login}>Submit</button>
</td></tr>

            </table>
        </form>
        </div>
    </div>)
}
export default Login;