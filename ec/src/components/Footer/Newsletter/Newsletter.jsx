import "./Newsletter.scss";
import {FaFacebook,
        FaTwitter,
        FaInstagram,
        FaLinkedinIn,
} from "react-icons/fa"

const Newsletter = () => {
    return <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">Newsletter</span>
            <span className="big-text">Sign Up for latest update and offers</span>
            <div className="form">
                <input type="text" placeholder="Emaill Address"/>
                <button>Subscribe</button>
            </div>
            <div className="text">will be used in accrordance with our Private Policy</div>
            <div className="social-icons">
                <div className="icon">
                    <FaFacebook size={14}/>
                </div>
                <div className="icon">
                <FaTwitter size={14}/>
                </div>
                <div className="icon">
                <FaInstagram size={14}/>
                </div>
                <div className="icon">
                <FaLinkedinIn size={14}/>
                </div>
            </div>
            </div>
            </div>;
};

export default Newsletter;
