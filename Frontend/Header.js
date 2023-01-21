import { Link } from "react-router-dom";

const Header=()=>{
return(
    <div className="Header">
        <Link to="/Registration">Registration</Link><br/>
        <Link to="/velidForm">VelidationForm</Link><br/>
        <Link to="/Login">LogIn</Link><br/>



    </div>
)
};
export default Header;
