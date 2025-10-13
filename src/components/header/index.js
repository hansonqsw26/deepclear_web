import React from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../../components/MobileMenu';
import logo from '../../images/logo/logo.png';

import './style.css';

const Header = () => {
    const SubmitHandler = (e) => {
        e.preventDefault();
    };

    const textColor = '#0d1b3d'; // Dark text color
    const topContactColor = '#fff'; // Top bar Contact Us

    return (
        <header>
            {/* Top Bar */}
            <div
                className="header-top-1"
                style={{
                    backgroundColor: '#0d1b3d', // Always dark
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
                    backgroundColor: '#ffffff', // Always white
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)', // Optional shadow
                    transition: 'none',
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-10 col-sm-10 col-8 col-t">
                            <div className="logo" style={{ position: 'relative', top: '-22px' }}>
                                <Link to="/"><img src={logo} alt="DeepClear Logo"/></Link>
                            </div>
                        </div>
                        <div className="col-lg-8 d-none d-lg-block col-m">
                            <div className="main-menu">
                                <nav className="nav_mobile_menu">
                                    <ul>
                                        <li className="active">
                                            <Link to="/" style={{ color: textColor }}>Home</Link>
                                        </li>
                                        <li><Link to="/about" style={{ color: textColor }}>About Us</Link></li>
                                        <li>
                                            <Link to="/servicesingle" style={{ color: textColor }}>Service</Link>
                                            <ul className="submenu">
                                                <li><Link to="/servicesingle" style={{ color: textColor }}>Logistic</Link></li>
                                                <li><Link to="/freight" style={{ color: textColor }}>Customs Brokerage</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.client.deepclear.ca/cbsa-checking"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: textColor }}
                                            >
                                                Track
                                            </a>
                                        </li>
                                        <li><Link to="/contact" style={{ color: textColor }}>Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-2 search">
                            <ul>
                                <li>
                                    <Link to="/"><i className="fa fa-search" style={{ color: textColor }}></i></Link>
                                    <ul>
                                        <li>
                                            <form onSubmit={SubmitHandler}>
                                                <input type="text" placeholder="search here.." style={{ color: textColor }} />
                                                <button type="btn">
                                                    <i className="fa fa-search" style={{ color: textColor }}></i>
                                                </button>
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
