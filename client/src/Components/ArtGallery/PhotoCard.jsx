import React from 'react'

export default function PhotoCard({data}) {
    return (
        <div className="box" data-aos="zoom-in" data-aos-delay="200"><img  src={data.img} alt="image1" /><span className="label" ></span></div>
    )
}
