import React from 'react';
import './SingleWorkshop.css';

const SingleWorkshop = ({image, name, description, mentoredBy}) => {
  return (
    <div className="singleWorkshop-super-container">
      <div className="singleWorkshop-container">
        <div className="singleWorkshop-image-div">
          <img src={image} alt={name} className="singleWorkshop-image" />
        </div>
        <div className="singleWorkshop-content-div">
          <h2 className="singleWorkshop-name">{name}</h2>
          <p className="singleWorkshop-desc">{description}</p>
          <p className="singleWorkshop-mentor">Mentored by: {mentoredBy}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleWorkshop;