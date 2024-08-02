import React, { useState, useEffect } from 'react';
import SingleAllie from './SingleAllie';
import './Allies.css';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Navbar from '../NavBar/Navbar';
import alliesArt from '../../images/art-image-allies.svg';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Allies = () => {
    const [list, setList] = useState([]);
    const [currentPerson, setCurrentPerson] = useState(0);
    const [filteredAllies, setFilteredAllies] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        const fetchList = async () => {
            try {
                const response = await axios.get(`api/allAllies`);
                const data = response.data;
                // Sort data in decreasing order based on year
                const sortedData = data.sort((a, b) => Number(b.year) - Number(a.year));
                setList(sortedData);
                setFilteredAllies(sortedData);
            } catch (error) {
                toast.error("There was an error fetching the allies");
                console.log(error);
            }
        }
        fetchList();
    }, []);

    const prevSlide = () => {
        setCurrentPerson((oldPerson) => {
            return (oldPerson - 1 + filteredAllies.length) % filteredAllies.length;
        })
    };
    const nextSlide = () => {
        setCurrentPerson((oldPerson) => {
            return (oldPerson + 1) % filteredAllies.length;
        })
    };

    const filterAllies = (e) => {
        e.preventDefault();
        let year = value;
        if (!year || isNaN(Number(year))) {
            year = new Date().getFullYear();
            setFilteredAllies(list);
            toast.error('Please enter a valid year');
            return;
        }
        if (Number(year) < 2021) {
            year = new Date().getFullYear();
            setFilteredAllies(list);
            toast.error('Please enter year greater than 2021');
            return;
        }
        if (Number(year) > new Date().getFullYear()) {
            year = new Date().getFullYear();
            setFilteredAllies(list);
            toast.error('Please enter year less than current year');
            return;
        }

        // console.log(year, typeof (year));
        const filtered = list.filter(allie => Number(allie.year) === Number(year));
        // console.log(filtered);
        toast.success('Allies filtered successfully');
        setFilteredAllies(filtered);
    };

    return (
        <div className="allies-super-container">
            <Navbar />
            <div className="allies-title">
                <h1>Our Allies</h1>
            </div>
            <div className="allies-flex-container">
                <div className='allies-left'>
                    <div className="allies-form">
                        <form onSubmit={filterAllies} className='form'>
                            <label htmlFor="year">
                                <input type='text' id="year" onChange={(e) => setValue(e.target.value)} className='allie-year-input' placeholder='Enter Year to Filter Allies'/>
                            </label>
                            <button type="submit" className='allie-submit-btn'>Filter</button>
                        </form>
                    </div>
                    <section className="allies-container">
                        {filteredAllies.map((item, index) => {
                            return <SingleAllie key={item.id} {...item} currentPerson={currentPerson} personIndex={index} />
                        })}
                        <button type="button" className="allies-prev" onClick={prevSlide}>
                            <FiChevronLeft className='allies-icon' />
                        </button>
                        <button type="button" className="allies-next" onClick={nextSlide}>
                            <FiChevronRight className='allies-icon' />
                        </button>
                    </section>
                </div>
                <img src={alliesArt} alt="allies-logo" className='allies-logo' />
            </div>
            <ToastContainer />
        </div>
    );
}

export default Allies;
