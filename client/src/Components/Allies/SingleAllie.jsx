import React from 'react';
import './SingleAllie.css';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const SingleAllie = ({id, name, image, year, text, currentPerson, personIndex}) => {
    console.log(id, name, year, image);
    return (
        <li class="hex">
            <a class="hexIn">
                <img src={image} alt={name} />
                <h1>{name}</h1>
                <p className="single-allie-icon">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{left: '15%'}}>
                        <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{left: '35%'}}>
                        <FaFacebook />
                    </a>
                    <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" style={{left: '55%'}}>
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{left: '75%'}}>
                        <FaLinkedin />
                    </a>
                </p>
            </a>
        </li>
    );
};

export default SingleAllie;