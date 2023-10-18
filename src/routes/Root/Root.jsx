import { Outlet, useLocation } from "react-router-dom";
import Footer from '../../components/Footer/Footer'
import Home from "../../pages/Home/Home";
import Navbar from "../../components/Navbar/Navbar";

const Root = () => {
    const {pathname} = useLocation();

    return (
        <div className="overflow-hidden">
            <div>
                {pathname === '/' ? <Home></Home> : <Navbar></Navbar>}
            </div>            
            <div className="min-h-screen mt-24">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;