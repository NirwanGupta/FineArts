import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import './photo.css'
import PhotoCard from './PhotoCard'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom'
export default function ArtGallery() {

    const [wall, setWall] = useState([]);
    const [back, setBack] = useState([]);
    const [artg, setArtg] = useState([]);
    const [loading, setLoading] = useState(true);

    const FetchData = async () => {

        try {
            const res = await axios.get('/api/artwork');
            if (res.data) {
                
                const res1 = res.data.filter((d) => d.category === "wall");
                const res2 = res.data.filter((d) => d.category === "Art");
                const res3 = res.data.filter((d) => d.category === "Back");
                
                setWall(res1);
                setArtg(res2);
                setBack(res3);

            }

            setLoading(false);

        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {

        FetchData();
        Aos.init({ duration: 1000 });

    }, []);

    if (loading) {
        return <Loader />
    }

    return (
        <Base title="artGallery">
            <header>
                <h1>Art Gallery</h1>
                <p>finearts</p>
            </header>
        
            <main>
                {/* <a name=" wall "></a> */}
                <h1 className="title">Wall Paintings</h1>
                <div className="imgcont" >

                    {wall.map((data)=><PhotoCard key={data._id} data={data}/>)}

                </div>
                {/* <a name="back"></a> */}

                <h1 className="title">backdrop</h1>
                <div className="imgcont"  >
                    {back.map((data) => <PhotoCard key={data._id}  data={data} />)}
                    
                </div>
                {/* <a name="gal"></a> */}
                <h1 className="title">Art Gallery</h1>

                <div className="imgcont" >
                    {artg.map((data) => <PhotoCard key={data._id}  data={data} />)}
                   
                </div>

                <div className="container" style={{margin:'30px auto'}}>
                    
                    <Link to="/artwork/new"><button className="btn">Post your Artwork</button></Link>
                    
                </div>

            </main>

        </Base>
    )
}
