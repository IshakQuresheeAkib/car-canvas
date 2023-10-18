
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './brands.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Brands = () => {
    return (
        <div className="my-20">
            <h1 className="text-4xl text-center">Discover</h1>
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
        <SwiperSlide className='relative'>
          <div className='absolute hover:bg-gradient-to-t from-darkRed to-black/60 w-full h-full item'>
          <h3 className='text-center text-white font-semibold mb-4 text-4xl absolute bottom-2'>Ferrari</h3></div>
          <img src="https://i.ibb.co/SdBfmFS/fernando-hernandez-2k-F1y-Hd39-E-unsplash-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/f0nKSKt/jeff-tumale-Az-X4h-RFGCe-E-unsplash-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/b1GxxLF/jack-lucas-smith-U3-Ml-Yo-Ra-Lg0-unsplash-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/FwJmQfD/kristin-wilson-al-EMgp-X6oo8-unsplash-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/bRsPB0t/hadi-yazdi-aznaveh-y-J2cq8-F-ZS0-unsplash-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/L6SkQYf/alexander-shatov-Cys3-W7-MXDU-unsplash-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/pJBJLSc/dan-smedley-5-BCs-H-9-R8go-unsplash-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Y4g0LPL/matheus-frazao-RF3a-SRWd5z8-unsplash-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/64yxgHg/chris-kursikowski-GADTSk-E0x-Ks-unsplash.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
        </div>
    );
};

export default Brands;