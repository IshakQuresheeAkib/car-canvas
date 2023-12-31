import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './brands.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useNavigate } from 'react-router-dom';
import ColorTitle from '../ColorTitle/ColorTitle';
import { useEffect } from 'react';




const Brands = () => {

  useEffect(()=>{
    
    AOS.init();
    AOS.init({
        duration: 1200, 
    });
    AOS.refresh();
      },[])

  const navigate = useNavigate();

  const handleBrand = (e) => {
    const text =  e.target.textContent.toLowerCase();
    console.log(text);    
    navigate(`/products/${text}`)        
  }

    return (
        <div className="my-20">
            <h1 className="xl:text-6xl text-5xl text-center font-semibold mb-7" data-aos='zoom-out-down' data-aos-delay="500"> The Pinnacle <br /> of <br />
            <ColorTitle>Auto Brands</ColorTitle>
            </h1>
            <p className='text-sm text-center 2xl:w-1/3 md:w-1/2 mx-auto text-black/70'>Explore Cars by Famous Brands! Navigate Through a Variety of Cars, All from the Brands You Adore, Making Your Car Search Enjoyable and Personalized.</p>
            {/* <!-- Slider main container --> */}
            <>
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}            
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper "
        >
        <SwiperSlide>
        <div className='absolute z-0 hover:bg-gradient-to-t from-darkRed to-black/60 w-full h-full inset-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 cursor-auto' >
            <h3 onClick={handleBrand} className='text-center text-white font-semibold text-4xl p-2 absolute bottom-10 translate-x-1/2 right-1/2 cursor-pointer'>PORSCHE</h3>
          </div>
          <img className=' z-50' src="https://i.ibb.co/b1GxxLF/jack-lucas-smith-U3-Ml-Yo-Ra-Lg0-unsplash-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <div className='absolute z-0 hover:bg-gradient-to-t from-darkRed to-black/60 w-full h-full inset-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 cursor-auto' >
          <h3 onClick={handleBrand} className='text-center text-white font-semibold text-4xl p-2 absolute bottom-10 translate-x-1/2 right-1/2 cursor-pointer'>ROLLS ROYCE</h3></div>
          <img src="https://i.ibb.co/FwJmQfD/kristin-wilson-al-EMgp-X6oo8-unsplash-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <div className='absolute z-0 hover:bg-gradient-to-t from-darkRed to-black/60 w-full h-full inset-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 cursor-auto' >
                <h3 onClick={handleBrand} className='text-center text-white font-semibold text-4xl p-2 absolute bottom-10 translate-x-1/2 right-1/2 cursor-pointer'>BMW</h3>
            </div>
          <img src="https://i.ibb.co/bRsPB0t/hadi-yazdi-aznaveh-y-J2cq8-F-ZS0-unsplash-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <div className='absolute z-0 hover:bg-gradient-to-t from-darkRed to-black/60 w-full h-full inset-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 cursor-auto' >
          <h3 onClick={handleBrand} className='text-center text-white font-semibold text-4xl p-2 absolute bottom-10 translate-x-1/2 right-1/2 cursor-pointer'>JAGUAR</h3></div>
          <img src="https://i.ibb.co/f0nKSKt/jeff-tumale-Az-X4h-RFGCe-E-unsplash-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <div className='absolute z-0 hover:bg-gradient-to-t from-darkRed to-black/60 w-full h-full inset-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 cursor-auto' >
                <h3 onClick={handleBrand} className='text-center text-white font-semibold text-4xl p-2 absolute bottom-10 translate-x-1/2 right-1/2 cursor-pointer'>FORD</h3>
            </div>
          <img src="https://i.ibb.co/pJBJLSc/dan-smedley-5-BCs-H-9-R8go-unsplash-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <div className='absolute z-0 hover:bg-gradient-to-t from-darkRed to-black/60 w-full h-full inset-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 cursor-auto' >
                <h3 onClick={handleBrand} className='text-center text-white font-semibold text-4xl ml-4 absolute bottom-10 translate-x-1/2 right-1/2 cursor-pointer'>LAMBORGHINI</h3>
            </div>
          <img src="https://i.ibb.co/64yxgHg/chris-kursikowski-GADTSk-E0x-Ks-unsplash.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
        </div>
    );
};

export default Brands;