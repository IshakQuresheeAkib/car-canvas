import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const PrivateRoutes = ({children}) => {

    const {user,loading} = useAuth();
    const {pathname} = useLocation();

    if (loading) {
        return <p className="text-5xl">Loading...</p>
    }

    if (!user) {
        return <Navigate to='/login' state={pathname}></Navigate>
    }

    return children;
};

export default PrivateRoutes;