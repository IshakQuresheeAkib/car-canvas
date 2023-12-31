import { enqueueSnackbar } from "notistack";
import { useParams } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { Helmet } from "react-helmet-async";
import ColorTitle from '../../components/ColorTitle/ColorTitle'
import { Button } from "@material-tailwind/react";
import { IoMdPricetags } from "react-icons/io";
import { BsStar, BsStarFill } from "react-icons/bs";
import Rating from "react-rating";
import { TbBrandItch } from "react-icons/tb";
import useCarts from "../../api/useCarts";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Lottie from "lottie-react";
import loadingAnim from '../../../public/loadingAnim.json'

const ProductsDetails = () => {

    const {id} = useParams()
    const {user} = useAuth();
    const {refetch} = useCarts();

    const {data = [],isLoading} = useQuery({
        queryKey:[''],
        queryFn:()=> axios.get(`http://localhost:5000/product/${id}`,{withCredentials:true})
    })

    if (isLoading) {
        return <div className="h-screen w-screen flex justify-center items-center">
        <Lottie animationData={loadingAnim} className="w-96"></Lottie>
    </div>
    }

    const product = data?.data
    const {name,brandName,image,price,_id:productId} = product || {}
    
    console.log(product);

    const handleAddToCart =  () => {
        fetch('http://localhost:5000/carts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({name,brandName,image,price,productId,email:user?.email})
        })
        .then(res=>{
            console.log(res);
            if (res.ok) {
                refetch()
                return enqueueSnackbar(`${product.name} added to cart successfully!`,{variant:'success'})
            }
            enqueueSnackbar(`${product.name} Already Added!`,{variant:'error'})
        })
        .then(()=>{})       
    }

    return (
        <div className="min-h-screen flex items-center my-20 xl:mb-0 2xl:px-16 px-4">
            <Helmet>
                <title>{product.name}</title>
            </Helmet>
            <div className="flex xl:flex-row flex-col items-center gap-10" >
                <div className="flex-1">
                    <img src={product.image} alt="" />
                </div>
                <div className="flex-1">
                    <ColorTitle>{product.name}</ColorTitle>
                    <p className="mt-5 mb-7 text-sm">{product.description}</p>                   
                    <div className="flex gap-10">
                        <div>
                        <IoMdPricetags className="inline mr-2 text-2xl text-red"/>
                        <span>${product.price}</span>
                        </div>
                        <div className="text-xl text-red">
                            <Rating
                            fractions={4}
                            initialRating={product.rating}
                            quiet={true}
                            fullSymbol={<BsStarFill></BsStarFill>}
                            emptySymbol={<BsStar></BsStar>}
                            readonly
                            />
                        </div>
                        <div>
                        <TbBrandItch className="inline mr-2 text-2xl text-red"/> 
                        <span>{(product.brandName)?.toUpperCase() }</span>
                        </div>
                    </div>
                    <hr  className="mt-7 pb-6"/>
                    <Button onClick={handleAddToCart} className="bg-gradient-to-bl from-lightRed to-darkRed">
                    Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;