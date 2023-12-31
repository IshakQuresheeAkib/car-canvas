import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../hook/useAuth";

const useCarts = () => {

    const {user} = useAuth();

    const {data,isLoading,refetch} = useQuery({
        queryKey:['mycarts',user],
        queryFn:() => axios.get(`http://localhost:5000/carts?email=${user?.email}`,{ withCredentials:true }),
        retry:3
    })

    const totalPrice=  data?.data?.reduce((a,b)=>a + parseInt(b.price),0)
    const cartsTotalProducts = data?.data.length || 0

    return {products:data?.data,isLoading,refetch,cartsTotalProducts,totalPrice}
}
export default useCarts;