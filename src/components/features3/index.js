import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Features3 = () => {
    return (
        <div className="wpo-section-style-3">
            <div className="container">
                <div className="row">
                    {/* Service Links */}
                    <div className="col-lg-4 col-md-9 col-sm-12 col-d c-pd">
                        <div className="section-wrap">
                            <div className="wpo-section-item-2">
                                <div className="wpo-section-icon">
                                    <i className="fi flaticon-ship"></i>
                                </div>
                                <div className="wpo-section-content">
                                    <p><Link to="/ocean">Ocean Freight</Link></p>
                                    <span>Efficient sea freight solutions across Canada with full customs compliance.</span>
                                </div>
                            </div>
                            <div className="wpo-section-item-2">
                                <div className="wpo-section-icon">
                                    <i className="fi flaticon-truck"></i>
                                </div>
                                <div className="wpo-section-content">
                                    <p><Link to="/road">Road Freight</Link></p>
                                    <span>Reliable land transport throughout Ontario and Canada for timely deliveries.</span>
                                </div>
                            </div>
                            <div className="wpo-section-item-2">
                                <div className="wpo-section-icon">
                                    <i className="fi flaticon-plane"></i>
                                </div>
                                <div className="wpo-section-content">
                                    <p><Link to="/freight">Air Freight</Link></p>
                                    <span>Fast and secure air freight services for urgent shipments across Canada and internationally.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Description */}
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="tr-wrap">
                            <div className="t-text">
                                <h2>Comprehensive Logistics & Customs Brokerage</h2>
                                <p>
                                    DeepClear Solution Inc. specializes in seamless logistics and customs brokerage solutions across Canada.
                                    We manage freight, ensure compliance with Canadian import/export regulations, and optimize supply chains for businesses of all sizes.
                                </p>
                            </div>
                            <div className="tr-s">
                                <span>Reliable logistics solutions across land, air, and sea.</span>
                                <span>Expert customs brokerage for smooth import/export processes.</span>
                                <span>Timely and secure delivery for all shipments.</span>
                                <span>Optimized supply chain management for businesses of any size.</span>
                                <span>Commitment to compliance, transparency, and customer satisfaction.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features3;
