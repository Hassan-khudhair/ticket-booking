import { faArrowLeft, faArrowRight, faArrowRightLong, faClock, faPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Seats from './Seats'

const TicketBooking = () => {
    const [ticket , setTicket] = useState([])
    
    
    const {id} = useParams();

    const token = localStorage.getItem('token')
    useEffect(()=>{
        const getTickets = () =>{
            axios({
                method:'get',
                url:`http://localhost:8800/api/tickets/${id}`,
                headers:{authorization:token}
              })
              .then(res => {
                console.log(res.data)
                setTicket(res.data)
              }
              )
              .catch(err=>console.log('error =>' , err))
            }
            return ()=> getTickets();
    },[])

    const navigate = useNavigate()

    const navigateBack =()=>{
        navigate(-1);
    }


  return (
    <div className='reservations'>
        <p className='icon-back' onClick={navigateBack}><FontAwesomeIcon icon={faArrowRightLong}/></p>
        {
            ticket ? ticket.map((item,i)=>(
                < >
                    <div className='details-ticket' >
                        <p>{item.name}</p>
                        <p>{item.type}</p>
                        <p>{item.toWay ? 'ذهاب وعودة' : 'ذهاب فقط'}</p>
                        <p>
                            {item.flight1 && item.flight2 && item.price*2} 
                            {item.flight1 && !item.flight2 && item.price} $
                            </p>
                        
                    </div>
                    <div className='details-flight'  >
                        <span>{item.flight1.airline}</span>
                        <span>{item.flight1.flightName}</span>
                        <span>{item.flight1.from} <FontAwesomeIcon icon={faPlane} className='icon-flight'  />{item.flight1.to}</span>
                        <span>{item.flight1.date} <FontAwesomeIcon icon={faClock} className='icon-flight'  />{item.flight1.time}</span>
                        <span>{item.flight1.distance}</span>
                    </div>
                    {
                        item.flight2 && 
                        <div className='details-flight' >
                            <span>{item.flight2.airline}</span>
                            <span>{item.flight2.flightName}</span>
                            <span>{item.flight2.from} <FontAwesomeIcon icon={faPlane} className='icon-flight' />{item.flight2.to}</span>
                            <span>{item.flight2.date} <FontAwesomeIcon icon={faClock} className='icon-flight'  />{item.flight2.time}</span>
                            <span>{item.flight2.distance}</span>
                        </div>
                    }

                    {
                        <button>
                            <Link to={`/flights/ticket-booking/${item._id}/seats/${item.flight1.vehicleId}`}>اكمال الحجز</Link>
                        </button>
                    }
                    
                </>
            )) : <h1>there is no data here</h1>
        }
        
    </div>
  )
}

export default TicketBooking