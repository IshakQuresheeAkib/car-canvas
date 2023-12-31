import { Helmet } from "react-helmet-async";
import Brands from "../../components/Brands/Brands";
import Features from "../../components/Features/Features";
import Hero from "../../components/Hero/Hero";
import Newsletter from "../../components/Newsletter/Newsletter";
import Services from "../../components/Services/Services";


const Home = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Car Canvas</title>
            </Helmet>
            <Hero></Hero>
            <Brands></Brands>
            <Features></Features>
            <Services></Services>
            <Newsletter></Newsletter>
            
        </div>
    );
};

export default Home;