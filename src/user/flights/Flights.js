import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import './../user.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import OneWay from './OneWay'
import TwoWay from './TwoWay'
import axios from 'axios'
import { Link } from 'react-router-dom'

const FlightsUser = () => {
    const [allTickets , setAllTickets]= useState(true);
    const [oneWay , setOneWay]= useState(false);
    const [twoWay , setTwoWay]= useState(false);
    const [tickets , setTickets]=useState([])

    const handleAlltickets = () =>{
        setAllTickets(true)
        setOneWay(false);
        setTwoWay(false)
    }
    const handleOneWay = () =>{
        setAllTickets(false)
        setOneWay(true);
        setTwoWay(false)
    }
    const handleTwoWay = () =>{
        setAllTickets(false)
        setOneWay(false);
        setTwoWay(true)
    }



    const token = localStorage.getItem('token')
    useEffect(()=>{
        const getTickets = () =>{
            axios({
                method:'get',
                url:'http://localhost:8800/api/tickets',
                headers:{authorization:token}
              })
              .then(res => {
                console.log(res.data)
                setTickets(res.data)
              }
              )
              .catch(err=>console.log('error =>' , err))
            }
            return ()=> getTickets();
    },[])
  return (
    <>
    <Header />
    <div className='tickets-main'>
        <div className='flight-types'>
            <button className={allTickets ? 'btn-active':null} onClick={handleAlltickets}> كل التذاكر</button>
            <button className={oneWay ? 'btn-active':null} onClick={handleOneWay} >ذهاب فقط</button>
            <button className={twoWay ? 'btn-active':null} onClick={handleTwoWay}>ذهاب وعودة</button>
        </div>
        <div className='tickets'>
            {
                allTickets ? 
                tickets  ? tickets.map((item, i)=>(
                    <Link to={`/flights/ticket-booking/${item._id}`} key={i} >
                        {item.flight1 && item.flight2 ? 
                            <TwoWay item={item} />  :  <OneWay item={item} /> 
                    }
                    </Link> 
            )) : <h1>لا توجد بيانات في هذا القسم</h1>


                : oneWay ? tickets  ? 
                tickets.map((item, i)=>(
                    <Link to={`/flights/ticket-booking/${item._id}`}  key={i} >
                        {item.flight1 && !item.flight2 && <OneWay key={i} item={item} />}
                    </Link>
                )) : <h1>لا توجد بيانات في هذا القسم</h1>

                : twoWay ? tickets  ? 
                tickets.map((item, i)=>(
                    <Link to={`/flights/ticket-booking/${item._id}`}  key={i} >
                        {item.flight1 && item.flight2 && <TwoWay key={i} item={item} />}
                    </Link>
                )) : <h1>لا توجد بيانات في هذا القسم</h1> : null
            }
            
        </div>
    </div>
    </>
      
  )
}

export default FlightsUser