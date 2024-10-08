import React, { useEffect, useInsertionEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';


const AddVehicles = ({closePopup}) => {
    const [name , setName] = useState()
    const [capacity , setCapacity] = useState()
    const [type , setType] = useState()

    const token = localStorage.getItem('token')

    const addVehicle   =  async  () =>{
        
        await axios({
            method:'POST',
            url:`http://localhost:8800/api/vehicles`,
            headers:{authorization:token},
            data:{
                name , capacity , type 
            }
            })
            .then(res => {
                console.log(res)
                window.location.reload()
                }
            )
            .catch(err=>console.log('error =>' , err))
    }




  return (
    <div className='popup'> 
        <div className='content-inside'>
        <button onClick={closePopup}><FontAwesomeIcon icon={faClose}/></button>
            <div className='head-add-content'>
                <h3>أضف مركبة جديده</h3>
            </div>
            
                <div>
                <label>أسم المركبه </label>
                <input type='text'  onChange={(e)=>setName(e.target.value)} />
                </div>

                <div>
                <label> النوع</label>
                <input type='text'  onChange={(e)=>setType(e.target.value)} />
                </div>

                <div>
                <label>العدد  </label>
                <input type='text'  onChange={(e)=>setCapacity(e.target.value)} />
                </div>
            <div>
                <button className='btn btn-primary' onClick={(e)=>addVehicle(e)}>save</button>
            </div>

        </div>
    </div>
  )
}

export default AddVehicles