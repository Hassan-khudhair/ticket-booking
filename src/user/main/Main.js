import React from 'react'
import Header from '../../components/Header'
import BlockBooking from './BlockBooking'
import './../user.css'
import BlockFlight from './BlockFlight'
import Airlines from './Airlines'
import Navbar from '../../components/Navbar'
const MainUser = () => {
  return (
    <div>
        <Header />
        <div className='main-content'>
            <BlockBooking />
            <BlockFlight />
            <Airlines />
        <Navbar />
        </div>
    </div>
  )
}

export default MainUser