import { useLocation } from "react-router-dom";

export default function FeedBDelete(){

    let value = useLocation();

    fetch(`http://localhost:4000/feed/delete/${value.state}`,

    {

        method:'DELETE'

    }).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp)
      })
    // })
    // .then(()=>{alert('Deleted')})

    // .then(()=>{window.location.href='/feedback'})

    // .catch(err=>{console.log(err)});

   

})}