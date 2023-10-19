import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const BrandItems = () => {

    const products = useLoaderData();
    const {brand} = useParams();
    console.log(brand);
    const navigate = useNavigate();


    console.log(products);

    return (
        <div className="max-w-7xl mx-auto mt-36">
            <h1 className="text-5xl text-bold my-10 text-center">{brand.toUpperCase()}</h1>
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
                            <button onClick={()=>navigate(`/product/${product._id}`)} className="btn hover:bg-red-900 border-none bg-gradient-to-bl from-lightRed to-darkRed text-white normal-case md:btn-md btn-sm">Details</button>
                            <button onClick={()=>navigate(`/update/${product._id}`)} className="btn hover:bg-red-900 border-none bg-gradient-to-bl from-lightRed to-darkRed text-white normal-case md:btn-md btn-sm">Update</button>
                        </div>
                    </div> )
                }
            </div>
        </div>
    );
};

export default BrandItems;