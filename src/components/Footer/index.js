import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import './style.css';

const FooterSection = () => {
    return (
        <div className="wpo-footer-area">
            {/* Footer Top */}
            <div className="wpo-footer-top">
                <div className="container-fluid p-0">
                    <div className="row no-gutters">

                        {/* Left Side - White Background */}
                        <div className="col-lg-4 col-md-12 footer-left">
                            <div className="footer-left-inner">
                                <div className="wpo-footer-logo">
                                    <img src={logo} alt="DeepClear Logo" />
                                </div>
                                <p>Think Deep, Solve Clear</p>
                                <div className="social">
                                    <ul className="d-flex">
                                        <li>
                                            <Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Middle - Quick Links */}
                        <div className="col-lg-4 col-md-6 col-sm-6 footer-dark">
                            <div className="footer-link">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/servicesingle">Service</Link></li>
                                    <li>
                                        <a
                                            href="https://www.client.deepclear.ca/cbsa-checking"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Track
                                        </a>
                                    </li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Right - Recent News */}
                        <div className="col-lg-4 col-md-6 col-sm-6 footer-dark">
                            <div className="Recent-News-area">
                                <h3>Recent News</h3>
                                <p style={{color: "#bbb"}}>Stay tuned for updates and industry insights.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="wpo-footer-bottom">
                <div className="container">
                    <div className="wpo-footer-bottom-content">
                        <div className="row">
                            <div className="col-12 text-center">
                                <span>© {new Date().getFullYear()} DeepClear Solution Inc. All Rights Reserved.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;
