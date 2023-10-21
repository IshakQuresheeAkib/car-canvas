import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './brands.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useNavigate } from 'react-router-dom';


AOS.init();
AOS.init({
    duration: 3000, 
});
AOS.refresh();


const Brands = () => {

  const navigate = useNavigate();

  const handleBrand = (e) => {
    const text =  e.target.textContent.toLowerCase();
    console.log(text);    
    navigate(`/products/${text}`)        
  }

    return (
        <div className="my-20">
            <h1 className="text-4xl text-center font-semibold" data-aos='zoom-out-down' data-aos-delay="500"> The Pinnacle <br /> of <br /><span className='text-5xl bg-gradient-to-bl bg-clip-text text-transparent from-darkRed  to-lightRed font-extrabold'>Auto Brands</span></h1>
            <hr className='w-48 h-1 mt-2 border-none rounded-3xl mx-auto bg-gradient-to-bl from-lightRed '/>
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
        <div className='absolute hover:bg-gradient-to-t from-darkRed to-black/60 w-full h-full' >
          <h3 onClick={handleBrand} className='text-center text-white font-semibold text-4xl p-2 absolute bottom-10 translate-x-1/2 right-1/2 hover:scale-105 cursor-pointer hover:border'>PORSCHE</h3></div>
          <img src="https://i.ibb.co/b1GxxLF/jack-lucas-smith-U3-Ml-Yo-Ra-Lg0-unsplash-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <div className='absolute hover:bg-gradient-to-t from-darkRed to-black/60 w-full h-full' >
          <h3 onClick={handleBrand} className='text-center text-white font-semibold text-4xl p-2 absolute bottom-10 translate-x-1/2 right-1/2 hover:scale-105 cursor-pointer hover:border'>ROLLS ROYCE</h3></div>
          <img src="https://i.ibb.co/FwJmQfD/kristin-wilson-al-EMgp-X6oo8-unsplash-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <div className='absolute hover:bg-gradient-to-t from-darkRed to-black/60 w-full h-full' >
                <h3 onClick={handleBrand} className='text-center text-white font-semibold text-4xl p-2 absolute bottom-10 translate-x-1/2 right-1/2 hover:scale-105 cursor-pointer hover:border'>BMW</h3>
            </div>
          <img src="https://i.ibb.co/bRsPB0t/hadi-yazdi-aznaveh-y-J2cq8-F-ZS0-unsplash-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
        <div className='absolute hover:bg-gradient-to-t from-darkRed to-black/60 w-full h-full' >
          <h3 onClick={handleBrand} className='text-center text-white font-semibold text-4xl p-2 absolute bottom-10 translate-x-1/2 right-1/2 hover:scale-105 cursor-pointer hover:border'>JAGUAR</h3></div>
          <img src="https://i.ibb.co/f0nKSKt/jeff-tumale-Az-X4h-RFGCe-E-unsplash-1.jpg" />
        </SwiperSlide>
        {/* <SwiperSlide>
            <div className='absolute hover:bg-gradient-to-t from-darkRed to-black/60 w-full h-full' >
                <h3 onClick={handleBrand} className='text-center text-white font-semibold text-4xl p-2 absolute bottom-10 translate-x-1/2 right-1/2 hover:scale-105 cursor-pointer hover:border'>TESLA</h3>
            </div>
          <img src="https://i.ibb.co/L6SkQYf/alexander-shatov-Cys3-W7-MXDU-unsplash-1.jpg" />
        </SwiperSlide> */}
        <SwiperSlide>
            <div className='absolute hover:bg-gradient-to-t from-darkRed to-black/60 w-full h-full' >
                <h3 onClick={handleBrand} className='text-center text-white font-semibold text-4xl p-2 absolute bottom-10 translate-x-1/2 right-1/2 hover:scale-105 cursor-pointer hover:border'>FORD</h3>
            </div>
          <img src="https://i.ibb.co/pJBJLSc/dan-smedley-5-BCs-H-9-R8go-unsplash-1.jpg" />
        </SwiperSlide>
        {/* <SwiperSlide>
            <div className='absolute hover:bg-gradient-to-t from-darkRed to-black/60 w-full h-full' >
                <h3 onClick={handleBrand} className='text-center text-white font-semibold text-4xl p-2 absolute bottom-10 translate-x-1/2 right-1/2 hover:scale-105 cursor-pointer hover:border'>MUSTANG</h3>
            </div>
          <img src="https://i.ibb.co/Y4g0LPL/matheus-frazao-RF3a-SRWd5z8-unsplash-1.jpg" />
        </SwiperSlide> */}
        <SwiperSlide>
            <div className='absolute hover:bg-gradient-to-t from-darkRed to-black/60 w-full h-full' >
                <h3 onClick={handleBrand} className='text-center text-white font-semibold text-[30px] p-2 absolute bottom-10 translate-x-1/2 right-1/2 hover:scale-105 cursor-pointer hover:border'>LAMBORGHINI</h3>
            </div>
          <img src="https://i.ibb.co/64yxgHg/chris-kursikowski-GADTSk-E0x-Ks-unsplash.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
        </div>
    );
};

export default Brands;