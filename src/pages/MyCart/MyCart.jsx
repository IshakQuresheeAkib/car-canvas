import { enqueueSnackbar } from "notistack";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from "lottie-react";
import loadingAnim from '../../../public/loadingAnim.json'
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ColorTitle from "../../components/ColorTitle/ColorTitle";
import { MdDelete } from "react-icons/md";
import PrimaryBtn from "../../components/PrimaryBtn/PrimaryBtn";
import { Link } from "react-router-dom";
import useCarts from "../../api/useCarts";
import Swal from "sweetalert2";


const MyCart = () => {

    useEffect(()=>{
        AOS.init({
            duration: 1200, 
        });
        AOS.refresh();
    },[])   

    const {products,isLoading,refetch,totalPrice} = useCarts() || {}
    
    if (isLoading) {
        return <div className="h-screen w-screen flex justify-center items-center">
        <Lottie animationData={loadingAnim} className="w-96"></Lottie>
    </div>
    }

    

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you Confirm?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`,{
                    method:"DELETE",
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(products)
                })
                .then(res=>res.json())
                .then(()=>{
                    refetch();
                    enqueueSnackbar('Product Deleted successfully!',{variant:'success'})
                })
            }
          });
          
        
    }

    return (
        <div className="max-w-7xl md:mx-auto sm:mx-5 mt-28 mb-32 min-h-screen">
            <Helmet>
                <title>My Carts</title>
            </Helmet>
            <h1 className="xl:text-6xl text-5xl text-center font-semibold mb-7">My <ColorTitle>Carts</ColorTitle></h1>
            {
                products?.length ? <div className="flex flex-col lg:flex-row h-full justify-center lg:items-start items-center lg:gap-4 gap-20 px-6 2xl:px-4 py-14 pt-0">
                <div className="flex flex-col h-full mx-auto sm:w-fit w-full">
                    <div className="flex flex-col md:px-4 text-lg h-fit font-semibold justify-center shadow-md border rounded pt-7">
                        {
                            products && products?.map(product=><div key={product._id} className="flex flex-col sm:flex-row gap-7 items-center mb-14">
                            <div className="w-80">
                                <img className="w-full h-40" src={product.image} />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-1 w-56 2xl:w-72">
                                    <p className="text-lg w-fit font-semibold">{product?.name}</p>
                                    <p className="text-xs text-gray-600 font-semibold">Brand Name: <span className="font-normal">{(product.brandName)?.toUpperCase()}</span></p>
                                </div>
                                <p className="text-black/70 text-base 2xl:mr-4 mr-3">${product?.price}</p>
                                <MdDelete onClick={()=>handleDelete(product._id)} className="h-6 w-6 cursor-pointer text-red active:scale-90"/>
                            </div>
                        </div>)
                        }
                    </div>
                </div>
                <div className="flex flex-col w-full lg:w-1/3 h-fit gap-4">
                        <div className="flex flex-col p-4 gap-4 text-lg font-semibold shadow-md border rounded">
                            <div className="flex flex-row justify-between">
                                <p className="">Subtotal ({products?.length} Items)</p>
                                <p className="text-end font-bold">${totalPrice}</p>
                            </div>
                            <hr className="bg-gray-200 h-0.5"/>
                            <div className="flex flex-row justify-between">
                                <p className="text-gray-600 text-base">Tax</p>
                                <p className="text-end font-bold text-base">0$</p>
                            </div>
                            <hr className="bg-gray-200 h-0.5"/>
                            <div className="flex flex-row justify-between">
                                <p className="text-gray-600 text-base">Discount Coupon</p>
                                <a className="text-gray-500 text-base underline">Add</a>
                            </div>
                            <hr className="bg-gray-200 h-0.5" />
                            <div className="flex flex-row justify-between">
                                <p className="text-gray-600 text-base">Total</p>
                                <div>
                                <p className="text-end font-bold text-base">${totalPrice}</p>
                                </div>
                            </div>
                            <div className="flex gap-2 justify-between ">
                                <PrimaryBtn>Checkout</PrimaryBtn>
                                <Link to='/'><PrimaryBtn>ADD MORE PRODUCTS</PrimaryBtn></Link>
                            </div>
                        </div>
                </div>
            </div>
            :
            <div className="flex items-center justify-center h-[40vh]"><p>No Cars Added Yet!</p></div>
            }
        </div>
    );
};

export default MyCart;