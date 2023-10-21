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

AOS.init();

const BrandItems = () => {

    const products = useLoaderData();
    
    const {brand} = useParams();
    console.log(brand);
    const navigate = useNavigate();


    console.log(products);

    return (
        <div className="mt-36 w-screen">
            {
                products.length ? 
                <div className=" max-w-6xl md:mx-auto mx-3">
                    <h1 className="text-5xl font-bold tracking-widest mt-10 text-center" data-aos='zoom-in-down'>{brand.toUpperCase()}</h1>
                    <Swiper
                        spaceBetween={0}
                        effect={'fade'}
                        navigation={false}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[EffectFade, Navigation, Pagination]}
                        className="mySwiper mb-24"
                    >
                        {products.map (product => <SwiperSlide key='product._id' className="advertisement">
                            <img src={product.image}/>
                            <div className="absolute w-full h-full hover:bg-black/50 inset-0">
                            <h3 onClick={()=>navigate(`/product/${product._id}`)} className='text-center text-white font-semibold text-4xl p-2 absolute bottom-10 translate-x-1/2 right-1/2 hover:scale-105 cursor-pointer hover:border'>{product.name}</h3>
                            </div>
                            </SwiperSlide>) 
                        }
                    </Swiper>
                    
                    <div className="flex flex-wrap justify-center gap-20 mb-36">
                        { products.map(product => <div key={product._id} className="card card-body p-5 border w-96 flex flex-col justify-between" data-aos="slide-up">
                                <img src={product.image} alt="" className=" h-full"/>
                                <h2 className="card-title">
                                {product.name}
                                <div className="badge badge-outline text-xs h-fit text-center">{product.brandName.toUpperCase()}</div>
                                </h2>
                                <small >{product.type}</small>
                                <h2 className="font-bold mt-3">Price: ${product.price}</h2>
                                <div className="text-xl text-orange">
                                <Rating
                                fractions={4}
                                initialRating={product.rating}
                                quiet={true}
                                fullSymbol={<BsStarFill></BsStarFill>}
                                emptySymbol={<BsStar></BsStar>}
                                
                                />
                                </div>
                                <div className="flex justify-between mt-5">  
                                    <button onClick={()=>navigate(`/product/${product._id}`)} className="btn hover:bg-red-900 border-none bg-gradient-to-bl from-lightRed to-darkRed text-white normal-case md:btn-md btn-sm">Details</button>
                                    <button onClick={()=>navigate(`/update/${product._id}`)} className="btn hover:bg-red-900 border-none bg-gradient-to-bl from-lightRed to-darkRed text-white normal-case md:btn-md btn-sm">Update</button>
                                </div>
                            </div> )
                        }
                    </div>
                </div>
                :
                <div className="flex justify-center flex-col items-center mx-5 mb-10">
                    <img src="https://i.ibb.co/wY50zCF/5a28c52a4608b4-9337198515126213542869.png" alt="" className="h-96 w-fit"/>
                    <h3 className="text-3xl tracking-wider font-semibold">There is no cars available for {brand}. </h3>
                    <Link to='/'><button className="btn px-7 mt-10 bg-gradient-to-bl from-lightRed to-darkRed text-white normal-case ">Back to Home</button></Link>
                </div>
            }
        </div>
    );
};

export default BrandItems;