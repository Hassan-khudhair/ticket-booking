import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <p>Copy right <FontAwesomeIcon icon={faCopyright}/> for 2024</p>
    </div>
  )
}

export default Navbar