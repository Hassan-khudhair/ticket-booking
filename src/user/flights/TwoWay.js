import { faPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const TwoWay = ({item}) => {
    
  return (
    <div className='single-ticket'>
        <div className='first-flight'>
            <h3>{item.flight1.airline} </h3>
            <div className='lines'>
                <span>{item.flight1.to}</span> 
                <p><FontAwesomeIcon className='plane' icon={faPlane} /> <span> {item.flight1.date} | {item.flight1.time} </span></p>
                <span>{item.flight1.from}</span>
            </div>
            <div className='price'>
                <span>{item.type}</span>
                <h3>{item.price} <span>$</span></h3>
                <p>للشخص</p>
            </div>
        </div>
        <div className='first-flight'>
            <h3> {item.flight2.airline}</h3>
            <div className='lines'>
                <span>{item.flight2.from}</span> 
                <p> <span> {item.flight2.date} | {item.flight2.time} </span><FontAwesomeIcon className='plane-back' icon={faPlane} /></p>
                <span>{item.flight2.to}</span>
            </div>
            <div className='price'>
                <span>{item.type}</span>
                <h3>{item.price} <span>$</span></h3>
                <p>للشخص</p>
            </div>
        </div>
    </div>
  )
}

export default TwoWay