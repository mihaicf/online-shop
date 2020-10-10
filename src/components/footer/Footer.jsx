import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg';
import { ReactComponent as GitHub } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';
import './Footer.css';

function Footer() {
    return(
        <footer className="pt-3 mt-3 bg-light">
            <div className="container-fluid container-min-max-width d-flex justify-content-between">
                <div className="footer-group d-flex flex-column">
                    <h3 className="h5">Links:</h3>
                    <Link to='/about'>About</Link>
                    <Link to='/terms-and-conditions'>Terms and Conditions</Link>
                </div>
                <div className="footer-group">
                    <h3 className="h5">Contact:</h3>
                    <p className="m-0">
                        <a href="mailto:razvan.cirlugea@gmail.com">
                            <Mail className="mr-1 mb-1 footer-icon"/>
                            mihai.c.fugaciu@gmail.com
                        </a>
                    </p>
                    <p className="m-0"><Phone className="mr-1 footer-icon"/>+4072000000</p>
                </div>
                <div className="footer-group">
                    <h3 className="h5">Contact:</h3>
                    <p className="m-0">
                        <a href="https://github.com/mihaicf">
                            <GitHub className="mr-1 mb-1 footer-icon"/>
                            Github
                        </a>
                    </p>
                    <p className="m-0">
                        <a href="https://www.linkedin.com/in/mihaifugaciu">
                            <LinkedIn className="mr-1 footer-icon"/>
                            Linkedin
                        </a>
                    </p>
                </div>
            </div>
            <div className="text-center py-3">
                &copy; 2020
            </div>
        </footer>
    );
}

export default Footer;