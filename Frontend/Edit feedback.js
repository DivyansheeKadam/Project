import axios from "axios";

import React, { useState, useEffect } from "react";

import { useLocation, Link } from "react-router-dom";

export default function Editfeedback(){
        let data = useLocation();


        const [post, setPost] = useState(null);

        let [companyName, setCompanyName] = useState(null);

        let [rating, setRating] = useState(null);
      
        let [feedBack, setFeebBack] = useState(null);
      
        let [productName, setProducutName] = useState(null);
      
        let [email, setEmail] = useState(null);
      
        useEffect(() => {

            axios.get(`http://localhost:4000/feed/feedgetone/${data.state}`)

            .then((response) => {

              setPost(response.data);

            });

          }, []);

     

    const handleValue = (e) => {

         axios.put(`http://localhost:4002/feed/feedupdate/${data.state}`, {

          companyName, rating,feedBack,productName, email

         })

         .then((res)=>{

            window.location.href='/Showfeedback'

         })

         .catch(err=>console.log(err));

    }
 
    if (!post) return null;

    return(

        <div  style={{backgroundColor:'lightyellow'}}>
 
 <form style={{  marginLeft:' 10%', marginRight:"10%"}}>
            <center> <tr><b>Update FeedBack</b></tr></center>


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

                <textarea className="form-control col-sm-3 " id="feedBack" placeholder="Enter your feedback" onChange={e=>setFeebBack(e.target.value)}/>

                <small id="feedBackNoErr" className="form-text text-muted">feedBack Error</small>

              </div>

              <div className="form-group">

                <label for="productName">Product Name</label>

                <input type="text" className="form-control col-sm-3 " id="productName" placeholder="Enter product name" onChange={e=>setProducutName(e.target.value)}/>

                <small id="productNameErr" className="form-text text-muted">product name Error</small>

              </div>

              <div className="form-group">

                <label for="email">Email</label>

                <input type="email" className="form-control col-sm-3 " id="email" placeholder="Enter your Email" onChange={e=>setEmail(e.target.value)}/>

                <small id="emailErr" className="form-text text-muted">Email Error</small>

              </div>


          <button type="submit" className="btn btn-primary " onClick={handleValue}>
            <Link to='/Showfeedback' className='text-dark'>Update</Link></button>

          <button type="reset" className="btn btn-secondary " style={{marginLeft:'1%'}}>
          <Link to='/FeedBack' className='text-dark'>Creat New Feedback</Link></button>


        </form>

    </div>

    );

}
