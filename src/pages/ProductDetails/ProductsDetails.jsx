import { enqueueSnackbar } from "notistack";
import { useLoaderData } from "react-router-dom";

const ProductsDetails = () => {

    const product = useLoaderData(); 
   

    const handleAddToCart =  () => {
        fetch('https://car-canvas-server-9873fualf-ishak-qureshee-akibs-projects.vercel.app/carts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res=>{
            console.log(res);
            if (res.ok) {
                return enqueueSnackbar(`${product.name} added to cart successfully!`,{variant:'success'})
            }
            enqueueSnackbar(`${product.name} Already Added!`,{variant:'error'})
        })
        .then(()=>{})       
    }

    return (
        <div className="mx-4">
            <div className="card card-body mt-36" >
                <img src={product.image} alt="" />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button onClick={handleAddToCart} className="btn hover:bg-red-900 border-none bg-gradient-to-bl from-lightRed to-darkRed text-white normal-case md:btn-md btn-sm w-72 ">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductsDetails;