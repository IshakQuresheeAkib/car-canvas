import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {

    const loadedData = useLoaderData();
    const [products,setProducts] = useState(loadedData)
    console.log(loadedData);

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://car-canvas-server-9873fualf-ishak-qureshee-akibs-projects.vercel.app/carts/${id}`,{
            method:"DELETE",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(products)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const remaining = products.filter(product=> product._id !== id)
            setProducts(remaining);
            enqueueSnackbar('Product Deleted successfully!',{variant:'success'})
        })
    }

    return (
        <div className="max-w-7xl mx-auto mt-36">
            <h1 className="text-5xl text-bold my-10 text-center">My Carts</h1>
            <div className="flex gap-10  mb-36">
                {products && 
                    products.map(product => <div key={product._id} className="card p-5 border w-80">
                        <img src={product.image} alt="" />
                        <h2 className="card-title">
                        {product.name}
                        <div className="badge badge-outline text-xs">{product.brandName.toUpperCase()}</div>
                        </h2>
                        <small>{product.type}</small>
                        <h2 className="font-bold mt-3">$ {product.price}</h2>
                        <h2 className="font-bold">{product.rating} star</h2>
                        <div className="flex justify-between mt-5">  
                            <button onClick={()=>handleDelete(product._id)} className="btn hover:bg-red-900 border-none bg-gradient-to-bl from-lightRed to-darkRed text-white normal-case md:btn-md btn-sm">Delete</button>                            
                        </div>
                    </div> )
                }
            </div>
        </div>
    );
};

export default MyCart;