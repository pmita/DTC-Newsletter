import React from 'react'
import {FaLinkedin, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-6 col-sm-12 footer-text text-center">
                        <p>&copy; {new Date().getFullYear().toString()} DXC Technology Company. All rights reserved </p>
                    </div>
                    <div className="col-lg-6 col-sm-12 text-center">
                        <a href="https://www.linkedin.com/company/dxctechnology/" rel="noopener noreferrer" target="_blank"><FaLinkedin className="footer-text socials"/></a>
                        <a href="https://www.facebook.com/DXCTechnology/" rel="noopener noreferrer" target="_blank"><FaFacebook className="footer-text socials"/></a>
                        <a href="https://www.twitter.com/DXCTechnology?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" rel="noopener noreferrer" target="_blank"><FaTwitter className="footer-text socials"/></a>
                        <a href="https://www.instagram.com/dxctechnologyuki/?hl=en" rel="noopener noreferrer" target="_blank"><FaInstagram className="footer-text socials"/></a>
                    </div> 
                </div>

                <div className="row mx-auto footer-text text-center">
                    <div className="col-lg-6 col-sm-12 text-center">
                        <p className="footer-text-white">
                                For any health & safety issues for the site, please email your query to: <a href="mailto:EHS.Newcastle@dxc.com"><span className="footer-text">Here</span></a>
                        </p>
                    </div>
                    <div className="col-lg-6 col-sm-12 text-center">
                        <p className="footer-text-white">New focus area is now in operation please book via: <a href="mailto:kharrison23@dxc.com "><span className="footer-text">Here</span></a>
                        </p>
                    </div>            
                </div>
                
            </div>
        </footer>
    )
}
