import Navbar from "../../components/Navbar/Navbar";
import './hero.css'

const Hero = () => {
    return (
        <div className="">                       
            <div className="sm:bg-[url('https://i.ibb.co/LvRMLCY/blue-jeep-photo-shooting-sunset-1.jpg')] bg-[url('https://i.ibb.co/k2tJJ5J/blue-jeep-photo-shooting-sunset-1.jpg')] w-screen h-screen text-white bg-cover bg-no-repeat">
                <div className=" bg-gradient-to-b b from-black/90 w-full h-full">
                
                <div className="xl:text-6xl text-5xl text-white flex items-center h-screen w-screen pl-5">
                    <div className="md:mt-20 2xl:ml-36">
                        <p className="md:text-6xl text-4xl font-semibold mb-4 w-fit">Where Elegance <br /> Meets the Road!</p>
                        <p className="md:text-sm text-xs text-white/80 sm:w-1/2 xl:w-1/2 mb-5">Embark on a Journey of Personalization, Uncover the Ideal Vehicle, and Drive Away in Your Perfectly Tailored Dream Car.</p>
                    </div>
                </div>
                </div>
            </div>
            <Navbar></Navbar> 
        </div>
    );
};
 
export default Hero;