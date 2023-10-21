import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import DotLoader from "react-spinners/ClipLoader";

const PrivateRoutes = ({children}) => {
    
    const {user,loading} = useAuth();
    const {pathname} = useLocation();
    
    
    
    
    if (loading) {
        return <div className="h-screen w-screen flex justify-center items-center">
        <DotLoader
    color="#911717"
    size={72}
  />
    </div>
        
    }

    if (!user) {
        return <Navigate to='/login' state={pathname}></Navigate>
    }

    return children;
};

export default PrivateRoutes;