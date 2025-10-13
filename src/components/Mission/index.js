import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import simg1 from '../../images/about-page/1.jpg';
import simg2 from '../../images/about-page/2.jpg';

const Mission = () => {
    return (
        <div className="service-style-1">
            <div className="container">
                <div className="col-l2">
                    <div className="wpo-section-title text-center">
                        <span>We Provide the Best</span>
                        <h2>Our Mission</h2>
                    </div>
                </div>
                <div className="row">
                    {/* Logistics Service */}
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="wpo-service-item">
                            <div className="wpo-service-single">
                                <div className="service-img">
                                    <img src={simg1} alt="Logistics"/>
                                </div>
                                <div className="service-content">
                                    <h3>Logistics</h3>
                                    <p>
                                        DeepClear Solution Inc. provides efficient and reliable logistics solutions across Canada, ensuring timely delivery and seamless supply chain management for businesses of all sizes.
                                    </p>
                                    <Link to="/servicesingle">See More...</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Customs Brokerage Service */}
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="wpo-service-item">
                            <div className="wpo-service-single">
                                <div className="service-img">
                                    <img src={simg2} alt="Customs Brokerage"/>
                                </div>
                                <div className="service-content2">
                                    <h3>Customs Brokerage</h3>
                                    <p>
                                        DeepClear Solution Inc. specializes in Canadian customs brokerage, providing expert guidance and compliance services to ensure smooth import and export processes across borders.
                                    </p>
                                    <Link to="/freight">See More...</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Mission;
