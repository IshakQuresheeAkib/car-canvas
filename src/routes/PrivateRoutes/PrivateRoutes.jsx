import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import Lottie from "lottie-react";
import loadingAnim from '../../../public/loadingAnim.json'


const PrivateRoutes = ({children}) => {
    
    const {user,loading} = useAuth();
    const {pathname} = useLocation();
    
    
    
    
    if (loading) {
        return <div className="h-screen w-screen flex justify-center items-center">
        <Lottie animationData={loadingAnim} className="w-96"></Lottie>
    </div>
        
    }

    if (!user) {
        return <Navigate to='/login' state={pathname}></Navigate>
    }

    return children;
};

export default PrivateRoutes;