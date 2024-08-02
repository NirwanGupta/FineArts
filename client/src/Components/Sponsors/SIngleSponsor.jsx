import React, { useState, useEffect, useRef } from 'react';
import "./SingleSponsor.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const SingleSponsor = ({ name, image, description }) => {
    const [opened, setOpened] = useState(false);
    const [maxHeight, setMaxHeight] = useState('3rem');
    const contentRef = useRef(null);

    const handleClick = () => {
        setOpened(!opened);
    }

    useEffect(() => {
        if (opened) {
            setMaxHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setMaxHeight('3rem');
        }
    }, [opened]);

    return (
        <div className="singleSponsor-container">
            <div className="singleSponsor-image">
                <img src={image} alt={name} />
            </div>
            {/* <div className="singleSponsor-info">
                <h2>{name}</h2> */}
                {/* <div className="singleSponsor-para-container" style={{ maxHeight }} ref={contentRef}>
                    <p className={!opened ? 'singleSponsor-para-show' : 'singleSponsor-para-hidden'}>
                        {description.substr(0, 100)}...
                    </p>
                    <p className={opened ? 'singleSponsor-para-show' : 'singleSponsor-para-hidden'}>
                        {description}
                    </p>
                </div> */}
            {/* </div> */}
            {/* <div className="singleSponsor-icon">
                {!opened ? <FaPlus onClick={handleClick} /> : <FaMinus onClick={handleClick} />}
            </div> */}
        </div>
    );
}

export default SingleSponsor;
