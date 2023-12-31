import axios from "axios";
import { useEffect } from "react";
import useAuth from './useAuth'
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL:'http://localhost:5000',
    withCredentials:true
})

const useAxiosSecure = () => {

    const {logOut} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>res,error=>{
            console.log(error.response);
            if (error.response.status === 403 || error.response.status === 401) {
                logOut()
                .then(()=>{
                    enqueueSnackbar('Your session is time out,Please log in again!',{variant:'error'})
                    return navigate('/login')
                })
                .catch(err=>console.log(err))
            }
        })
    },[logOut,navigate])

    return axiosSecure;
};

export default useAxiosSecure;