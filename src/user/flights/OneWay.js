import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const OneWay = ({item}) => {

  return (
    <div className='single-ticket'>
        <h3> {item.flight1.airline}</h3>
        <div className='lines'>
            <span>{item.flight1.to}</span> 
            <p><FontAwesomeIcon className='plane' icon={faPlane} /> <span>{item.flight1.date} | {item.flight1.time} </span></p>
            <span>{item.flight1.from}</span>
        </div>
        <div className='price'>
            <span>{item.type}</span>
            <h3>{item.price} <span>$</span></h3>
            <p>للشخص</p>
        </div>
    </div>
  )
}

export default OneWay