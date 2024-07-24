import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({data}) {
    return (
        <div className="art-content" /*data-aos="fade-right" data-aos-delay="300"*/>
            <img src={data.imglink} alt="post1" />
            <div className="art-title">
                <h3>
                    {data.title}
                    </h3>
                <Link className="button btn-art" to="/">
                    see more
                </Link>
                <span>{data.desc}</span>

            </div>
        </div>
    )
}
