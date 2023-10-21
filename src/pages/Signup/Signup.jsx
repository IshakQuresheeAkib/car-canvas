import { MdAlternateEmail } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import { enqueueSnackbar } from 'notistack';

const Signup = () => {

    const {createUser} = useAuth();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const newUser = {email,password};
        console.log(newUser);


        if (!/(?=.*[!#$%&?^*@~() "])/.test(password)) {
            return enqueueSnackbar('Password should have a special character!',{variant:'error'})
        }else if (!/[A-Z]/.test(password)) {
            return enqueueSnackbar('Password should have a capital letter !',{variant:'error'})
        }else if(!/(?=.{8,})/.test(password)){
            return enqueueSnackbar('Password should have minimum six character !',{variant:'error'})
        }

        createUser(email,password)
        .then(()=>{
            enqueueSnackbar('Account created successfully!',{variant:'success'})
        })
        .catch(err=>{
            enqueueSnackbar(`${err}`,{variant:'error'})
        })
    }

    return (
        <section className="flex flex-wrap justify-center lg:h-screen lg:items-end my-20 md:order-1 order-2">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 h-3/4">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
                    <p className="mt-4 text-gray-500">
                        {`Welcome to our car enthusiast community. Create your account to unlock exclusive features, save your favorite cars, and take the next step in your car-buying experience.`}
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
                        <input type="submit" className="inline-block btn bg-gradient-to-br from-darkRed to-lightRed rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white" value='Sign up'/>
                        <p className="text-sm text-gray-500">
                        Already have an account?
                        <Link to='/login' className="underline underline-offset-4" href="">Log in</Link>
                        </p>
                    </div>            
                    
                </form>
            </div>                    
        </section>
    );
};

export default Signup;
