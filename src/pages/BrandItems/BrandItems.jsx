import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import './items.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Rating from "react-rating";
import { BsStarFill } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";
import ColorTitle from '../../components/ColorTitle/ColorTitle'
import PrimaryBtn from "../../components/PrimaryBtn/PrimaryBtn";

AOS.init();

const BrandItems = () => {

    const products = useLoaderData();
    const {brand} = useParams();
    const navigate = useNavigate();

    return (
        <div className="mt-36 w-screen">
            <Helmet>
                <title>Car Canvas|{brand?.toUpperCase()}</title>
            </Helmet>
            <div className="mx-auto w-fit" data-aos='zoom-in-down'>
                    <ColorTitle>{brand?.toUpperCase()}</ColorTitle>
                    </div>
            {
                products.length ? 
                <div className="max-w-6xl md:mx-auto">
                    <Swiper
                        spaceBetween={0}
                        effect={'fade'}
                        navigation={false}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[EffectFade, Navigation, Pagination]}
                        className="mySwiper mb-24 sm:h-full h-[500px] w-full object-cover"
                    >
                        
                        {products.map (product => <SwiperSlide key={product._id} className="advertisement">
                            <img src={product.image} className=" "/>
                            <div className="absolute w-full hover:bg-black/50 inset-0 cursor-grab ">
                            <h3 onClick={()=>navigate(`/product/${product._id}`)} className='text-center text-white font-semibold text-4xl p-2 absolute bottom-10 translate-x-1/2 right-1/2 hover:scale-105 cursor-pointer hover:border'>{product.name}</h3>
                            </div>
                            </SwiperSlide>) 
                        }
                    </Swiper>
                    
                    <div className="flex flex-wrap justify-center gap-20 mb-36 mx-3">
                        { products.map(product => <div key={product._id} className="lg:w-1/3 h-80 flex flex-col justify-between" data-aos="slide-up">
                                <img className="rounded-t-lg w-96 h-44" src={product.image} alt="product image"/>
                                <div className="px-5 pb-5 shadow-xl rounded-b-lg hover:shadow-none border border-black/10">
                                        <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{product.name}</h3>
                                        <div className="flex items-center mt-2.5 mb-5 ">
                                        <div className="text-xl text-red">
                                            <Rating
                                            fractions={4}
                                            initialRating={product.rating}
                                            quiet={true}
                                            fullSymbol={<BsStarFill></BsStarFill>}
                                            emptySymbol={<BsStar></BsStar>}
                                            readonly
                                            />
                                        </div>
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{product.rating}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-3xl font-bold text-black/80 dark:text-white">${product.price}</span>
                                            <Link to={`/product/${product._id}`}><PrimaryBtn>Details</PrimaryBtn></Link>
                                        </div>
                                </div>
                            </div> )
                        }
                    </div>
                </div>
                :
                <div className="flex justify-center flex-col items-center mx-5 mb-10 mt-20">
                    <img src="https://i.ibb.co/wY50zCF/5a28c52a4608b4-9337198515126213542869.png" alt="" className="h-96 w-fit"/>
                    <h3 className="text-3xl tracking-wider font-semibold mb-7">There is no cars available for {brand}. </h3>
                    <Link to='/'><PrimaryBtn>Back to Home</PrimaryBtn></Link>
                </div>
            }
        </div>
    );
};

export default BrandItems;

