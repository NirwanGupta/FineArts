import React from 'react'
import Base from './Base'

import image from '../../images/logo.png'
export default function Error() {
    return (
        <Base>
        <center>
                <div className="container">
                    <img src={image} alt="" width="20%" />
                </div>
                <h1>Error 404</h1>
                <h1>Page not found</h1>
        </center>
        
        </Base>

    )
}
