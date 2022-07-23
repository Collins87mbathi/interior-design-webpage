import React from 'react'
import './Featured.css'
import { Link } from 'react-router-dom'

import House1 from '../../assets/house1.jpg'
import Bed1 from '../../assets/bed1.jpg'
import Bed2 from '../../assets/bed2.jpg'
import Kitchen from '../../assets/kitchen.jpg'
import Bathroom from '../../assets/bath1.jpg'

import House2 from '../../assets/house2.jpg'
import Bed3 from '../../assets/bed3.jpg'
import Bed4 from '../../assets/bed4.jpg'
import Bathroom2 from '../../assets/bath2.jpg'
import LivingRoom from '../../assets/living-room.jpg'

const Featured = () => {
    return (
        <div className='featured'>
            <h1 className='featured-text'>Top Featured Interior Designs</h1>
            <p className='featured-text'>Choose the best interior design for your house.</p>
            <div className='container'>
                <img className='span-3 image-grid-row-2' src={House1} alt='' />
                <img src={Bed1} alt='' />
                <img src={Bed2} alt='' />
                <img src={Kitchen} alt='' />
                <img src={Bathroom} alt='' />
                
                <div className='span-2 right-img-details'>
                    <p>One should never be the oldest thing in one's house.” “Every room needs a touch of black, just as it needs one antique piece </p>
                </div>
            </div>

        {/* Section section */}
        <div className='container'>
                <img className='order-2' src={Bed3} alt='' />
                <img className='order-3' src={Bed4} alt='' />

                <img className='span-3 image-grid-row-2 order-1' src={House2} alt='' />


                <img className='order-4' src={Bathroom2} alt='' />
                <img className='order-5' src={LivingRoom} alt='' />

                <div className='span-2 right-img-details order-7'>
                    <p>Luxury is when it seems flawless, when you reach the right balance between all elements. Understated theatricality – that is what my luxury is all about.
                        if you need our service to make your house beautiful please contact us below.
                    </p>
                    <button className='btn'><Link to={'/contact'}>Contact Us</Link></button>
                </div>



            </div>
        </div>
    )
}

export default Featured
