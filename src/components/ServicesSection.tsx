import React from 'react';

const ServicesSection = () => {
    return (
        <div className="container-fluid services py-5 mb-5">
            <div className="container">
                <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
                    <h5 className="text-primary">Our Services</h5>
                    <h1>Services Built Specifically For Your Business</h1>
                </div>
                <div className="row g-5 services-inner">
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                        <div className="services-item bg-light">
                            <div className="p-4 text-center services-content">
                                <div className="services-content-icon">
                                    <i className="fa fa-code fa-7x mb-4 text-primary"></i>
                                    <h4 className="mb-3">Web Design</h4>
                                    <p className="mb-4">Crafting visually appealing and user-friendly websites tailored to your
                                        brand. Our web design services focus on creating a seamless and engaging user
                                        experience to leave a lasting impression on your audience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                        <div className="services-item bg-light">
                            <div className="p-4 text-center services-content">
                                <div className="services-content-icon">
                                    <i className="fa fa-file-code fa-7x mb-4 text-primary"></i>
                                    <h4 className="mb-3">Web Development</h4>
                                    <p className="mb-4">Building robust and scalable web applications that align with your
                                        business goals. Our web development services encompass the entire development
                                        lifecycle, ensuring high-quality and functional solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                        <div className="services-item bg-light">
                            <div className="p-4 text-center services-content">
                                <div className="services-content-icon">
                                    <i className="fa fa-external-link-alt fa-7x mb-4 text-primary"></i>
                                    <h4 className="mb-3">UI/UX Design</h4>
                                    <p className="mb-4">Enhancing user satisfaction by improving the usability, accessibility,
                                        and overall interaction with your digital products. Our UI/UX design services focus
                                        on creating intuitive and visually appealing interfaces.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                        <div className="services-item bg-light">
                            <div className="p-4 text-center services-content">
                                <div className="services-content-icon">
                                    <i className="fas fa-user-secret fa-7x mb-4 text-primary"></i>
                                    <h4 className="mb-3">Web Security</h4>
                                    <p className="mb-4">Ensuring the confidentiality, integrity, and availability of your web
                                        assets. Our web security services implement robust measures to protect against
                                        potential cyber threats and vulnerabilities.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                        <div className="services-item bg-light">
                            <div className="p-4 text-center services-content">
                                <div className="services-content-icon">
                                    <i className="fa fa-envelope-open fa-7x mb-4 text-primary"></i>
                                    <h4 className="mb-3">Digital Marketing</h4>
                                    <p className="mb-4">Promoting your brand and reaching a wider audience through strategic
                                        digital marketing initiatives. Our digital marketing services encompass social media
                                        management, SEO, content creation, and more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                        <div className="services-item bg-light">
                            <div className="p-4 text-center services-content">
                                <div className="services-content-icon">
                                    <i className="fas fa-laptop fa-7x mb-4 text-primary"></i>
                                    <h4 className="mb-3">Programming</h4>
                                    <p className="mb-4">Delivering customized programming solutions to meet your unique business
                                        requirements. Our programming services cover a wide range of technologies and
                                        languages, ensuring efficient and scalable solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServicesSection;
