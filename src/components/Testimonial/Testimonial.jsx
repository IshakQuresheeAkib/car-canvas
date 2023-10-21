import './testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from 'react-icons/fa';import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


AOS.init();




const Testimonial = () => {

    useEffect(()=>{
        AOS.refresh();
    },[])
    

    return (                                            
        <div className='relative '>
            <div className=' bg-[url(https://i.ibb.co/Fwdt0sS/linkedin-sales-solutions-YDVdprpg-Hv4-unsplash.jpg)] bg-fixed md:h-[90vh] min-h-screen bg-cover bg-no-repeat'></div>
            <div className='absolute w-full h-full bg-black/70 inset-0 backdrop-blur-sm'>
                <div className='flex md:flex-row flex-col md:mx-20 items-center justify-center m-5'>
                    <div className='md:w-1/2'>
                        <h1 className='md:text-5xl text-3xl tracking-wider text-white' data-aos='slide-right'>{`Don't just take our word for it...Read reviews from our customers!`}</h1>
                    </div>
                    <div className='w-1/2 md:block hidden' data-aos='slide-left'>
                        <Swiper
                        pagination={{
                        dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className=""
                        >
                        <SwiperSlide className="testimonial">
                            <FaQuoteLeft className='text-5xl text-white mb-5'></FaQuoteLeft>
                            <div className='text-white px-10 md:md-36'>
                                <div className="w-28 h-28 mx-auto md:absolute bottom-0 left-36 md:translate-x-full">
                                    <img src="https://i.ibb.co/xfLVTwQ/mitchell-luo-CMng5-Bz-Pv1o-unsplash.jpg" alt="" className='rounded-full'/>
                                </div>
                                <h2 className='mt-7'>Abil Qureshee</h2>                       
                                <p className="text-center mb-5 text-sm" >Softwere Engineer,Toptel Private Limited.</p>
                                <p className="text-xs md:w-full md:mb-28 w-1/3 mx-auto">
                                {`I had the pleasure of test driving one of Car Canvas's cars, and I was truly impressed. The vehicle's performance and handling were exceptional. It's clear that Car Canvas is dedicated to delivering high-quality cars."`}
                                </p>
                            </div>                            
                        </SwiperSlide>  
                        <SwiperSlide className="testimonial">
                            <FaQuoteLeft className='text-5xl text-white mb-5'></FaQuoteLeft>
                            <div className='text-white px-10 md:md-36'>
                                <div className="w-28 h-28 mx-auto md:absolute bottom-0 left-36 md:translate-x-full"  >
                                    <img src="https://i.ibb.co/b2c6J9M/wepik-export-20231013215817-C2-TE.jpg" alt="" className='rounded-full'/>
                                </div>
                                <h2 className='mt-7'>John Mitchell</h2>                       
                                <p className="text-center mb-5 text-sm" >Automotive Engineer,AutoGenius Limited.</p>
                                <p className="text-xs md:w-full md:mb-28 w-1/3 mx-auto">
                                {`As an automotive enthusiast, I've had the opportunity to drive a wide range of vehicles. I recently purchased a car from AutoGenius, and it exceeded my expectations. The attention to detail and the overall driving experience are outstanding.`}
                                </p>
                            </div>                           
                        </SwiperSlide>                            
                        <SwiperSlide className="testimonial">
                            <FaQuoteLeft className='text-5xl text-white mb-5'></FaQuoteLeft>
                            <div className='text-white px-10 md:md-36'>
                                <div className="w-28 h-28 mx-auto md:absolute bottom-0 left-36 md:translate-x-full"  >
                                    <img src="https://i.ibb.co/hBHdZ5w/christian-buehner-DIt-Ylc26z-VI-unsplash.jpg" alt="" className='rounded-full'/>
                                </div>
                                <h2 className='mt-7'>Luiz Dias</h2>                       
                                <p className="text-center mb-5 text-sm" >Automotive Blogger, Velocity Autos. </p>
                                <p className="text-xs md:w-full md:mb-28 w-1/3 mx-auto">
                                {`I had the pleasure of test driving one of Car Canvas's cars, and I was truly impressed. The vehicle's performance and handling were exceptional. It's clear that Car Canvas is dedicated to delivering high-quality cars."`}
                                </p>
                            </div>
                            
                        </SwiperSlide>                            
                        <SwiperSlide className="testimonial">
                            <FaQuoteLeft className='text-5xl text-white mb-5'></FaQuoteLeft>
                            <div className='text-white px-10 md:md-36 '>
                                <div className="w-28 h-28 mx-auto md:absolute bottom-0 left-36 md:translate-x-full"  >
                                    <img src="https://i.ibb.co/ZgD2L3t/redd-f-pz-OUnvx9c1-E-unsplash.jpg" alt="" className='rounded-full'/>
                                </div>
                                <h2 className='mt-7'>Soun Wing</h2>                       
                                <p className="text-center mb-5 text-sm" >Footballer,Japan.</p>
                                <p className="text-xs md:w-full md:mb-28 w-1/3 mx-auto">
                                {`I've reviewed cars from various manufacturers, and Speedy Autos never disappoints. Their attention to detail and dedication to user experience make their cars a standout choice. I'm always excited to explore their latest models`}
                                </p>
                            </div>
                            
                        </SwiperSlide>                            
                        </Swiper>
                    </div>
                    <div className='md:hidden'>
                        <div className='flex flex-col items-center justify-center bg-white text-black text-center h-72 mt-20 rounded-xl'>
                            <div className="w-28 h-28 mx-auto "  >
                                <img src="https://i.ibb.co/xfLVTwQ/mitchell-luo-CMng5-Bz-Pv1o-unsplash.jpg" alt="" className='rounded-full'/>
                            </div>
                            <h2 className='mt-7'>Abil Qureshee</h2>                       
                            <p className="text-center mb-5 text-sm" >Softwere Engineer,Toptel Private Limited.</p>
                            <p className="text-xs">
                            {`I had the pleasure of test driving one of Car Canvas's cars, and I was truly impressed. The vehicle's performance and handling were exceptional. It's clear that Car Canvas is dedicated to delivering high-quality cars.`}
                            </p>                      
                        </div>  
                    </div>
                </div>            
            </div>
        </div>
    );
};

export default Testimonial;

/**
 * 
 *                  <div className="relative max-w-md mx-auto flex flex-col py-6 px-8 bg-white rounded-lg shadow-lg">
                        <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreh9Fwfj6mP6s9CINDCpfUXmi6OrRXJoD8fFI7BV01mzbbC1FhW5MLGQZYgH9PJ8UhC0&usqp=CAU"
                        alt=""
                        className="absolute rounded-full w-14 h-14 -left-6 -top-6"
                        />
                        <p className="text-[#5E6282]">
                            “On the Windows talking painted pasture yet its express parties
                            use. Sure last upon he same as knew next. Of believed or
                            diverted no.”
                        </p>
                        <p className="mt-6 mb-2">Mike taylor</p>
                        <p className="text-sm">USA, CA</p>
                    </div>
 * 

                    <div className="title text-5xl w-28 h-28 mx-auto"  data-swiper-parallax="-300">
                        <img src="https://i.ibb.co/xfLVTwQ/mitchell-luo-CMng5-Bz-Pv1o-unsplash.jpg" alt="" className='rounded-full'/>
                    </div>
                    <div className="text-center my-2" data-swiper-parallax="-200">
                        Abil Qureshee
                    </div>
                    <div className="text-center mb-5" data-swiper-parallax="-200">
                        Softwere Engineer,Toptel Private Limited.
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                        {`"I had the pleasure of test driving one of [Your Company's] cars, and I was truly impressed. The vehicle's performance and handling were exceptional. It's clear that [Your Company] is dedicated to delivering high-quality cars."`}
                        </p>
                    </div>

 */