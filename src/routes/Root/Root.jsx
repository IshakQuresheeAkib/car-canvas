import { Outlet, useLocation } from "react-router-dom";
import Footer from '../../components/Footer/Footer'
import Home from "../../pages/Home/Home";
import Navbar from "../../components/Navbar/Navbar";
import useAuth from "../../hook/useAuth";

const Root = () => {
    const {pathname} = useLocation();
    const {loading} = useAuth();

    return (
        <div className="overflow-hidden">
            {
                loading ? <p className="text-5xl">Loading</p>
                :
                <div>
                <div>
                    {pathname === '/' ? <Home></Home> : <Navbar></Navbar>}
                </div>            
                <div className="min-h-screen mt-24">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
            }
        </div>
    );
};

export default Root;