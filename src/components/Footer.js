import React from 'react'
import {Link} from 'react-router-dom'
import * as Icon from 'react-feather'
import Logo from './Logo/Logo';

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-area bg-f7fafd">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget pl-5">
                               
                                <h3>Muhammad Nazam</h3>
                                 
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Pages</h3>
                                <ul className="list">
                                    <li>
                                        <Link to="/about">
                                            About Me
                                        </Link>
                                    </li>
                                   
                                    <li>
                                        <Link to="/features">
                                            Recent Work
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/pricing">
                                            Latest News
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Address</h3>
                                
                                <ul className="footer-contact-info">
                                    <li> 
                                        <Icon.MapPin />
                                        Northridge, Los Angeles, CA, 91324, USA
                                    </li>
                                    <li>
                                        <Icon.Mail />
                                        Email: <Link to="#">nazamzahoor@yahoo.com</Link>
                                    </li>
                                    <li> 
                                        <Icon.PhoneCall />
                                        Phone: <Link to="#">+ (504) 615 8098</Link>
                                    </li>
                                </ul>
                                <ul className="social-links">
                                    <li>
                                        <Link to="#" className="facebook">
                                         
                                                <Icon.Facebook />
                                        
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="twitter">
                                            <Icon.Twitter />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="instagram">
                                            <Icon.Instagram />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="linkedin">
                                            <Icon.Linkedin />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="copyright-area">
                                <p>Copyright @2019 Muhammad Nzam. All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={require("../assets/images/map.png")} className="map" alt="map" />
                <div className="shape1"><img src={require("../assets/images/shape1.png")} alt="shape" /></div>
                <div className="shape8 rotateme"><img src={require("../assets/images/shape2.svg")} alt="shape" /></div>
            </footer>
        )
    }
}