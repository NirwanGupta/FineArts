import React from 'react';

import './Navbar.css';
import logo from '../../images/logo.png'
import { NavLink ,Link} from 'react-router-dom';
import {  isAuthenticated, signout } from '../Authentication/auth';
import { useGlobalContext } from '../../context/SidebarContext';
import {FaBars} from 'react-icons/fa';

function hello() {
    var x = document.getElementById("hell");
    if (x.className === "nav")
        x.className += " collapse";
    else
        x.className = "nav";
}

const logout = ()=>{
    signout();
}

const Navbar = () => {
    const {openSidebar} = useGlobalContext();
    return (
        <>
            <nav className="nav" id="hell">
                <div className="nav-menu flex-row">
                    <button className="sidebar-toggle" onClick={openSidebar}>
                        <FaBars />
                    </button>
                    <div className="nav-brand">
                        <Link to="/" className="text-grey bold">
                            <img className="logo" src={logo} width="50px" alt="" />FineArts 
                            {/* <span className="red">
                                NIT Kurukhetra
                            </span> */}
                        </Link>

                    </div>
                    <div className="toggle-collapse">
                        <div className="toggle-icons">
                            <i className="fas fa-bars" onClick={hello}></i>
                        </div>

                    </div>

                    <div>
                        <ul className="nav-items">
                            <li className="nav-link"><NavLink exact activeClassName="active" to="/" >home</NavLink></li>
                            <li className="nav-link"><NavLink activeClassName="active" to="/art">Art Gallery</NavLink></li>
                            <li className="nav-link"><NavLink activeClassName="active" to="/join">Join us</NavLink></li>
                            {isAuthenticated()?.admin && <li className="nav-link"><Link to="/admin">Admin panel</Link></li>}
                        </ul>

                    </div>
                    <div className="social text-grey">
                       {
                            !isAuthenticated() &&<NavLink activeClassName="active" to="/signin" className="left" >SignIn</NavLink>
                       }
                       {
                            !isAuthenticated() && <NavLink to="/signup" activeClassName="active" className="left" >SignUp</NavLink>
                       }
                       {
                            isAuthenticated() && <Link onClick={logout} to="/" className=" left" >SignOut</Link>
                       }
                    </div>
                    
                </div>
            </nav>

        </>
    );
}

export default Navbar;
