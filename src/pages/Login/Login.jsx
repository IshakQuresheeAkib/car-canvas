import { MdAlternateEmail } from 'react-icons/md';
import { AiFillEye,AiFillEyeInvisible  } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import { GrGoogle } from 'react-icons/gr';
import { enqueueSnackbar } from 'notistack';
import Lottie from 'lottie-react';
import loginAnimation from '../../../public/login-animation.json'
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

const Login = () => {

    const {logIn,googleLogIn} = useAuth(); 
    const [isVisible,setIsVisible] = useState(false)
    const {state} = useLocation()
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        logIn(email,password)
        .then(()=> {
            enqueueSnackbar('Logged in successfully!',{variant:'success'})
            navigate(state ? state : '/' )
            form.reset();
        })
        .catch(err=>{
            enqueueSnackbar(`${err}`,{variant:'error'})
        })
    }

    const handleGoogle = () => {
        googleLogIn()
        .then(()=> {
            enqueueSnackbar('Logged in successfully!',{variant:'success'})
            navigate(state ? state : '/' )
        })
        .catch(err=>{
            enqueueSnackbar(`${err}`,{variant:'error'})
        })
        
    }


    return (
        <div className='flex md:flex-row flex-col gap-10 items-center justify-center md:px-20 px-6 min-h-screen my-14'>
            <Helmet>
                <title>Car Canvas | Log in</title>
            </Helmet>
            <Lottie animationData={loginAnimation} className='md:w-1/2'></Lottie>
            <div className='shadow-xl rounded-xl border border-black/5 p-5'>
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Welcome Back!</h1>
                    <p className="mt-4 text-black/60 text-sm">
                        {`Log in to your account to access your personalized dashboard, view your saved cars, and continue your car-buying journey.`}
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>                       
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
                    <div className="flex items-center justify-between">                        
                        <input type="submit" className="inline-block btn bg-gradient-to-br from-darkRed to-lightRed rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white" value='Log in'/>
                        <p className="text-sm text-gray-500">
                        No account? 
                        <Link to='/signup' className="underline underline-offset-2" href=""> Sign up</Link>
                        </p>
                    </div>            
                    
                </form>
                <div className='flex items-center justify-center mx-auto mt-6'>
                    <hr className='w-16 mt-px mr-2 '/>
                    <h1 className='text-center text-sm text-black/60'>or continue with</h1>
                    <hr className='w-16 mt-px ml-2'/>
                </div>
                <GrGoogle onClick={handleGoogle} className=' cursor-pointer hover:text-lightRed hover:scale-110 duration-200 mx-auto mt-4 text-2xl'></GrGoogle>
            </div> 
        </div>                           
    );
};

export default Login;