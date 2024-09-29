import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram,faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <>
    <div className="master-footer">
        <div className="details-div">
        <div className="details">
            <div className="details-inside">
                <h5>INFORMATION
                <div></div>
                </h5>
                
                <ul>
                    <li>Details</li>
                    <li>Terms & Conditions</li>
                    <li>Contact</li>
                    <li>Returns</li>
                </ul>
            </div>
            <div className="details-inside">
                <h5>MY ACCOUNT
                <div></div>
                </h5>                
                <ul>
                    <li>MY Account</li>
                    <li>My account</li>
                    <li>Preffered</li>
                    <li>Privacy Policy</li>
                    <li>Frequently Questions</li>
                    <li>History</li>
                </ul>
            </div>
            <div className="details-inside">
                <h5>CATEGORIES
                <div></div>
                </h5>
                
                <ul>
                    <li>Car</li>
                    <li>Healt</li>
                    <li>Bike</li>
                    <li>Theft</li>
                    <li>view more</li>
                </ul>
            </div>
            <div className="details-inside">
                <h5>ABOUT US
                <div></div>
                </h5>
                
                <ul>
                    <li>We are a dedicated team focused on transforming insurance accessibility and trust through AI, simplifying policy selection and enhancing consumer understanding.</li>
                    <li>Address: Jais, Raebareily Email:200OK@gmail.com</li>
                </ul>
            </div>
        </div>
        </div>
        <div className="follow-subscribe">
            <div className="follow-subscribe-div">
            <div className="follow">
                <h5>FOLLOW US</h5>
                <p>
                <FontAwesomeIcon className="follow-icon" icon={faFacebookF} />
                <FontAwesomeIcon className="follow-icon" icon={faTwitter} />
                <FontAwesomeIcon className="follow-icon" icon={faInstagram} />
                <FontAwesomeIcon className="follow-icon" icon={faLinkedinIn} />
                </p>
            </div>
            <div className="subscribe">
            <h5>DON'T MISS OUT ON THE LATEST</h5>
            <input type="email" placeholder="Your email address..." />
            <button>SUBSCRIBE!</button>
            </div>
        </div>
        </div>
        <div className="copyright-visa">
            <div className="copyright-visa-div">
                <div className="copyright">
                    <p>© 2024 200OK. MADE WITH  <FontAwesomeIcon icon={faHeart} color="red"/>  BY 200OK</p>
                </div>
                <div className="visa">
                    <p>Here logos of companies providing policies will be present</p>

                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Footer