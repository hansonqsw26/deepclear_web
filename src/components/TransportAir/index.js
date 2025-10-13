import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const TransportAir = (props) => {
    return (
        <div className="Freight-area">
            <div className="container">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-lg-3 col-md-12">
                        <div className="row">
                            <div className="col-lg-12 col-md-6">
                                <div className="contact-us-area">
                                    <h3>Contact Us</h3>
                                    <div className="contact-s">
                                        <span><i className="fa fa-phone" aria-hidden="true"></i>Call Us</span>
                                        <p>Tel: +1 647-223-7688</p>
                                    </div>
                                    <div className="contact-s">
                                        <span><i className="fa fa-envelope-o" aria-hidden="true"></i>Email Us</span>
                                        <p>info@deepclear.ca</p>
                                    </div>
                                    <div className="contact-s">
                                        <span><i className="fa fa-map-marker" aria-hidden="true"></i>Our Location</span>
                                        <p>Ontario, Canada</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-6">
                                <div className="catagory-item">
                                    <div className="widget-title">
                                        <h3 className="text-left">Our Services</h3>
                                    </div>
                                    <div className="category-section">
                                        <ul>
                                            <li>Customs Brokerage</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-lg-9">
                        <div className="Freight-item">
                            <h3>Expert Customs Brokerage Services</h3>
                            <p>
                                DeepClear Solution Inc. specializes exclusively in Canadian customs brokerage, ensuring that your imports and exports comply with all regulations.
                                We streamline documentation, minimize delays, and provide professional guidance for businesses of all sizes across Canada.
                            </p>
                            {/*<img src={props.simg} alt="Customs Brokerage"/>*/}
                            <p>
                                Our team handles customs clearance efficiently, so your goods move quickly across borders while remaining fully compliant.
                            </p>
                            <div className="Freight-s">
                                {/*<div className="Freight-img">*/}
                                {/*    <img src={props.simg2} alt="Customs Process"/>*/}
                                {/*</div>*/}
                                <div className="f-s">
                                    <span>Expert guidance through Canadian import/export regulations</span>
                                    <span>Minimized delays and smooth customs clearance</span>
                                    <span>Support for documentation and compliance</span>
                                    <span>Efficient handling of all shipment types</span>
                                    <span>Trusted by businesses across Ontario and Canada</span>
                                    <span>Ensuring fast and compliant movement of goods</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default TransportAir;
