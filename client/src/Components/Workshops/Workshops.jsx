import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleWorkshop from './SingleWorkshop';
import './Workshops.css';
import Navbar from '../NavBar/Navbar.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
};

const Workshops = () => {
    const [workshops, setWorkshops] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false); 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`api/workshops`);
                const data = response.data;
                setWorkshops(data.workshops);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
                setIsError(true);
            }
        }
        fetchData();
    }, []);
    
    if(isLoading) {
        return <div className="loading-workshop"></div>
    }
    if(isError) {
        return <div className="workshop-error">There was an error fetching the workshops...</div>
    }
    return (
        <>
            <Navbar />
            <section className="workshop-container">
                <h1 className="workshop-title">Workshops</h1>
                <div className="workshop-list">
                    <Slider {...settings}>
                        {workshops.map((workshop) => {
                            return <SingleWorkshop key={workshop._id} {...workshop} />
                        })}
                    </Slider>
                </div>
            </section>
        </>
    )
};

export default Workshops