import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
export default function Showfeedback(){
    let [data, setData] = useState([]);

    useEffect(()=>{

        axios.get('http://localhost:4000/feed/feedgetall')

        .then(res=>setData(res.data))

        .catch(err=>setData(err));

    }, []);
 
    return(

        <  >

            <table className="table table-bordered" style={{backgroundColor:'pink'}}>
                <tr>

                    <th>Id</th><th>Name</th><th>Rating</th><th>Product Name</th><th>FeedBack</th><th>Email</th><th className="text-info">Edit</th><th className="text-danger">Delete</th>

                </tr>
                {

                    data.map((result, i)=><tr key={i}><td>{result._id}</td><td>{result.companyName}</td><td>{result.rating}</td><td>{result.productName}</td><td>{result.feedBack}</td><td>{result.email}</td>
                    <td><Link to='/Editfeedback' state={result._id} className="text-info">Edit</Link> </td>
                    <td><Link to='/Deletefeedback' state={result._id} className="text-danger">Delete</Link> </td>
                    </tr>)

                }

           </table>

        </>

    );

}