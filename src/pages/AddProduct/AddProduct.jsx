import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { enqueueSnackbar } from 'notistack';
import { Helmet } from 'react-helmet-async';
import useImage from '../../hook/useImage';
import { useEffect, useState } from 'react';
import { Button } from '@material-tailwind/react';
import ColorTitle from '../../components/ColorTitle/ColorTitle';
import useAuth from '../../hook/useAuth'
import { FaCloudUploadAlt } from "react-icons/fa";


const AddProduct = () => {

    
useEffect(()=>{
    AOS.init({
        duration: 1200, 
    });
    AOS.refresh();
},[])

    const [brandName,setBrandName] = useState('brands')
    const {user} = useAuth()
    const [image,setImage] = useState('')
    const {imageUrl} = useImage(image)    
    
    const handleAddProduct = (e) => {
        e.preventDefault();
        console.log('hello');
        const form = e.target;
        const name = form.name.value;       
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const products = {name,brandName,image:imageUrl,price,rating,description,email:user?.email}
        console.log(products);
        if (!image?.length) {
            return enqueueSnackbar('Upload an image of your product!',{variant:'error'});
        }
        if (brandName === 'brands' ) {
            return enqueueSnackbar('Please select a brand name!',{variant:'error'});
        }
        if (imageUrl) {
            fetch('http://localhost:5000/products',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(products)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.insertedId) {
                enqueueSnackbar('Product added successfully!',{variant:'success'})
                form.reset();
            }
        })
        }
        
    }
    
    return (
        <div className='my-24'>
            <Helmet>
                <title>Add Your Vehicle</title>
            </Helmet>
            <div className="flex min-h-screen items-center justify-start bg-white px-3" data-aos='zoom-out-down'>
                <div className="mx-auto w-full max-w-2xl text-center">
                    <h1 className="xl:text-6xl text-5xl text-center font-semibold mb-7">Add Your<ColorTitle>Vehicle</ColorTitle>
                    </h1>
                    <p className="mt-3 text-sm">Seize the Opportunity to Showcase Your Vehicle - List It with Us Today!</p>
                    <form onSubmit={handleAddProduct} className="mt-16">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <input type="text" name="name" className="w-full rounded-lg border-b-2 h-14 p-4 text-sm shadow-sm" placeholder="Name"  required/>
                            <select defaultValue='brands' onChange={e=>setBrandName(e.target.value)} className='w-full cursor-pointer rounded-lg border-b-2 h-14 p-4 text-sm font-normal shadow-sm' required>
                                <option value="brands" disabled readOnly>Brand Name</option>
                                <option value='porsche'>Porsche</option>
                                <option value='rolls royce'>Rolls Royce</option>
                                <option value='bmw'>BMW</option>
                                <option value='jaguar'>Jaguar</option>
                                <option value='ford'>Ford</option>
                                <option value='lamborghini'>Lamborghini</option>
                            </select>
                            
                            <input type="number" name="price" min='0' className="w-full rounded-lg border-b-2 h-14 p-4 text-sm shadow-sm" placeholder="Price"  required/>
                            <input type="number" max='5' min='0' step="0.1" name="rating" className="w-full rounded-lg border-b-2 h-14 p-4 text-sm shadow-sm" placeholder="Rating" required />
                            <label className='flex justify-center items-center cursor-pointer shadow-sm border-b-2 rounded-lg'>
                            {
                                !image ? <div className='flex flex-col items-center justify-center '>
                                <FaCloudUploadAlt className='text-2xl text-black/30'/>
                                <span className='text-sm text-black/30 normal-case font-medium'>Upload An Image</span>
                                </div> : ''
                            }
                            <input type="file" name='image' onChange={e=>setImage(e.target.files)} className={`${!image ? "hidden" : ''} file:hidden text-xs`} placeholder="Image URL"/>
                            </label>
                            <textarea name="description" rows="5" className="w-full rounded-lg border-b-2 p-4 text-sm shadow-sm" placeholder="Short Description"  required/>
                        </div>
                        <Button className='bg-gradient-to-bl from-lightRed to-darkRed mt-10' type='submit'>Add Products</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;