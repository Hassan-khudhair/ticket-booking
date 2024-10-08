import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../../components/HeaderAdmin'
import { Pagination, Table } from 'react-bootstrap'
import Addbtn from '../../components/Addbtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import AddReservation from './AddReservation'

const Reservation = () => {
  const token = localStorage.getItem('token');
  const [reservation , setReservation]  = useState([])
  const [openAdd , setOpenAdd]  = useState(false);
  function openPopup (){
        setOpenAdd(true)
    }
  function closePopup (){
        setOpenAdd(false)
    }

  
  useEffect(()=>{
    const getReservations = ()=>{
      axios({
        method:'get',
        url:'http://localhost:8800/api/reservation',
        headers:{authorization:token}
      })
      .then(res => {
        console.log(res.data)
        setReservation(res.data)
      }
      )
      .catch(err=>console.log('error =>' , err))
    }



    return ()=>{getReservations(); }
} , [])


const activeReservations = (id)=>{
  axios({
    method:'put',
    url:`http://localhost:8800/api/reservation/setactive/${id}`,
    headers:{authorization:token}
  })
  .then(res => {
    console.log(res.data)
    window.location.reload()
  }
  )
  .catch(err=>console.log('error =>' , err))
}

const deActiveReservations = (id)=>{
  axios({
    method:'put',
    url:`http://localhost:8800/api/reservation/deactive/${id}`,
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
      <HeaderAdmin text={'الحجوزات'} />
      <div className="tickets">
          <Addbtn text={'اضف حجز جديد'} openPopup={openPopup}/>
        <Table striped bordered hover className='thead-table'>
          <thead>
            <tr>
              <th>#</th>
              <th> أسم الشخص</th>
              <th>التذكرة</th>
              <th>الرحلة</th>
              <th>الخطوط </th>
              <th>من</th>
              <th>الى</th>
              <th>السعر</th>
              <th>تأريخ الحجز</th>
              <th> المقعد</th>
              <th> نوع المقعد</th>
              <th>رحلة عودة</th>
              <th>الحالة</th>
            </tr>
          </thead>
          <tbody>
            {
              reservation ? reservation.map((item, i) =>(
                <tr>
                  <td>{++i}</td>
                  <td> {item.user.username}</td>
                  <td>{item.ticket.map((item,i)=>(item.name))}</td>
                  <td>{item.ticket.map((item,i)=>(item.flight1.flightName))}</td>
                  <td>{item.ticket.map((item,i)=>(item.flight1.airline))}</td>
                  <td>{item.ticket.map((item,i)=>(item.flight1.from))}</td>
                  <td>{item.ticket.map((item,i)=>(item.flight1.to))}</td>
                  <td>{item.ticket.map((item,i)=>(item.price))}</td>
                  <td>{item.createdAt.split('T')[0]} | {item.createdAt.split('T')[1].split('.')[0]}</td>
                  <td>{item.seats}</td>
                  <td>{item.ticket.map((item,i)=>(item.type))}</td>
                  <td>{item.ticket.map((item,i)=>(item.flight2 ? item.flight2.flightName : 'ذهاب فقط'))}</td>
                  <td>
                    <button 
                    onClick={item.active ? ()=>deActiveReservations(item._id) : ()=>activeReservations(item._id)}
                    className={item.active? 'active-order'  : 'no-active-order'}> 
                      {item.active ? 'مفعل' : 'غير مفعل'}
                    </button> 
                  </td>
                  
                </tr>
              )) : <h1> there is no data here</h1>
            }
          </tbody>
        </Table>
      
      
      </div>
          {openAdd ? <AddReservation closePopup={closePopup} /> : null}
    </div>
  )
}

export default Reservation