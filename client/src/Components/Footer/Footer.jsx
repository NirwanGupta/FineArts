import React  from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'
import Newsletter from './Newsletter';

export default function Footer({ contributors}) {

    return (
        <>

            <footer className="footer" >

                <div className="container" key="cont1">
                    <div className="about-us" key="about">

                        <h2>about us</h2>
                        <div className="about">
                            <p>
                                Fine Arts and Modelling club is one of the official clubs of NIT Kurukshetra. It is the hub of artists who come together
                                to ameliorate and sustain art culture in the college. And while doing the same, it provides ample opportunities to those
                                with artistic inclination to hone and flaunt their skills with art and craft.
                            </p>
                        </div>

                    </div>

                    <div className="newletter">
                        <h2>news letter</h2>
                        <h4>stay updated to our pages</h4>
                        <Newsletter/>
                    </div>

                    <div className="instagram">
                        <h2>Top Contributors</h2>
                        <div className="flex-row">

                            {contributors.map((cont) => <h2 key={cont._id} className="contributor">
                                <span>{cont.user.firstname}</span>(
                                <span>{cont.count}</span>)

                            </h2>)}
                          
                        </div>
                        
                    </div>

                    <div className="follow">
                        <h2>follow us</h2>
                        <p>let us be social</p>
                        <div className="icons">
                            <a href="https://www.facebook.com/faclubnitk" target="_blank" rel='noreferrer' >
                                <i className="fab fa-facebook "></i>
                            </a>

                            <a href="https://www.instagram.com/fineartsclub.nitkkr/" target="_blank" rel='noreferrer'>
                                <i className="fab fa-instagram"></i></a>
                        </div>
                    </div>

                </div>
                <div className="rights">
                    <div className="flex-row">
                        
                        <Link to="/about">copyrights &copy Unknown39825 </Link>
                    </div>
                </div>

            </footer>

        </>
    )
}
