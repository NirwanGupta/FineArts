import React from 'react'
import { Link } from 'react-router-dom'

export default function EventList({data}) {
    return (

        <li className="list-items" data-aos="flip-left" data-aos-delay="300" >
            <Link to="/">{data.title}  </Link>
            <span>({data.popularity})</span>
        </li>
    )
}
