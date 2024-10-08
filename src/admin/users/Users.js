import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../../components/HeaderAdmin'
import { Pagination, Table } from 'react-bootstrap'
import Addbtn from '../../components/Addbtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import AddUser from './AddUser'
import './../admin.css'

const Users = () => {
  const token = localStorage.getItem('token');
  const [users , setUsers]  = useState([]);
  const [openAdd , setOpenAdd]  = useState(false);

  
  useEffect(()=>{
    const getUsers = async ()=>{
      await axios({
        method:'get',
        url:'http://localhost:8800/api/users',
        headers:{authorization:token}
      })
      .then(res => {
        console.log(res.data)
        setUsers(res.data)
      }
      )
      .catch(err=>console.log('error =>' , err))
    }



    return ()=>{getUsers(); }
} , [])




    function openPopup (){
        setOpenAdd(true)
    }
    function closePopup (){
        setOpenAdd(false)
    }

    return (
        <div className='container-content'>
        <HeaderAdmin text={'المستخدمين'} />
        <div className="tickets">
            <Addbtn text={'اضف مسؤول جديد'}  openPopup={openPopup} />
            <Table striped bordered hover className='thead-table'>
            <thead>
                <tr>
                <th>#</th>
                <th>اسم المستخدم</th>
                <th>الايميل</th>
                <th>الهاتف</th>
                <th>الاقامة</th>
                <th>الحالة</th>
                </tr>
            </thead>
            <tbody>
                {
                users ? users.map((item, i)=>(
                    <tr key={i}>
                        <td>{++i}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.country} || {item.city}</td>
                        <td>{item.isAdmin ? 'مسؤول' : 'مستخدم'}</td>
                    </tr>
                )) : <h1>no data here</h1>
                }
                
            </tbody>
            </Table>
        
        
        </div>
                {openAdd ? <AddUser closePopup={closePopup} /> : null}
        </div>
    )
}

export default Users