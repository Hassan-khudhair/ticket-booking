import React from 'react'
import { Link } from 'react-router-dom'

const BlockBooking = () => {
  return (
    <div className='search-block'>
        <div className='flight-types'>
            <button>ذهاب فقط</button>
            <button>ذهاب وعودة</button>
        </div>
        <div className='flight-search'>
            <form>
                <input type='text' placeholder='من'/>
                <input type='text' placeholder='الى'/>
                <input type='text' placeholder='المغادرة'/>
            </form>
            <Link to={'/flights'}>
                <button>search</button>
            </Link>
            
        </div>
    </div>
  )
}

export default BlockBooking