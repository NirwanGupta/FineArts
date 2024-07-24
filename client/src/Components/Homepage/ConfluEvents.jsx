import React from 'react'
import { Link } from 'react-router-dom'

export default function ConfluEvents({data}) {
    return (
        <div className="post-content" >
            <div className="post-image" data-aos="fade-down-left" data-aos-delay="100">
                <div>
                    <img className="img" src={data.img} alt="" />
                </div>

            </div>
            <div className="post-title">
                <Link to="/">{data.title}</Link>

            </div>
        </div>
    )
}
