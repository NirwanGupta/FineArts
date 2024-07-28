import React from 'react';
import Carousel from './Carousel';
import './style.css'

const WhatWeDo = ({cards}) => {
    return (
      <div className="art">
        <div className="container">
          <div className="allies-title whatwedo-title">
            <h1 className="whatwedo-title">What We do</h1>
          </div>
          <Carousel cards={cards} />
        </div>
      </div>
    )
}

export default WhatWeDo;
