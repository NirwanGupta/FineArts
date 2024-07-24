import React from 'react';
import './SingleAllie.css';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const SingleAllie = ({id, name, image, year, text, currentPerson, personIndex}) => {
    // console.log(id, name, year);
    return (
        <div className="single-allie" style={{transform: `translateX(${100*(personIndex-currentPerson)}%`, opacity: personIndex === currentPerson? 1: 0, visibility: personIndex === currentPerson? 'visible': 'hidden'}}>
            <div className="allie-image">
                <img src={image} alt={name} />
            </div>
            <div className="allie-name">
                <h4>{name}</h4>
            </div>
            <div className="allie-year">
                <h5>{year} - {(Number(year)+1)}</h5>
            </div>
            <div className="allie-text">
                <p>{text}</p>
            </div>
            <div className="allie-social-icons">
                <a href="https://www.facebook.com">
                    <FaFacebook />
                </a>
                <a href="https://www.instagram.com">
                    <FaInstagram />
                </a>
                <a href="https://x.com/">
                    <FaTwitter />
                </a>
                <a href="https://www.linkedin.com">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
};

export default SingleAllie;