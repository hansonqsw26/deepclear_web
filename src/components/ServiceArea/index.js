import React from 'react';
import './style.css';

const ServiceArea = (props) => {
    return (
        <div className="wpo-service-s2">
            <div className="container">
                <div className="col-l2">
                    <div className="wpo-section-title text-center">
                        <span>We Provide the Best</span>
                        <h2>Our Service</h2>
                    </div>
                </div>
                <div className="row">
                    {/* Land Transport */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="wpo-service-item">
                            <div className="wpo-service-single">
                                <div className="wpo-service-icon">
                                    <i className="fi flaticon-truck"></i>
                                </div>
                                <h2>Land Transport</h2>
                                <p>
                                    DeepClear Inc. provides reliable land transport across Canada, ensuring timely delivery and secure handling of all shipments.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sea Freight */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="wpo-service-item">
                            <div className="wpo-service-single">
                                <div className="wpo-service-icon">
                                    <i className="fi flaticon-ship"></i>
                                </div>
                                <h2>Sea Freight</h2>
                                <p>
                                    We offer efficient sea freight solutions, managing imports and exports with full compliance to Canadian customs regulations.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Air Freight */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="wpo-service-item">
                            <div className="wpo-service-single">
                                <div className="wpo-service-icon">
                                    <i className="fi flaticon-plane"></i>
                                </div>
                                <h2>Air Freight</h2>
                                <p>
                                    DeepClear Inc. handles air freight with speed and precision, ensuring critical shipments reach their destination safely and on time.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Logistic Solutions */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="wpo-service-item">
                            <div className="wpo-service-single">
                                <div className="wpo-service-icon">
                                    <i className="fi flaticon-construction"></i>
                                </div>
                                <h2>Logistic Solutions</h2>
                                <p>
                                    Comprehensive logistics solutions across Canada, including freight management, supply chain optimization, and real-time tracking.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Customs Brokerage */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="wpo-service-item">
                            <div className="wpo-service-single">
                                <div className="wpo-service-icon">
                                    <i className="flaticon-truck-2"></i>
                                </div>
                                <h2>Customs Brokerage</h2>
                                <p>
                                    Expert customs brokerage services, guiding your shipments through Canadian import and export regulations efficiently and compliantly.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Warehousing */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="wpo-service-item">
                            <div className="wpo-service-single">
                                <div className="wpo-service-icon">
                                    <i className="flaticon-trolley"></i>
                                </div>
                                <h2>Warehousing</h2>
                                <p>
                                    Secure warehousing and storage solutions across Ontario and Canada, supporting your supply chain and inventory management needs.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ServiceArea;
