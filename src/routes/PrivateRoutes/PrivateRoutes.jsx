import { Navigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const PrivateRoutes = ({children}) => {

    const {user,loading} = useAuth();

    if (loading) {
        return <p className="text-5xl">Loading...</p>
    }

    if (!user) {
        return <Navigate to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoutes;