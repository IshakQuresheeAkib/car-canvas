import { enqueueSnackbar } from "notistack";
import { useLoaderData } from "react-router-dom";

const ProductsDetails = () => {

    const product = useLoaderData(); 
    console.log(product);

    const handleAddToCart = () => {
        fetch(`http://localhost:5000/carts`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.insertedId) {
                enqueueSnackbar('Product added to cart successfully!',{variant:'success'})
            }
        })
    }

    return (
        <div>
            <div className="card card-body w-96" >
                <img src={product.image} alt="" />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button onClick={handleAddToCart} className="btn hover:bg-red-900 border-none bg-gradient-to-bl from-lightRed to-darkRed text-white normal-case md:btn-md btn-sm">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductsDetails;