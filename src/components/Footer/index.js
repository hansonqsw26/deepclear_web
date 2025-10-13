import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import './style.css';

const FooterSection = () => {
    return (
        <div className="wpo-footer-area">
            {/* Footer Top */}
            <div className="wpo-footer-top">
                <div className="container">
                    <div className="row">
                        {/* Logo & Slogan */}
                        <div className="col-lg-4 col-md-6 col-sm-6 footer-t">
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

                        {/* Quick Links */}
                        <div className="col-lg-4 col-md-6 col-sm-6 footer-t">
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

                        {/* Recent News */}
                        <div className="col-lg-4 col-md-6 col-sm-6 footer-b">
                            <div className="Recent-News-area">
                                <h3>Recent News</h3>
                                {/*<div className="resent-sub">*/}
                                {/*    <p>There are many variations of passages of Lorem</p>*/}
                                {/*    <span><i className="fa fa-clock-o" aria-hidden="true"></i> October 10, 2018</span>*/}
                                {/*</div>*/}
                                {/*<p>There are many variations of passages of Lorem</p>*/}
                                {/*<span><i className="fa fa-clock-o" aria-hidden="true"></i> October 10, 2018</span>*/}
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
                                <span>© {new Date().getFullYear()} DeepClear Inc. All Rights Reserved.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;
