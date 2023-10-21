import Brands from "../../components/Brands/Brands";
import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";
import Testimonial from "../../components/Testimonial/Testimonial";


const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero></Hero>
            <Brands></Brands>
            <Features></Features>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;