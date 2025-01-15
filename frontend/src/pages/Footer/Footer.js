import React from 'react'
import {FiFacebook, AiOutlineInstagram, IoLogoYoutube} from 'react-icons/all';
import { Input,Stack } from '@chakra-ui/react'
import './footercss.css'
import { Link } from 'react-router-dom';
import { FaTiktok } from "react-icons/fa6";



const Footer = () => {
    return (
        <div className="footerCmp">
            <footer>
                <div className="footerCategorie">
                    <h1>Categories</h1>
                    <ul>
                        <li><Link to = '/shop/?cg=Dekstop'>Dekstop</Link></li>
                        <li><Link to = '/shop/?cg=Laptop'>Laptops</Link></li>
                        <li><Link to = '/shop/?cg=Accessories'>Accessories</Link></li>
                        <li><Link to = '/shop/?cg=Used'>Used Parts</Link></li>
                    </ul>
                </div>

      

                <div className="footerGetInTouch">
                    <h1>Reach Us</h1>
                    <ul>
                        <p>Any questions? Let us know in store at Kurunegale Tel:0371234567</p>
                        <li className="footerIcons">
                            <FiFacebook size="25" />
                        </li>
                        <li className="footerIcons">  
                            < FaTiktok size="25" />
                        </li>
                        <li className="footerIcons">
                            <IoLogoYoutube size="25"/>
                        </li>
                    </ul>
                </div>

                <div className="footerNews">
                    <h1>Contact Us</h1>
                    <ul>
                        <li>
                        0371234567
                        </li>
                        <li>
                        MC Plaza, 12, 2nd Floor, Kurunegala 60000
                        </li>
                        <li>
                        info@Mastertech.lk
                        </li>
                    </ul>
                </div>
                <div className="paragraphFooter"><p>Copyright ©2024 All rights reserved by MasterTech</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer;
