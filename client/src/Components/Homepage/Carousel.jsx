import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Card from './Card';


export default function Carousel({cards}) {

    const responsive={
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3 
        }
    }

    return (

        <>
            <OwlCarousel  className='art-post' items={4} loop margin={10} /*autoplay*/

                nav
                dots
                navText={['<i class="fas fa-long-arrow-alt-left">', ' <i class="fas fa-long-arrow-alt-right"></i>'
                ]}
                
                navClass={['owl-prev', 'owl-next']}

                responsive={responsive}
                
                navContainerClass='owl-navigation'
                navElement='btn'

            >
                {cards.length>0?(

                    cards.map((card)=>{

                        return (<Card key={card._id}  data={card}/>)
                    })
                    
                    ):(
                        
                        <Card/>
                )}

            </OwlCarousel>

        </>

    )
}
