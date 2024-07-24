import React, {  useState } from 'react'
import Base from '../Base/Base'
import './style.css';
import img from '../../images/logo.png';
import axios from 'axios';

export default function JoinUs() {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        year: '',
        branch: '',
        email: '',
        phoneno: '',
        interestedin: {
            modeling  :0,
            artcraft :0,
            decoration :0,
            photography :0,
            designing :0,
            painting :0,
            sketching :0,
        },
        about: '',
        why: ''
    });

    const update = event => {
        const { name, value } = event.target;

        if(name!=="interestedin")
        setFormData(
            prevState => ({
                ...prevState,
                [name]: value
            })
        )

        else
        {
            const prevstate= formData;
            let {interestedin}= prevstate;
            
            interestedin[value]=interestedin[value]^true;
            setFormData({...formData,interestedin});

        }
    }

    const submit = async (event) =>{
        event.preventDefault();

        if(
            formData.firstname==="" ||
            formData.lastname==="" ||
            formData.year==="" ||
            formData.phone==="" ||
            formData.email==="" ||
            formData.branch==="" ||
            formData.about==="" ||
            formData.why===""
        )
        {
            return window.alert('please fill the details');
            
        }

        try {
            const res = await axios.post('/api/form', formData);

            if(res.data)
            {
                
                window.location="/"
            }
            
        } catch (error) {
            console.log(error);
            
        }

    }

    return (
        <Base>

            <div className="con" data-aos="flip-left" data-aos-delay="200">

                <div className="main">
                    <h1>
                        Become Our Member

                    </h1>
                    <hr />
                    <div className="form" >
                        <form target="_blank" >

                            <label data-aos="zoom-in" data-aos-delay="100" for="Name"  >Name</label><br />
                            <input type="text" placeholder="first name" name="firstname" value={formData.firstname} onChange={update} /><br />
                            <input type="text" placeholder="last name" name="lastname" value={formData.lastname} onChange={update} /><br />
                            <br />
                            <br /><br />
                            <label data-aos="zoom-in" data-aos-delay="100" for="subject" name="year" value={formData.year} onChange={update} >Year:</label>
                            <br />

                            <input type="radio" name="year" value="1" onChange={update} data-aos="zoom-in" data-aos-delay="100" /><span data-aos="zoom-in" data-aos-delay="100" >Ist</span> <br />
                            <input type="radio" name="year" value="2" onChange={update} data-aos="zoom-in" data-aos-delay="100" /><span data-aos="zoom-in" data-aos-delay="100" >IInd</span> <br />
                            <input type="radio" name="year" value="3" onChange={update} data-aos="zoom-in" data-aos-delay="100" /><span data-aos="zoom-in" data-aos-delay="100" >IIIrd</span> <br />
                            <input type="radio" name="year" value="4" onChange={update} data-aos="zoom-in" data-aos-delay="100" /><span data-aos="zoom-in" data-aos-delay="100" >IVth</span>  <br />
                            <br /><br />

                            <label data-aos="zoom-in" data-aos-delay="100" for="br/anch">branch</label><br />
                            <select name="branch" value={formData.branch} onChange={update} id="" data-aos="zoom-in" data-aos-delay="100"  >
                                <option value="computer science">computer science</option>
                                <option value="information technology">Information Technology</option>
                                <option value="Electronics and Communication">Electronics and Communicatino</option>
                                <option value="mechnical">Mechanical Engineering</option>
                                <option value="civil">Civil</option>
                                <option value="electrical">Electrical</option>
                                <option value="production">Production and Engineering</option>

                            </select>
                            <br />
                            <label data-aos="zoom-in" data-aos-delay="100" name="email" for="Email" >Email </label><br />
                            <input type="text" className="email" data-aos="zoom-in" data-aos-delay="100" name="email" value={formData.email} onChange={update} /><br />
                            <label data-aos="zoom-in" data-aos-delay="100" for="phone">Phone no</label><br />
                            <input data-aos="zoom-in" data-aos-delay="100" type="text" name="phoneno" value={formData.phoneno} onChange={update} /><br />
                            <br />
                            <br />
                            
                            <label data-aos="zoom-in" data-aos-delay="100" for="intrest">Intrested in :</label>

                            <br />
                            <input data-aos="zoom-in" data-aos-delay="100" type="checkbox"  name="interestedin" onChange={update} value="sketching" id="" /><span data-aos="zoom-in" data-aos-delay="100"> Sketching</span>

                            <br />
                            <input data-aos="zoom-in" data-aos-delay="100" type="checkbox" name="interestedin" onChange={update} value="painting" id="" /> <span data-aos="zoom-in" data-aos-delay="100">Painting</span>
                            <br />
                            
                            <input data-aos="zoom-in" data-aos-delay="100" type="checkbox" name="interestedin" onChange={update} value="designing" id="" /><span data-aos="zoom-in" data-aos-delay="100"> Designing</span>
                            <br />
                            
                            <input data-aos="zoom-in" data-aos-delay="100" type="checkbox" name="interestedin" onChange={update} value="photography" id="" /> <span data-aos="zoom-in" data-aos-delay="100">Photography</span>
                            <br />
                            
                            <input data-aos="zoom-in" data-aos-delay="100" type="checkbox" name="interestedin" onChange={update} value="decoration" id="" /> <span data-aos="zoom-in" data-aos-delay="100">Decoration</span>
                            <br />
                            
                            <input data-aos="zoom-in" data-aos-delay="100" type="checkbox" name="interestedin" onChange={update} value="artcraft" id="" /><span data-aos="zoom-in" data-aos-delay="100">Origami And Craft</span>

                            <br /><input data-aos="zoom-in" data-aos-delay="100" type="checkbox" name="interestedin" onChange={update} value="modeling" id="" /> <span data-aos="zoom-in" data-aos-delay="100">Modeling</span>

                            <br /><br />

                            <label data-aos="zoom-in" data-aos-delay="100" for="about">About Yourself</label>
                            <br /><br />
                            <textarea data-aos="zoom-in" data-aos-delay="100" name="about" value={formData.about} onChange={update} rows="10"></textarea>
                            <br />
                            <br />
                            <label data-aos="zoom-in" data-aos-delay="100" for="join">Why you wanted to Join Us</label>
                            <br /><br />
                            <textarea data-aos="zoom-in" data-aos-delay="100" name="why" value={formData.why} onChange={update} rows="10"></textarea>
                            <br />
                            <br />
                            <button className="btn" data-aos="zoom-in" data-aos-delay="100" onClick={submit}>
                                submit
                    </button>
                            <button className="btn" data-aos="zoom-in" data-aos-delay="100" type="reset">reset</button>

                        </form>

                    </div>

                </div>

                <div className="marker" data-aos="fade-left" data-aos-delay="1000">
                    <img src={img} alt="" width="100%" />

                </div>
            </div>

        </Base>
    )
}
