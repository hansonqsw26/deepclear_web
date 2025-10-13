import React from 'react';
import abimg2 from '../../images/about/2.png';
import './style.css';

const AboutSection = () => {
    return (
        <div className="wpo-about-style-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-6 about-wrap">
                        <div className="wpo-about-content">
                            <div className="wpo-about-icon">
                                <i className="fi flaticon-travel"></i>
                            </div>
                            <h2>Who We Are?</h2>
                            <p>
                                DeepClear Inc. is a leading customs brokerage and logistics company based in Ontario, dedicated to seamless import and export solutions.
                            </p>
                            <p>
                                We specialize in customs clearance, freight management, and supply chain solutions, ensuring your goods move efficiently and compliantly across borders.
                            </p>
                            <span>Reliable, Transparent, and Customer-Focused</span>
                            <span>Streamlining Logistics for Businesses of All Sizes</span>
                            <span>Committed to Compliance and Efficiency</span>
                        </div>
                        <div className="signature-section">
                            <div className="si-text">
                                <p>DeepClear Inc. Team</p>
                                <span>Leadership & Operations</span>
                            </div>
                            <img src={abimg2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
