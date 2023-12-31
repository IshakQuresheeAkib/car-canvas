import { Outlet, useLocation } from "react-router-dom";
import Footer from '../../components/Footer/Footer'
import Home from "../../pages/Home/Home";
import Navbar from "../../components/Navbar/Navbar";
import useAuth from "../../hook/useAuth";
import loadingAnim from '../../../public/loadingAnim.json'
import Lottie from "lottie-react";


const Root = () => {
    const {pathname} = useLocation();
    const {loading} = useAuth();

    return (
        <div className="overflow-hidden">
            {
                loading ? <div className="h-screen w-screen flex justify-center items-center">
                    <Lottie animationData={loadingAnim} className="w-96"></Lottie>
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