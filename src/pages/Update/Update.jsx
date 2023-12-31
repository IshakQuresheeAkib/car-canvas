import { enqueueSnackbar } from "notistack";
import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {

    const product = useLoaderData();
    const navigate = useNavigate();
    console.log(product);
    const {_id,name,brandName,type,price,rating,image} = product;
    console.log(_id);

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value.toLowerCase();
        const image = form.image.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;

        const updatededProduct = {_id,name,brandName,image,type,price,rating}
        console.log(updatededProduct);
        
        fetch('http://localhost:5000/products',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatededProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            enqueueSnackbar('Product Updated successfully!',{variant:'success'})
            navigate(`/products/${brandName}`)
        })

        fetch('http://localhost:5000/carts',{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatededProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);            
        })
    }

    return (
        <div>
            <div className="flex min-h-screen items-center justify-start bg-white px-3" data-aos='zoom-out-down'>
                <div className="mx-auto w-full max-w-lg">
                    <h1 className="text-4xl font-bold">Update Information</h1>
                    <p className="mt-3">Seize the Opportunity to Showcase Your Vehicle - List It with Us Today!</p>

                    <form onSubmit={handleAddProduct} className="mt-10">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="relative z-0">
                                <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" defaultValue={name}/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Name</label>
                            </div>
                            <div className="relative z-0">
                                <input type="text" name="brandName" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" defaultValue={brandName}/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Brand Name</label>
                            </div>
                            <div className="relative z-0">
                                <input type="text" name="image" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" defaultValue={image}/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Image URL</label>
                            </div>
                            <div className="relative z-0">
                                <input type="text" name="type" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" defaultValue={type}/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Type</label>
                            </div>
                            <div className="relative z-0">
                                <input type="number" name="price" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" defaultValue={price}/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Price</label>
                            </div>
                            <div className="relative z-0">
                                <input type="number" step={0.01} name="rating" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" defaultValue={rating}/>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Rating</label>
                                
                            </div>
                        </div>
                        <button type="submit" className="mt-5  bg-black px-10 bg-gradient-to-bl from-lightRed to-darkRed text-white normal-case">Update</button>
                    </form>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Update;