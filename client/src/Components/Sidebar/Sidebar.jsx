import React, {useState} from 'react';
import './Sidebar.css';
import logo from '../../logo.svg';
import {FaTimes} from 'react-icons/fa';
import {links, social} from './Sidebar-data';
import { useGlobalContext } from '../../context/SidebarContext';
import { NavLink, Link} from 'react-router-dom';
import {  isAuthenticated, signout } from '../Authentication/auth';

const Sidebar = () => {
    console.log("in sidebar");
    const {isSidebarOpen, closeSidebar, openSidebar} = useGlobalContext();
    console.log(isSidebarOpen, closeSidebar);
    // if(isSidebarOpen) {
    //     toggleSidebar(isSidebarOpen);
    // }
    return (
        <aside className={isSidebarOpen? 'sidebar show-sidebar': 'sidebar'}>
        <div className="sidebar-header">
            <p className="sidebar-logo">FineArts</p>
            {/* <button className="sidebar-close-btn" onClick={openSidebar}>
                <FaTimes />
            </button> */}
            <ul className="sidebar-login">
                <li>
                    {!isAuthenticated() &&<NavLink activeClassName="active" to="/signin" className="Sidebar-login-links" >signIn</NavLink>}
                </li>
                <li>
                    {!isAuthenticated() &&<NavLink activeClassName="active" to="/signup" className="Sidebar-login-links" >signUp</NavLink>}
                </li>
                <li>
                    {isAuthenticated() &&<Link onClick={() => signout()} to="/" className=" Sidebar-login-links" >logOut</Link>}
                </li>
            </ul>
        </div>
        
        <ul className="sidebar-links">
            {links.map((link) => {
                const {id, url, text, icon} = link;
                return (
                    <li key={id}>
                        <a href={url}>
                            {icon}
                            {text}
                        </a>
                    </li>
                )
            })}
        </ul>
        <ul className="sidebar-social-links">
            {social.map((link) => {
                const {id, url, icon} = link;
                return (
                    <li key={id}>
                        <a href={url}>
                            {icon}
                        </a>
                    </li>
                )
            })}
        </ul>
    </aside>
    );
}

export default Sidebar;