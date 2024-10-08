import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';



const AddReservation = ({closePopup}) => {
    const [userId , setUserId] = useState()
    const [ticketId , setTicketId] = useState()
    const [seats , setSeats] = useState()
    const [vehicles , setVehicles] = useState()
    const [users, setUsers] = useState([])
    const [tickets, setTickets] = useState([])

    const token = localStorage.getItem('token')




    const addAdmin   = async   () =>{
        
        await axios({
            method:'POST',
            url:'http://localhost:8800/api/reservation',
            headers:{authorization:token},
            data:{
                userId: userId,
                ticketId: ticketId,
                seats: seats,
            }
            })
            .then(res => {
                console.log(res)
                window.location.reload()
                }
            )
            .catch(err=>console.log('error =>' , err))
    }

    useEffect(()=>{
        const getUsers   =    () =>{
        
            axios({
                method:'get',
                url:'http://localhost:8800/api/users',
                headers:{authorization:token},
                })
                .then(res => {
                    console.log(res)
                    setUsers(res.data)
                    }
                )
                .catch(err=>console.log('error =>' , err))
        }

        const getTickets   =   () =>{
        
            axios({
                method:'get',
                url:'http://localhost:8800/api/tickets',
                headers:{authorization:token},
                })
                .then(res => {
                    console.log(res)
                    setTickets(res.data)
                    }
                )
                .catch(err=>console.log('error =>' , err))
        }

        
        return ()=> { getTickets() ; getUsers()}
    
    
    },[])




  return (
    <div className='popup'> 
        <div className='content-inside'>
        <button onClick={closePopup}><FontAwesomeIcon icon={faClose}/></button>
            <div className='head-add-content'>
                <h3>اضف حجز جديد</h3>
            </div>
            
                    <div>
                        <label>اسم المستخدم</label>
                        <select onChange={(e)=>setUserId(e.target.value)} >
                            <option>اختر مستخدم</option>
                            {
                                users ? users.map((item , i)=>(
                                    <option key={i} value={item._id}>{item.username}</option>
                                )) : <option>no users to select from them</option>
                            }
                        </select>
                    </div>
                    
                    <div>
                        <label>الذكرة </label>
                        <select onChange={(e)=>setTicketId(e.target.value)} >
                            <option>اختر تذكرة</option>
                            {
                                tickets ? tickets.map((item , i)=>(
                                    <option key={i} value={item._id}>{item.name}</option>
                                )) : <option>no users to select from them</option>
                            }
                        </select>
                    </div>
                    
                    <div>
                        <label> رقم الكرسي</label>
                        <input type='text' onChange={(e)=>setSeats(e.target.value)}/>
                    </div>

                <div>
                    <button className='btn btn-primary' onClick={(e)=>addAdmin(e)}>save</button>
                </div>

        </div>
    </div>
  )
}

export default AddReservation