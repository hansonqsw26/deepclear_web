import React from 'react';

// components
import Navbar from '../../components/Navbar';
import Breadcumb from '../../components/breadcumb';
import Contactpage from '../../components/Contactpage';
import FooterSection from '../../components/Footer';

const ContactPage = () => {
    return (
        <div>
            <Navbar />
            {/* Optional: <Breadcumb bdtitle={'Contact Us'} bdsub={'Contact'} /> */}

            {/* Add top padding to avoid overlap with header */}
            <div style={{ paddingTop: '120px' }}>
                {/* Contact Info Section */}
                <div
                    style={{
                        textAlign: 'center',
                        padding: '40px 20px',
                        backgroundColor: '#f9f9f9',
                    }}
                >
                    <h2
                        style={{
                            fontSize: '28px',
                            fontWeight: '600',
                            marginBottom: '10px',
                        }}
                    >
                        Get in Touch
                    </h2>
                    <p
                        style={{
                            maxWidth: '600px',
                            margin: '0 auto 30px',
                            color: '#555',
                        }}
                    >
                        We’re here to help with your inquiries, support, or service needs.
                        Reach out using the details below.
                    </p>

                    <div
                        style={{
                            display: 'inline-block',
                            textAlign: 'left',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '10px',
                                fontSize: '18px',
                            }}
                        >
                            <span style={{ marginRight: '10px', fontSize: '22px' }}>📧</span>
                            <a
                                href="mailto:info@deepclear.ca"
                                style={{ textDecoration: 'none', color: '#333' }}
                            >
                                info@deepclear.ca
                            </a>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '18px',
                            }}
                        >
                            <span style={{ marginRight: '10px', fontSize: '22px' }}>📞</span>
                            <a
                                href="tel:6472237688"
                                style={{ textDecoration: 'none', color: '#333' }}
                            >
                                647-223-7688
                            </a>
                        </div>
                    </div>
                </div>

                {/* Optional Contact form section */}
                {/* <Contactpage /> */}
            </div>

            <FooterSection />
        </div>
    );
};

export default ContactPage;
