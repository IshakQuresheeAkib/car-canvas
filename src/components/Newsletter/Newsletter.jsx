import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import './newsletter.css'

const Newsletter = () => {
    return (
        <div className="my-36 h-60 mx-5 xl:mx-auto max-w-6xl shadow-lg flex justify-between items-center md:pl-10 pl-3 rounded-3xl ">
             <div>
             <h3 className='font-bold text-2xl mb-3 border-l-8 pl-4 border-darkRed md:w-11/12 xl:w-3/4'>Stay Up To Date On Our Discounts and Special Offers</h3>
             <p className='font-light mb-4 w-11/12 xl:text-base text-xs text-black/70'>Subscribe to the newsletter and be the first to recieve profitable offers</p>
             <div>
                <input type="email"  name="email"  className="w-1/2 rounded-lg border-b-4 h-11 p-4 text-sm text-black/30 font-medium shadow-sm md:mr-10 mr-3" placeholder="Enter email" required />
                <PrimaryBtn>Subscribe</PrimaryBtn>
             </div>
             </div>
             <img className='xl:w-80 w-60 md:block hidden' src="https://i.ibb.co/VV5Jhy2/Red-And-Black-Modern-Car-Insurance-Instagraaam-Post.png" alt="" />
        </div>
    )}
export default Newsletter;