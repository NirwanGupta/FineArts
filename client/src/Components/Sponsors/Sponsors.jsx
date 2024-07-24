import React, { useEffect, useState } from 'react';
import "./Sponsors.css";
import SIngleSponsor from './SIngleSponsor';
import Navbar from '../NavBar/Navbar';

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
                const response = await fetch('api/sponsors/');
                const data = await response.json();
                console.log(data);
                setAllSponsors(data.sponsors);
                const mediaResponse = await fetch(`/api/mediaPartners/`);
                const mediaData = await mediaResponse.json();
                setIsLoading(false);
                setAllMedia(mediaData.mediaPartners);
            } catch (error) {
                setIsError(true);
                setIsLoading(false);
                console.log(error);
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

    if(isLoading) {
        return <div className="loading"></div>
    }
    if(isError) {
        return <div className="workshop-error">There was an error...</div>
    }
    return (
        <>
            <Navbar />
            <div className='sponsors-container'>
                <h1 className='sponsors-title'>Sponsors</h1>
                <div className='sponsors-list'>
                    {sponsors.map((sponsor, index) => (
                        <SIngleSponsor key={sponsor._id} {...sponsor} index={index} />
                    ))}
                </div>
                <div className="show-more-sponsors" onClick={() => (allSponsors.length === sponsors.length)? setSponsors(allSponsors.slice(0,5)): setSponsors(allSponsors)}>
                    <p>{(allSponsors.length === sponsors.length)? `Show Less`: `Show More`}</p>
                </div>
            </div>
            <div className='sponsors-container'>
                <h1 className='sponsors-title'>Media Partners</h1>
                <div className='sponsors-list'>
                    {media.map((item, index) => (
                        <SIngleSponsor key={item._id} {...item} index={index} />
                    ))}
                </div>
                <div className="show-more-media" onClick={() => (allMedia.length === media.length)? setMedia(allMedia.slice(0,5)): setMedia(allMedia)}>
                    <p>{(allMedia.length === media.length)? `Show Less`: `Show More`}</p>
                </div>
            </div>
        </>
    )
};

export default Sponsors;