import { NavLink } from "react-router-dom";
import { stack as Menu } from 'react-burger-menu'
import './navbar.css'

const Navbar = () => {

   
    return (
        <div className="relative w-full h-full text-white">
            <nav className="fixed w-full top-0 bg-black/80 flex justify-between items-center md:py-4 py-3">
                <div className="flex items-center md:ml-0 ml-10">
                    <img src="./logo.png" alt="" className="md:w-24 w-14 top-0 -rotate-12 absolute ml-9" />
                    <h1 className="font-bold md:text-3xl text-2xl ml-16 md:mt-6 ">Car <span className="bg-gradient-to-l bg-clip-text text-transparent from-lightRed to-darkRed">Canvas</span></h1>
                </div>
                <div className="space-x-10 md:flex hidden navitem">
                    <NavLink to='/'>Home</NavLink>            
                    <NavLink to='/addproduct'>Add Product</NavLink>
                    <NavLink to='/mycart'>My Cart</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>
                <div className="flex items-center gap-2 md:mr-10">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img src="https://i.ibb.co/b2c6J9M/wepik-export-20231013215817-C2-TE.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    <button className="btn hover:bg-red-900 border-none bg-gradient-to-l from-lightRed to-darkRed text-white normal-case md:btn-md btn-sm">Log Out</button>
                </div>
            </nav>
            <div className="md:hidden fixed w-full top-0 text-white menu">
                <Menu className="bg-black text-white ">
                    <NavLink className="menu-item" to='/'>Home</NavLink>            
                    <NavLink className="menu-item" to='/addproduct'>Add Product</NavLink>
                    <NavLink className="menu-item" to='/mycart'>My Cart</NavLink>
                    <NavLink className="menu-item" to='/contact'>contact</NavLink>
                </Menu>
            </div>
        </div>


    );
};

export default Navbar;