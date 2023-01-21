import axios from "axios";

import React, { useState, useEffect } from "react";

import { useLocation, Link } from "react-router-dom";

export default function Editregistration(){
        let data = useLocation();

        const [name, setName] = useState(null);

        const [post, setPost] = useState(null);

        const [email, setEmail] = useState(null);

        const [city, setCity] = useState(null);

        const [mobNO, setMobNo] = useState(null);

        useEffect(() => {

            axios.get(`http://localhost:4000/feed/getone/${data.state}`)

            .then((response) => {

              setPost(response.data);

            });

          }, []);

     

    const handleValue = (e) => {

         axios.put(`http://localhost:4000/feed/update/${data.state}`, {

           name, mobNO, email, city

         })

         .then((res)=>{

            window.location.href='/Showregistration'

         })

         .catch(err=>console.log(err));

    }
 
    if (!post) return null;

    return(

        <div  style={{backgroundColor:'#8fd774'}}>
 
        <form style={{ width:'100%', margin:'0% 40% '}}>

          <div className="form-group">

            <label for="_id" >Name</label>

            <input type="text" className="form-control col-sm-2 " placeholder="Enter your name"  onChange={e=>setName(e.target.value)}  />

            <small id="nameErr" className="form-text text-muted">Name Error</small>

          </div>

          <div className="form-group">

                <label for="mobNo">Mobile No</label>

                <input type="tel" className="form-control col-sm-2 " id="mobNo" placeholder="Enter Mobile No." onChange={e=>setMobNo(e.target.value)} />

                <small id="mobNoErr" className="form-text text-muted">Mobile No Error</small>

              </div>          

          <div className="form-group">

            <label for="email">Email</label>

            <input type="email" className="form-control col-sm-2 " id="email" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} />

            <small id="emailErr" className="form-text text-muted">Email Error</small>

          </div>

          <div className="form-group">

            <label for="city">City</label>

            <input type="text" className="form-control col-sm-2 " placeholder="Enter your city" onChange={e=>setCity(e.target.value)}/>

            <small id="citydErr" className="form-text text-muted">city Error</small>

          </div>

          <button type="submit" className="btn btn-primary " onClick={handleValue}><Link to='/Showregistration' className='text-dark'>Update</Link></button>

          <button type="reset" className="btn btn-secondary " style={{marginLeft:'1%'}}>Reset</button>

        </form>

    </div>

    );

}
