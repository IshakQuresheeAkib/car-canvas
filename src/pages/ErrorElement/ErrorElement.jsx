import { Link, } from 'react-router-dom';
import './error.css'

const ErrorElement = () => {

    

    return (
        <div>
           <section className='body'>
    <div className="wrap">
        <video className="video" poster="https://knife.media/wp-content/themes/knife/assets/images/poster-error.jpg" autoPlay loop muted>
            <source src="https://knife.media/wp-content/themes/knife/assets/video/video-error.mp4" type="video/mp4"/>
        </video>

        <div className="message">
            <h1>Nothing found</h1>
            <p>Better go to the <Link tp='/'>main page</Link><br/> and explore our  cars!</p>
        </div>
    </div>
</section>
        </div>
    );
};

export default ErrorElement;