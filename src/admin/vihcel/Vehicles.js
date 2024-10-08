import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../../components/HeaderAdmin'
import { Pagination, Table } from 'react-bootstrap'
import Addbtn from '../../components/Addbtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import AddVehicles from './AddVehicles'

const Vehicles = () => {
  const token = localStorage.getItem('token');
  const [vehicles , setVehicles]  = useState([]);
  const [openAdd , setOpenAdd]  = useState(false);
  function openPopup (){
        setOpenAdd(true)
    }
  function closePopup (){
        setOpenAdd(false)
    }

  
  useEffect(()=>{
    const getVehicles = async ()=>{
      await axios({
        method:'get',
        url:'http://localhost:8800/api/vehicles',
        headers:{authorization:token}
      })
      .then(res => {
        console.log(res.data)
        setVehicles(res.data)
      }
      )
      .catch(err=>console.log('error =>' , err))
    }



    return ()=>{getVehicles(); }
} , [])


const deleteVehicle = (id)=>{
  axios({
    method:'delete',
    url:`http://localhost:8800/api/vehicles/${id}`,
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
      <HeaderAdmin text={'المركبات'} />
      <div className="tickets">
          <Addbtn text={'اضف مركبة جديده'} openPopup={openPopup} />
        <Table striped bordered hover className='thead-table'>
          <thead>
            <tr>
              <th>#</th>
              <th> اسم المركبة</th>
              <th>النوع</th>
              <th>العدد</th>
              <th>المقاعد الشاغرة</th>
              <th>المقاعد المتاحة</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            {
              vehicles ? vehicles.map((item, i)=>(
                <tr key={i}>
                  <td>{++i}</td>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.capacity}</td>
                  <td>{item.seatsReserved}</td>
                  <td>{item.seatsAvailable}</td>
                  <td colSpan={2}>
                    <div className="btns">
                      <button onClick={()=>deleteVehicle(item._id)}><FontAwesomeIcon icon={faTrash}/></button>
                    </div>
                  </td>
                </tr>
              )) : <h1>no data here</h1>
            }
            
          </tbody>
        </Table>
      
      
      </div>

            {
              openAdd ? <AddVehicles closePopup={closePopup} /> : null
            }
    </div>
  )
}

export default Vehicles