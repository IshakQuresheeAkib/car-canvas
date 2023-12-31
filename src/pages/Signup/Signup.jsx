import { MdAlternateEmail } from 'react-icons/md';
import { AiFillEye,AiFillEyeInvisible  } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import { enqueueSnackbar } from 'notistack';
import Lottie from 'lottie-react';
import createAccount from '../../../public/createAccount.json'
import { Helmet } from 'react-helmet-async';
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import useImage from '../../hook/useImage';


const Signup = () => {

    const {createUser,manageProfile} = useAuth();
    const [isVisible,setIsVisible] = useState(false)
    const [image,setImage] = useState('')
    const {imageUrl} = useImage(image) 
    console.log(imageUrl);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = {name,image,email,password,imageUrl};
        console.log(newUser);


        if (!/(?=.*[!#$%&?^*@~() "])/.test(password)) {
            return enqueueSnackbar('Password should have a special character!',{variant:'error'})
        }else if (!/[A-Z]/.test(password)) {
            return enqueueSnackbar('Password should have a capital letter !',{variant:'error'})
        }else if(!/(?=.{8,})/.test(password)){
            return enqueueSnackbar('Password should have minimum six character !',{variant:'error'})
        }

        if (!image?.length) {
            return enqueueSnackbar('Upload your profile image!',{variant:'error'});
        }
        createUser(email,password)
        .then(()=>{
            manageProfile(name,imageUrl)
            .then(()=>{
                enqueueSnackbar('Account created successfully!',{variant:'success'})
            })
            .catch(err=>{
                enqueueSnackbar(`${err}`,{variant:'error'})
            })
        })
        .catch(err=>{
            enqueueSnackbar(`${err}`,{variant:'error'})
        })
    }

    return (
        <div className='flex md:flex-row flex-col gap-10 items-center justify-center md:px-20 px-6 min-h-screen my-14'>
            <Helmet>
                <title>Car Canvas | Sign up</title>
            </Helmet>
            <Lottie animationData={createAccount} className='md:w-1/2'></Lottie>
            <div className='shadow-xl rounded-xl border border-black/5 p-5'>
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
                    <p className="mt-4 text-black/60 text-sm">
                        {`Welcome to our car enthusiast community. Create your account to unlock exclusive features, save your favorite cars, and take the next step in your car-buying experience.`}
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label className="sr-only">Name</label>
                        <div className="relative">
                            <input
                                type="text"
                                name='name'
                                className="w-full rounded-lg border-b-2 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Name"
                                required
                            />
                            <span className="absolute inset-y-0 text-xl end-0 grid place-content-center px-4">
                                <CgProfile></CgProfile>
                            </span>
                        </div>
                    </div>
                    <div>
                        <label className="sr-only">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                name='email'
                                className="w-full rounded-lg border-b-2 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
                                required
                            />
                            <span className="absolute inset-y-0 text-xl end-0 grid place-content-center px-4">
                                <MdAlternateEmail></MdAlternateEmail>
                            </span>
                        </div>
                    </div>
                    <div>
                        <label className="sr-only">Password</label>
                        <div className="relative">
                            <input
                                type={isVisible ? 'text' : 'password'}
                                name="password"
                                className="w-full rounded-lg border-b-2 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                                required
                            />
                            <span className="absolute text-xl inset-y-0 end-0 grid place-content-center px-4">
                                <div className=' cursor-pointer' onClick={()=>setIsVisible(!isVisible)}>
                                { isVisible ? <AiFillEye/>:<AiFillEyeInvisible/> }
                                </div>
                                
                            </span>
                        </div>
                    </div>
                    <div>
                        <label className='flex items-center cursor-pointer w-fit rounded-lg border-b-2 p-5 shadow-sm'>
                            {
                                !image ? <div className='flex flex-col items-center'>
                                <FaCloudUploadAlt className='text-xl text-black/30'/>
                                <span className='text-sm text-black/30 normal-case font-medium'>Upload An Image</span>
                                </div> : ''
                            }
                            <input type="file" onChange={e=>setImage(e.target.files)} className={`${!image ? "hidden" : ''} file:hidden text-xs`} placeholder="Image URL" />
                        </label>
                    </div>
                    <div className="flex items-center justify-between">                        
                        <input type="submit" className="inline-block btn bg-gradient-to-br from-darkRed to-lightRed rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white" value='Sign up'/>
                        <p className="text-sm text-gray-500">
                        Already have an account?
                        <Link to='/login' className="underline underline-offset-4" href="">Log in</Link>
                        </p>
                    </div>            
                    
                </form>
            </div>                    
        </div>
    );
};

export default Signup;
