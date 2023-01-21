import React, {useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";  
export default function Loginfeedback(){

  let [companyName, setCompanyName] = useState(null);

  let [rating, setRating] = useState(null);

  let [feedBack, setFeebBack] = useState(null);

  let [productName, setProducutName] = useState(null);

  let [email, setEmail] = useState(null);

  const submitFeedback = ()=>{

      axios.post('http://localhost:4000/login/feedpostdata2',{companyName, rating, email, feedBack, productName})
      .then(res=>{console.log(res.data);
          window.location='/Showloginfeedback'})
      
    
      .catch(err=>console.log(err));

  }
 
    return(

        <div style={{backgroundColor:'blue'}}>

            <div className="container-fluid row">

            <div className="container col-sm-12">

            <form style={{  marginLeft:'40%'}}>
            <center> <tr><b>FeedBack</b></tr></center>


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

              <button type="submit" className="btn btn-primary col-sm-1"

              onClick={submitFeedback} >Submit</button>

            </form>

            </div>

            </div>

        </div>

    );
  }
