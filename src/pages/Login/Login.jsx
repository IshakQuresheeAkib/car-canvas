import { MdAlternateEmail } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import { GrGoogle } from 'react-icons/gr';
import { enqueueSnackbar } from 'notistack';

const Login = () => {

    const {logIn,googleLogIn} = useAuth();
    const {state} = useLocation()
    const navigate = useNavigate();
    console.log(state);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email,password};
        console.log(user);

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
        <section className="flex flex-wrap justify-center lg:h-screen lg:items-end mb-20 md:order-1 order-2">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 h-3/4">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Welcome Back!</h1>
                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                        eaque error neque ipsa culpa autem, at itaque nostrum!
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <div>
                        <label className="sr-only">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                name='email'
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter email"
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
                                type="password"
                                name="password"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter password"
                            />
                            <span className="absolute text-xl inset-y-0 end-0 grid place-content-center px-4">
                                <AiFillEye></AiFillEye>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">                        
                        <input type="submit" className="inline-block btn bg-gradient-to-br from-darkRed to-lightRed rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white" value='Log in'/>
                        <p className="text-sm text-gray-500">
                        No account?
                        <Link to='/signup' className="underline underline-offset-4" href="">Sign up</Link>
                        </p>
                    </div>            
                    
                </form>
                <div className='flex items-center w-72 mx-auto mt-6'>
                    <hr className='w-20 text-darkRed mt-px mr-2'/>
                    <h1 className='text-center'>continue with</h1>
                    <hr className='w-20 text-darkRed mt-px ml-2'/>
                </div>
                <GrGoogle onClick={handleGoogle} className=' cursor-pointer hover:text-darkRed hover:scale-110 duration-300 mx-auto mt-2 text-2xl'></GrGoogle>
            </div>                    
        </section>
        
    );
};

export default Login;