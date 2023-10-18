import { MdAlternateEmail } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';


const Login = () => {
    return (
        <section className="flex flex-wrap justify-center lg:h-screen lg:items-end my-20 md:order-1 order-2">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 h-3/4">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                        eaque error neque ipsa culpa autem, at itaque nostrum!
                    </p>
                </div>
                <form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
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
                        <p className="text-sm text-gray-500">
                        No account?
                        <a className="underline" href="">Sign up</a>
                        </p>

                        <button
                        type="submit"
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        >
                        Sign in
                        </button>
                    </div>
                </form>
            </div>                    
        </section>
        
    );
};

export default Login;