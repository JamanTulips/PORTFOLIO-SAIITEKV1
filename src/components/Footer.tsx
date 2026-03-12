import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
            <div className="container pt-5 pb-4">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <Link href="/">
                            <h1 className="text-white fw-bold d-block">Koju IT<span className="text-secondary">Solutions</span>
                            </h1>
                        </Link>
                        <div className="d-flex hightech-link">
                            <a href="#" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i
                                className="fab fa-facebook-f text-primary"></i></a>
                            <a href="#" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i
                                className="fab fa-twitter text-primary"></i></a>
                            <a href="#" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i
                                className="fab fa-instagram text-primary"></i></a>
                            <a href="#" className="btn-light nav-fill btn btn-square rounded-circle me-0"><i
                                className="fab fa-linkedin-in text-primary"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        {/* Empty cols in original */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        {/* Empty cols in original */}
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a href="#" className="h3 text-secondary">Contact Us</a>
                        <div className="text-white mt-4 d-flex flex-column contact-link">
                            <a href="#" className="pb-3 text-light border-bottom border-primary"><i
                                className="fas fa-map-marker-alt text-secondary me-2"></i> Madhyapur Thimi
                                -7,Bhaktapur,Nepal</a>
                            <a href="tel:+9779704788132" className="py-3 text-light border-bottom border-primary"><i
                                className="fas fa-phone-alt text-secondary me-2"></i> +977 9704788132</a>
                            <a href="mailto:kojuitsolutions@gmail.com" className="py-3 text-light border-bottom border-primary"><i
                                className="fas fa-envelope text-secondary me-2"></i> kojuitsolutions@gmail.com</a>
                        </div>
                    </div>
                </div>
                <hr className="text-light mt-5 mb-4" />
                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <span className="text-light"><a href="#" className="text-secondary"><i
                            className="fas fa-copyright text-secondary me-2"></i>Koju IT Solutions</a>, All right
                            reserved.</span>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
