import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../../components/HeaderAdmin'
import Addbtn from '../../components/Addbtn'
import { Pagination, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import AddFlight from './AddFlight'

const Flights = () => {

  const token = localStorage.getItem('token');
  const [flights , setFlights] = useState([])
  const [openAdd , setOpenAdd]  = useState(false);
  function openPopup (){
        setOpenAdd(true)
    }
  function closePopup (){
        setOpenAdd(false)
    }

  
  useEffect(()=>{
    const getTickets = ()=>{
      axios({
        method:'get',
        url:'http://localhost:8800/api/flights',
        headers:{authorization:token}
      })
      .then(res => {
        console.log(res.data)
        setFlights(res.data)
      }
      )
      .catch(err=>console.log('error =>' , err))
    }



    return ()=>{getTickets(); }
} , [])

const deleteFlights = (id)=>{
  axios({
    method:'delete',
    url:`http://localhost:8800/api/flights/${id}`,
    headers:{authorization:token}
  })
  .then(res => {
    console.log(res.data)
    window.location.reload()
  }
  )
  .catch(err=>console.log('error =>' , err))
}


  return (
    <div className='container-content'>
      <HeaderAdmin text={'الرحلات'} />
      <div className="tickets">
          <Addbtn text={'اضف رحلة جديده'} openPopup={openPopup} />
        <Table striped bordered hover className='thead-table'>
          <thead>
            <tr>
              <th>#</th>
              <th> اسم الرحلة</th>
              <th>  الخطوط</th>
              <th>الوقت</th>
              <th>من</th>
              <th>الى</th>
              <th>مسافه</th>
              <th>المركبة</th>
              <th>المقاعد الشاغرة</th>
              <th>المقاعد المتاحة</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {flights ? flights.map((item , i)=>(
              <tr>
                <td>{++i}</td>
                <td>{item.flightName}</td>
                <td>{item.airline}</td>
                <td>{item.date} || {item.time}</td>
                <td>{item.from}</td>
                <td>{item.to}</td>
                <td>{item.distance}</td>
                <td>{item.vehicle.name}</td>
                <td>{item.vehicle.seatsAvailable}</td>
                <td>{item.vehicle.seatsReserved}</td>
                <td colSpan={2}>
                  <div className="btns">
                    <button onClick={()=>deleteFlights(item._id)}><FontAwesomeIcon icon={faTrash}/></button>
                  </div>
                </td>
              </tr>
            )) : <h1>there is no data here</h1>}
          </tbody>
        </Table>
      </div>
            {openAdd ? <AddFlight closePopup={closePopup} /> : null}
    </div>
  )
}

export default Flights