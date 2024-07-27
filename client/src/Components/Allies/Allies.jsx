import React, { useState, useEffect } from 'react';
import SingleAllie from './SingleAllie';
import './newAllies.css'; // Adjusted CSS file import
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Navbar from '../NavBar/Navbar';
import alliesArt from '../../images/art-image-allies.svg';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Allies = () => {
    const [list, setList] = useState([]);
    const [filteredAllies, setFilteredAllies] = useState([]);
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchList = async () => {
            try {
                const response = await axios.get(`api/allAllies`);
                const data = response.data;
                setList(data);
                const filtered = data.filter((allie) => Number(allie.year) === new Date().getFullYear());
                setFilteredAllies(filtered);
                setIsLoading(false);
            } catch (error) {
                toast.error("There was an error fetching the allies");
                setIsLoading(false);
                setIsError(true);
                console.log(error);
            } 
        }
        fetchList();
    }, []);

    const filterAllies = (e) => {
        e.preventDefault();
        let year = value;
        if (!year || isNaN(Number(year))) {
            const filtered = list.filter((allie) => Number(allie.year) === new Date().getFullYear());
            setFilteredAllies(filtered);
            toast.error('Please enter a valid year');
            return;
        }
        if (Number(year) < 2021) {
            const filtered = list.filter((allie) => Number(allie.year) === new Date().getFullYear());
            setFilteredAllies(filtered);
            toast.error('Please enter year greater than 2021');
            return;
        }
        if (Number(year) > new Date().getFullYear()) {
            const filtered = list.filter((allie) => Number(allie.year) === new Date().getFullYear());
            setFilteredAllies(filtered);
            toast.error('Please enter year less than current year');
            return;
        }

        const filtered = list.filter(allie => Number(allie.year) === Number(year));
        toast.success('Allies filtered successfully');
        setFilteredAllies(filtered);
    };

    if(isLoading) {
        return <div className="loading"></div>
    }
    if(isError) {
        return <div className="error">There was an error...</div>
    }

    return (
        <div className="allies-super-container">
            <Navbar />
            <div className="allies-container">
                <div className="allie-heading">
                    <h1 className='heading-allies'>Our Allies</h1>
                    <div className="filter-allies">
                        <input type='text' className="allies-input" placeholder='Filter Allies' onChange={(e) => setValue(e.target.value)} />
                        <button type='submit' className='allies-submit-btn' onClick={filterAllies}>Filter</button>
                    </div>
                </div>
                <ul id="hexGrid">
                    {filteredAllies.map((allie, index) => (
                        <SingleAllie key={index} {...allie} />
                    ))}
                </ul>
            </div>
            <a id="fork" target="_blank" href="https://github.com/web-tiki/responsive-grid-of-hexagons">Fork on GitHub</a>
            <ToastContainer />
        </div>
    );
}

export default Allies;
