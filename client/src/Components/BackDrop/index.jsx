import React from 'react'

import './Backdrop.css'
import Mapper from './Mapper'

export default function index() {
    return (
     
            <div className="cover">
                <section className="site-title" >
                    <div className="site-background"  >
                        <div className="amazing">
                            <h1 data-aos="fade-down" data-aos-delay="500" className='groupOfAmazingPeople'>A Group of Amazing Peoples</h1>
                        </div>
                        <div className="map">
                            <Mapper height={window.innerWidth} />
                        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#ffffff" fillOpacity="1"
                                d="M0,192L26.7,197.3C53.3,203,107,213,160,208C213.3,203,267,181,320,192C373.3,203,427,245,480,240C533.3,235,587,181,640,181.3C693.3,181,747,235,800,224C853.3,213,907,139,960,133.3C1013.3,128,1067,192,1120,208C1173.3,224,1227,192,1280,176C1333.3,160,1387,160,1413,160L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z">
                            </path>
                        </svg>
                        {/* <svg className="wave wave-inverted" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{rotate: '180deg'}}>
                            <path fill="#49a6e9" fillOpacity="1"
                                d="M0,192L26.7,197.3C53.3,203,107,213,160,208C213.3,203,267,181,320,192C373.3,203,427,245,480,240C533.3,235,587,181,640,181.3C693.3,181,747,235,800,224C853.3,213,907,139,960,133.3C1013.3,128,1067,192,1120,208C1173.3,224,1227,192,1280,176C1333.3,160,1387,160,1413,160L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z">
                            </path>
                        </svg> */}
                        </div>
                        
                    </div>

                </section>

            </div>

    )
}
