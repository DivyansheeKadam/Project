import axios from "axios";

import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

export default function Editloginfeed(){
        let data = useLocation();

        const [companyName, setCompanyName] = useState(null);

        const [rating, setRating] = useState(null);

        const [email, setEmail] = useState(null);

        const [productName, setProductName] = useState(null);

        const [feedBack, setFeedBack] = useState(null);
        const [post, setPost] = useState(null);

        useEffect(() => {

            axios.get(`http://localhost:4000/login/feedgetone/${data.state}`)

            .then((response) => {

              setPost(response.data);

            });

          }, []);

     

    const handleValue = (e) => {

         axios.put(`http://localhost:4000/login/feedupdate/${data.state}`, {

            companyName, rating, email,productName, feedBack

         })

         .then((res)=>{
            window.location.href='/Showloginfeedback'


         })

         .catch(err=>console.log(err));

    }
 
    if (!post) return null;

    return(

        <div  style={{backgroundColor:'#8fd774'}}>
 
        <form style={{ width:'100%', margin:'0% 40% '}}>

          <div className="form-group">

            <label for="companyName" >Company Name</label>

            <input type="text" className="form-control  col-sm-3  " id="companyName" placeholder="Enter company name" onChange={e=>setCompanyName(e.target.value)} />

            <small id="nameErr" className="form-text text-muted">Name Error</small>

          </div>
          <div className="form-group">

<label for="rating">Rating</label>

<select className="form-control col-sm-1" onChange={e=>setRating(e.target.value)}>

    <option value='1'>1</option>

    <option value='2'>2</option>

    <option value='3'>3</option>

    <option value='4'>4</option>

    <option value='5' selected>5</option>

</select>

</div>          

<div className="form-group">

<label for="feedBack">Remark</label>

<textarea className="form-control col-sm-3 " id="feedBack" placeholder="Enter your feedback" onChange={e=>setFeedBack(e.target.value)}/>

<small id="feedBackNoErr" className="form-text text-muted">feedBack Error</small>

</div>

<div className="form-group">

<label for="productName">Product Name</label>

<input type="text" className="form-control col-sm-3 " id="productName" placeholder="Enter product name" onChange={e=>setProductName(e.target.value)}/>

<small id="productNameErr" className="form-text text-muted">product name Error</small>

</div>

<div className="form-group">

<label for="email">Email</label>

<input type="email" className="form-control col-sm-3 " id="email" placeholder="Enter your Email" onChange={e=>setEmail(e.target.value)}/>

<small id="emailErr" className="form-text text-muted">Email Error</small>

</div>


<button type="submit" className="btn btn-primary col-sm-1" onClick={handleValue} >Submit</button>

        </form>

    </div>

    );

}
