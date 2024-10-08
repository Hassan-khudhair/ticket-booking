import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../../components/HeaderAdmin'
import { Pagination, Table } from 'react-bootstrap'
import Addbtn from '../../components/Addbtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import   axios  from 'axios'
import AddTicket from './AddTicket'

const Ticket = () => {
  const token = localStorage.getItem('token')
  const [tickets , setTickets] = useState([])
  const [openAdd , setOpenAdd] = useState(false)
  function openPopup (){
    setOpenAdd(true)
  }
  function closePopup (){
    setOpenAdd(false)
  }


  useEffect(()=>{
      const getTickets =async  ()=>{
        await axios({
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

  

      return ()=>{getTickets(); }
  } , [])

  const deleteTicket = (id)=>{
    axios({
      method:'delete',
      url:`http://localhost:8800/api/tickets/${id}`,
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
      <HeaderAdmin text={'التذاكر'} />
      <div className="tickets">
          <Addbtn text={'اضف تذكره جديده'} openPopup={openPopup}/>
        <Table striped bordered hover className='thead-table'>
          <thead >
            <tr>
              <th>#</th>
              <th>التذكرة</th>
              <th> الرحلة</th>
              <th>النوع</th>
              <th>من</th>
              <th>الى</th>
              <th>المسافة</th>
              <th>السعر</th>
              <th>عدد الرحلات</th>
              <th>  رحلة العودة</th>
              <th>التأريخ والوقت  </th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            
            {tickets ? tickets.map((item , index) =>(
              <tr key={index}>
                <td>{++index }</td>
                <td>{item.name}</td>
                <td>{item.flight1.flightName}</td>
                <td>{item.type}</td>
                <td>{item.flight1.from}</td>
                <td>{item.flight1.to}</td>
                <td>{item.flight1.distance}</td>
                <td>{item.price} $</td>
                <td>{item.twoWay ? 'ذهاب وعودة' : 'ذهاب فقط'} </td>
                <td>{item.flight2 ? item.flight2.flightName : ' '} </td>
                <td>{item.flight1.date} | {item.flight1.time}</td>
                <td colSpan={2}>
                  <div className="btns">
                    <button onClick={()=>deleteTicket(item._id)}><FontAwesomeIcon icon={faTrash}/></button>
                  </div>
                </td>
              </tr>
            ) ) : <h1>no data here</h1> }
          </tbody>
        </Table>
      
      
      </div>
            {openAdd ? <AddTicket closePopup={closePopup} /> : null}
    </div>
  )
}

export default Ticket