import { Outlet, useLocation } from "react-router-dom";
import Footer from '../../components/Footer/Footer'
import Home from "../../pages/Home/Home";
import Navbar from "../../components/Navbar/Navbar";
import useAuth from "../../hook/useAuth";
import DotLoader from "react-spinners/ClipLoader";

const Root = () => {
    const {pathname} = useLocation();
    const {loading} = useAuth();

    return (
        <div className="overflow-hidden">
            {
                loading ? <div className="h-screen w-screen flex justify-center items-center">
                    <DotLoader
                color="#911717"
                size={72}
              />
                </div>
                :
                <div>
                <div>
                    {pathname === '/' ? <Home></Home> : <Navbar></Navbar>}
                </div>            
                <div className="">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
            }
        </div>
    );
};

export default Root;