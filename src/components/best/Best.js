import React from 'react'

import Apt1 from '../../assets/Apt1.jpg'
import Apt2 from '../../assets/Ap2.jpg'
import Apt3 from '../../assets/Apt3.jpg'

import './Best.css'

const Best = () => {
    return (
        <div className='best'>
            <h1>Find Best Interior Designs</h1>
            
            <div className='container'>
                <img src={Apt1} alt='' />
                <img src={Apt2} alt='' />
                <img src={Apt3} alt='' />
            </div>
           
        </div>
    )
}

export default Best
