import axios from 'axios';
import React, { useState } from 'react'
import './style.css'
import { Redirect } from 'react-router-dom';
import Base from '../Base/Base';

import { authenticate } from './auth';

export default function Signin() {

    const [userpost, setUser] = useState({
        email: '',
        password: '',
    });

    const [forgotpassword, setForgotpassword] = useState(false);

    const [created, setCreated] = useState(false);

    // const [url, setUrl] = useState("helo");

    const handleChange = (e) => {
        setUser({
            ...userpost,
            [e.target.name]: e.target.value
        })
    }

    const postEvent = async () => {

        try {
            const res = await axios.post(`/user/login`, userpost);

            if (res.data.error) {

                window.alert(res.data.error);
                return;
            }
            window.alert(res.data.msg);

            authenticate({
                token:
                    res.data.token,
                admin: res.data.admin
            });
            setCreated(true);
            
        } catch (err) {

            console.log(err.response.data);
            window.alert(err.response.data.error);
            
            return;
        }

    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (userpost.email.trim() !== "" && userpost.password.trim !== "") {

            postEvent();

        }
        else {
            window.alert("User details are  empty");
        }
    }

    const ResetPassword = async (e) => {
        e.preventDefault();
        
        if (userpost.email.trim() !== "") {
            try {
                const res = await axios.put(`/user/forgot`, userpost);

                if (res.data.error) {
                    window.alert(res.data.error);
                    return;

                }
                window.alert(res.data.msg);
                setForgotpassword(true);

            } catch (error) {
                console.log(error.response);
                window.alert(error.response.data.error);

            }
        }
        else {
            window.alert("User details are  empty");
        }
    }

    if (created) {
        return <Redirect to="/"></Redirect>
    }

    if (forgotpassword) {
        return <Redirect to="/forgot"></Redirect>
    }

    return (
        <Base>
            <div className="cont">
                <div className="main">
                    <h1 className="bg-dark m-2 text-white p-2 rounded">Login User</h1>
                    <div className="form">
                        
                        <form >

                            <div controlId="">
                                <label><b>email </b></label>
                                <input className="input" type="email" name="email" value={userpost.email} onChange={handleChange} placeholder="" />
                            </div>

                            <div controlId="">
                                <label><b> {forgotpassword && "new"}  password </b></label>
                                <input className="input" type="password" name="password" value={userpost.password} onChange={handleChange} placeholder="" />
                            </div>

                            {forgotpassword && <div controlId="">
                                <label><b>OTP</b></label>
                                <input className="input" type="password" name="otp" value={userpost.otp} onChange={handleChange} placeholder="" />
                            </div>}

                            <button variant="primary" className="btn" onClick={onSubmit}>Submit</button>

                            {!forgotpassword && <button variant="primary" className="btn" onClick={ResetPassword}>ForgotPassword</button>}

                        </form>
                    </div>
                </div>
            </div>
        </Base>
    )
}
