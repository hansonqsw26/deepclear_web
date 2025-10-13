import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../../components/MobileMenu';
import logo from '../../images/logo/logo.png';

import './style.css';

const Header = () => {
    const [scrollUp, setScrollUp] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const SubmitHandler = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY && currentScrollY > 50) {
                setScrollUp(true);
            } else {
                setScrollUp(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const textColor = '#87ceeb'; // Soft Sky Blue
    const topContactColor = '#fff'; // Top bar Contact Us white

    return (
        <header>
            {/* Top Bar */}
            <div
                className="header-top-1"
                style={{
                    backgroundColor: scrollUp ? '#e0e0e0' : '#0d1b3d',
                    transition: 'background-color 0.3s ease',
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 col-sm-12 col-12">
                            <ul className="d-flex account_login-area" style={{ color: textColor }}>
                                <li><i className="fa fa-clock-o" aria-hidden="true"></i>Monday - Friday : 9 am - 7.00 pm</li>
                                <li><i className="fa fa-map-marker"></i>7100 Woodbine Ave, Suite 111, Markham, ON</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="btn-style">
                                <Link to="/contact" style={{ color: topContactColor }}>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div
                className="header-style-1"
                style={{
                    backgroundColor: 'transparent',
                    transition: 'background-color 0.3s ease',
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-10 col-sm-10 col-8 col-t">
                            <div className="logo">
                                <Link to="/"><img src={logo} alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-8 d-none d-lg-block col-m">
                            <div className="main-menu">
                                <nav className="nav_mobile_menu">
                                    <ul>
                                        <li className="active"><Link to="/" style={{color: textColor}}>Home</Link>
                                            <ul className="submenu">
                                                {/*<li className="active"><Link to="/" style={{ color: textColor }}>Home One</Link></li>*/}
                                                {/*<li><Link to="/home2" style={{ color: textColor }}>Home Two</Link></li>*/}
                                                {/*<li><Link to="/home3" style={{ color: textColor }}>Home Three</Link></li>*/}
                                            </ul>
                                        </li>
                                        <li><Link to="/about" style={{color: textColor}}>About Us</Link></li>
                                        <li><Link to="/servicesingle" style={{color: textColor}}>Service</Link>
                                            <ul className="submenu">
                                                <li><Link to="/servicesingle" style={{color: textColor}}>logistic</Link></li>
                                                <li><Link to="/freight" style={{color: textColor}}>Customs Brokerage</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.client.deepclear.ca/cbsa-checking"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{color: textColor}}
                                            >
                                                Track
                                            </a>
                                        </li>


                                        {/*<li><Link to="https://www.client.deepclear.ca/cbsa-checking"*/}
                                        {/*          style={{color: textColor}}>Track</Link>*/}
                                            {/*<ul className="submenu">*/}
                                            {/*    <li><Link to="/blog" style={{ color: textColor }}>Blog with sidebar</Link></li>*/}
                                            {/*    <li><Link to="/blog-fullwidth" style={{ color: textColor }}>Blog full width</Link></li>*/}
                                            {/*    <li><Link to="/blog-single" style={{ color: textColor }}>Blog single sidebar</Link></li>*/}
                                            {/*    <li><Link to="/blog-single-fullwidth" style={{ color: textColor }}>Blog single fullwidth</Link></li>*/}
                                            {/*</ul>*/}
                                        {/*</li>*/}
                                        {/*<li><Link to="/" style={{ color: textColor }}>Pages</Link>*/}
                                        {/*    <ul className="submenu">*/}
                                        {/*        <li><Link to="/pricing" style={{ color: textColor }}>pricing table</Link></li>*/}
                                        {/*        <li><Link to="/team" style={{ color: textColor }}>Team</Link></li>*/}
                                        {/*    </ul>*/}
                                        {/*</li>*/}
                                        <li><Link to="/contact" style={{color: textColor}}>Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-2 search">
                            <ul>
                                <li><Link to="/"><i className="fa fa-search" style={{ color: textColor }}></i></Link>
                                    <ul>
                                        <li>
                                            <form onSubmit={SubmitHandler}>
                                                <input type="text" placeholder="search here.." style={{ color: textColor }} />
                                                <button type="btn"><i className="fa fa-search" style={{ color: textColor }}></i></button>
                                            </form>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-1 col-sm-1 col-2">
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
