import { NavLink, useNavigate } from "react-router-dom";
import './navbar.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import useAuth from "../../hook/useAuth";
import { enqueueSnackbar } from 'notistack';
// import DarkMode from "../../darkmode/DarkMode";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import { Badge, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { FaAlignLeft,FaXmark   } from "react-icons/fa6";
import useCarts from "../../api/useCarts";


const Navbar = () => {

    const {user,logOut} = useAuth();
    const [isOpen,setIsOpen] = useState(false)
    const navigate = useNavigate();
    const {cartsTotalProducts} = useCarts()

    useEffect(()=>{
        AOS.init({
            duration: 1200, 
        });
        AOS.refresh();
    },[])
 
    const handleLogin = () => {
        if (!user) {
            return navigate('/login');
        }
        logOut()
        .then(()=>{
            enqueueSnackbar('Logged Out Successfully!',{variant:'success'})
        })
    }

    const handleOpen = () =>{
        setIsOpen(!isOpen)
    }
   
    return (
        <div className="relative w-full h-full text-white ">
            <nav className="fixed w-full top-0 bg-black/80 flex justify-between items-center md:py-3 py-2 z-50 backdrop-blur-sm px-2 xl:px-6" data-aos='slide-down'>
                <div className="flex items-center xl:ml-0 ml-10">
                    <img src="/logo.png" alt="" className="md:w-16 w-12 top-0.5 -rotate-12 absolute ml-6 md:ml-8" />
                    <h1 className="font-bold md:text-3xl text-2xl ml-11 md:ml-14 md:mt-5 mt-3">Car <span className="bg-gradient-to-bl bg-clip-text text-transparent from-darkRed to-lightRed">Canvas</span></h1>
                </div>
                <div className="space-x-10 lg:flex hidden navitem items-center" >
                    <NavLink to='/' className='flex items-center gap-1 navText'>Home</NavLink>                     
                    <NavLink to='/addproduct' className='hover:text-lightRed duration-500'>Add Product</NavLink>
                    <Badge content={cartsTotalProducts} className="bg-red">
                    <NavLink to='/mycart' className='badge mr-1.5'>My Cart
                    </NavLink>                   
                    </Badge>
                    {/* {
                        user && <NavLink to='/myCars'>My Cars</NavLink>
                    } */}
                </div>
                
                <div className="flex items-center gap-5">
                   {/* <DarkMode></DarkMode> */}
                    <div className="md:flex hidden gap-4">
                        <div onClick={handleLogin} className="w-fit"><PrimaryBtn>{user? 'Sign Out' : 'Sign In'}</PrimaryBtn></div>
                        {
                            !user ? <Button onClick={()=>navigate('/signup')} variant='outlined' className="text-white border-white focus:outline-none focus:ring-0 ">Sign up</Button>
                            :
                            ''
                        }
                    </div>
                </div>
            </nav>
            <div className="lg:hidden fixed w-full z-50 top-1 text-white " data-aos='slide-down'> 
            
                <div className="cursor-pointer" onClick={()=>handleOpen()} >
                {
                    isOpen ? <FaXmark className="text-2xl m-4"/> : <FaAlignLeft className="text-2xl m-4"/>
                }
                </div>
                
                <div className={`bg-white/90 backdrop-blur rounded-3xl absolute w-52 h-44 ${isOpen ? 'top-14 left-1': '-left-96'}`}  >
                    <div className="flex flex-col justify-center gap-3 w-36 font-medium mx-auto text-black/80 navitem">
                        <NavLink onClick={()=>handleOpen()} to='/' className="mt-4">Home</NavLink>
                        <NavLink onClick={()=>handleOpen()} to='/addproduct' className="">Add Products</NavLink>
                        <NavLink onClick={()=>handleOpen()} to='/mycart' className="">My Carts</NavLink>
                        <div onClick={handleLogin} className="w-fit md:hidden block"><PrimaryBtn>{user? 'Sign Out' : 'Sign In'}</PrimaryBtn></div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;