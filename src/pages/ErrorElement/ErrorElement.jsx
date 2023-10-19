import { useNavigate } from 'react-router-dom';


const ErrorElement = () => {

    const navigate = useNavigate();

    return (
        <div>
           <section className="errorPage">
        <div className="errorPage__text ">
            <div>
            <h3>404</h3>
            </div>
            <button onClick={()=>navigate('/')} className="errorPage__button">Back to home</button>
        </div>
        <span className="errorPage__templeweed-container"><img src="https://i.ibb.co/mTg87G2/tembleweed.png" className="errorPage__tembleweed"/></span>
        <div className="errorPage__terrain"></div>
    </section>
        </div>
    );
};

export default ErrorElement;