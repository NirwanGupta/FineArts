import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import "./Sponsors.css";
import Navbar from '../NavBar/Navbar';
import SingleSponsor from './SIngleSponsor'; // Correct import of SingleSponsor component

const Sponsors = () => {
    const [sponsors, setSponsors] = useState([]);
    const [allSponsors, setAllSponsors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const [allMedia, setAllMedia] = useState([]);
    const [media, setMedia] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/sponsors/');
                const data = await response.json();
                setAllSponsors(data.sponsors);
                const mediaResponse = await fetch('/api/mediaPartners/');
                const mediaData = await mediaResponse.json();
                setIsLoading(false);
                setAllMedia(mediaData.mediaPartners);
            } catch (error) {
                setIsError(true);
                setIsLoading(false);
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        setSponsors(allSponsors.slice(0, 5));
    }, [allSponsors]);

    useEffect(() => {
        setMedia(allMedia.slice(0, 5));
    }, [allMedia]);

    if (isLoading) {
        return <div className="loading"></div>;
    }
    if (isError) {
        return <div className="error">There was an error loading the data.</div>;
    }

    return (
        <>
            <Navbar />
            <div className="sponsors-container">
                <section className="showcase">
                    
                    <ReactPlayer
                        className='react-player'
                        url='https://youtu.be/6LFTwbRrjvY?si=SzJowxtlGTlLgccp'
                        width='100vw'
                        height='100vh'
                        playing
                        loop
                        muted
                    />
                    {/* <div className="overlay"></div> */}
                    <div className="text">
                        <h2>Never Stop To</h2>
                        <h3>Exploring The World</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="#">Explore</a>
                    </div>
                    <ul className="social">
                        <li><a className="social-lia" href="#"><img src="https://i.ibb.co/x7P24fL/facebook.png" alt="Facebook" /></a></li>
                        <li><a className="social-lia" href="#"><img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt="Twitter" /></a></li>
                        <li><a className="social-lia" href="#"><img src="https://i.ibb.co/ySwtH4B/instagram.png" alt="Instagram" /></a></li>
                    </ul>
                </section>
                
                <div className='sponsors-section'>
                    <h1 className='sponsors-title'>Sponsors</h1>
                    <div className='sponsors-list'>
                        {sponsors.map((sponsor, index) => (
                            <SingleSponsor key={sponsor._id} {...sponsor} index={index} />
                        ))}
                    </div>
                    <div className="show-more-media" onClick={() => (allSponsors.length === sponsors.length) ? setSponsors(allSponsors.slice(0, 5)) : setSponsors(allSponsors)}>
                        <p>{(allSponsors.length === sponsors.length) ? 'Show Less' : 'Show More'}</p>
                    </div>
                </div>
                <div className='sponsors-section'>
                    <h1 className='sponsors-title'>Media Partners</h1>
                    <div className='sponsors-list'>
                        {media.map((item, index) => (
                            <SingleSponsor key={item._id} {...item} index={index} />
                        ))}
                    </div>
                    <div className="show-more-media" onClick={() => (allMedia.length === media.length) ? setMedia(allMedia.slice(0, 5)) : setMedia(allMedia)}>
                        <p>{(allMedia.length === media.length) ? 'Show Less' : 'Show More'}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sponsors;
