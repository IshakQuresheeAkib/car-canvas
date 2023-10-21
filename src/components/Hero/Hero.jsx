import Navbar from "../../components/Navbar/Navbar";
import './hero.css'

const Hero = () => {
    return (
        <div className="">                       
            <div className="md:bg-[url('https://i.ibb.co/Mf4bKDP/peter-broomfield-m3m-ln-R90u-M-unsplash-1.jpg')] bg-[url('https://i.ibb.co/smbnvN8/olav-tvedt-o-Va-YMg-BMbs-unsplash-1.jpg')] w-screen h-screen  text-white bg-cover bg-no-repeat kenburns-bottom-right scroll-m-16 ">
            <div className=" bg-gradient-to-b b from-black/90 w-full h-full z-0"></div>
            </div>
            <div className="text-5xl text-white absolute translate-y-1/2 md:top-[42%] top-[10%] md:left-16 md:text-left text-center bg-fixed">
                <p className="md:text-5xl text-4xl font-semibold mb-6 focus-in-contract md:w-1/2">Where Elegance Meets the Road!</p>
                <button className="btn px-7 rounded bg-gradient-to-bl from-lightRed to-darkRed text-white normal-case border-none">Explore</button>
            </div>
            <Navbar></Navbar> 
        </div>
    );
};

export default Hero;