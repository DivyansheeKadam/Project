import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout=()=>{

return(
    <>
    <Header/>
    <section>
    <Outlet/>
    </section>
    <Footer/>

    </>


)
}
export default Layout;