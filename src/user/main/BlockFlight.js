import {  faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import flightImage from './../../assest/imgs/peutiful-image-removebg-preview.png'
import { Link } from 'react-router-dom'

const BlockFlight = () => {
  return (
    <div className='block-flight'>
        <div className='head-flight-block'>
            <p>الرحلات</p>
            <Link to={'/flights'}>
                <button>كل الرحلات <FontAwesomeIcon icon={faArrowLeft} /></button>
            </Link>
                
        </div>
        <div className='flights'>
            <div className='single-flight'>
                <img src={flightImage} alt=''/>
                <div className='single-content'>
                    <h3>تركيا</h3>
                    <p>IST</p>
                    <div className='price-fromTo'>
                        <p>رحلات ذهاب وعودة</p>
                        <h3>210 <span>$</span></h3>
                    </div>
                </div>
                
            </div>
            <div className='single-flight'>
                <img src={flightImage} alt=''/>
                <div className='single-content'>
                    <h3>الأمارات</h3>
                    <p>DUB</p>
                    <div className='price-fromTo'>
                        <p>رحلات ذهاب وعودة</p>
                        <h3>430 <span>$</span></h3>
                    </div>
                </div>
                
            </div>
            <div className='single-flight'>
                <img src={flightImage} alt=''/>
                <div className='single-content'>
                    <h3>ايران</h3>
                    <p>TUH</p>
                    <div className='price-fromTo'>
                        <p>رحلات ذهاب وعودة</p>
                        <h3>140 <span>$</span></h3>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default BlockFlight