import {
    Link
} from "react-router-dom";
import './nav.css';
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";

const Foot = () => {
    return (
        <div className="foot">
            <footer>
                <div className="rfoot">
                    <h2>Contact Us</h2>
                    <span className="adrs">
                        <h3><IoLocationOutline />&nbsp;Address</h3>
                        CliniPedia <br />
                        infopark,Kochi,Kerala
                    </span><br />
                    <span className="phone">
                        <h3><FiPhone />&nbsp;Phone Number</h3>
                        +91 6660004411
                    </span>
                    <span className="sprt"><h3><HiOutlineMail />&nbsp;Genenral Support</h3>
                    support@clinipedia.org</span>
                </div>
                <div className="lfoot">
                    <h1>CliniPedia</h1>
                    <span className="footlinks">
                        <span className="links"><Link to="/">Home</Link></span>
                        <span className="links"><Link to="/services">Services</Link></span>
                        <span className="links"><Link to="/aboutus">About US</Link></span>
                        <span className="loginli"><Link to="/Login">Login</Link></span>
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default Foot;