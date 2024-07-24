import React from 'react'

export default function PostContent({data}) {
    return (
        <>
            <div className="post-content" data-aos="fade-down-right" data-aos-delay="100">
                <div className="post-image">
                    <div>
                        <img className="img" src={data.imglink} alt="" />
                    </div>
                    <div className="post-info flex-row">
                        <span><i className="fas fa-user text-gray"></i> &nbsp;&nbsp;{data.author} &nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;{data.title}</span>
                        <span>FineArts
                                </span>
                    </div>
                </div>
                <div className="post-title">
                    <a href="photogallery.html#gal">{data.title}</a>
                    <p>{data.desc}

                                </p>
                    <button className="btn post-btn" >show related&nbsp; <i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
            <hr/>
            
        </>
    )
}
