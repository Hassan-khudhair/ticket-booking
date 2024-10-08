import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';


const AddFlight = ({closePopup}) => {
    const [flightName , setFlightName] = useState()
    const [airline , setAirline] = useState()
    const [date , setDate] = useState()
    const [time , setTime] = useState()
    const [from , setFrom] = useState()
    const [to , setTo] = useState()
    const [distance , setDistance] = useState()
    const [vehicles , setVehicles] = useState([])
    const [vehicleId , setVehicleId] = useState()

    const token = localStorage.getItem('token')




    const addAdmin   =   () =>{
        
        axios({
            method:'POST',
            url:'http://localhost:8800/api/flights',
            headers:{authorization:token},
            data:{
                flightName: flightName,
                airline: airline,
                date: date,
                time: time,
                from: from,
                to: to,
                distance: distance,
                vehicleId: vehicleId,
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
        const getVehicles = ()=>{
            axios({
                method:'get',
                url:'http://localhost:8800/api/vehicles',
                headers:{authorization:token},
                
                })
                .then(res => {
                    console.log(res)
                    setVehicles(res.data)
                    }
                )
                .catch(err=>console.log('error =>' , err))
        }
        return ()=>{getVehicles()}
    },[])

  return (
    <div className='popup'> 
        <div className='content-inside'>
        <button onClick={closePopup}><FontAwesomeIcon icon={faClose}/></button>
            <div className='head-add-content'>
                <h3>أضف رحلة جديدة</h3>
            </div>
                <div>
                    <label>اسم الرحلة</label>
                    <input type='text' onChange={(e)=>setFlightName(e.target.value)} />
                </div>
                <div>
                    <label>اسم الخطوط</label>
                    <input type='text' onChange={(e)=>setAirline(e.target.value)} />
                </div>
                
                <div>
                    <label>تأريخ الرحله </label>
                    <input type='text'  onChange={(e)=>setDate(e.target.value)} />
                </div>
                
                <div>
                    <label> الوقت</label>
                    <input type='text'  onChange={(e)=>setTime(e.target.value)} />
                </div>
                <div>
                    <label> من</label>
                    <input type='text'  onChange={(e)=>setFrom(e.target.value)} />
                </div>
                <div>
                    <label> الى</label>
                    <input type='text'  onChange={(e)=>setTo(e.target.value)} />
                </div>
                <div>
                    <label> المسافه</label>
                    <input type='text'  onChange={(e)=>setDistance(e.target.value)} />
                </div>

                <div>
                    <label>نوع المركبه  </label>
                    <select  onChange={(e)=>setVehicleId(e.target.value)} >
                    <option>اختر من المركبات</option>
                        {
                        vehicles.length ? vehicles.map((item,i)=><option value={item._id}>{item.name}</option>) 
                        : <option>there is no vehicles to choose it</option>}
                    </select>
                </div>

                

                <div>
                    <button className='btn btn-primary' onClick={(e)=>addAdmin(e)}>save</button>
                </div>

        </div>
        
    </div>
  )
}

export default AddFlight