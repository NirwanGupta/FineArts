import Aos from 'aos';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../Authentication/auth';
import Footer from '../Footer/Footer'

import Navbar from '../NavBar/Navbar'

export default function Base({
    title="title",
    description="my description",
    className="",
    children
}) {

    const [conributor, setConributor] = useState([]);

    const FetchData = async () => {

        try {
            const res = await axios.get('/api/contributor');

            if (res.data) {
                setConributor(res.data);
                
            }

        } catch (error) {
            console.log(error);

        }

    }

    const validateUser = async()=>{

        const { token } = isAuthenticated();

        if(!token)
        return;

        try {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const res = await axios.get('/user/auth', config);

        } catch (error) {

            localStorage.removeItem("jwt");
            window.alert("Session Expire Login Again");

        }
    }
   
    useEffect(() => {

        FetchData();
        validateUser();
        
        Aos.init();
       
    }, []);

    return (
        <div >
        <Navbar key="navbar"/>

            <div className="children" >
                {children}
            </div>
            
        <Footer key="footer" contributors ={conributor} />
        </div>
    )
}
