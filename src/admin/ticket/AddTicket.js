import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';


const AddTicket = ({closePopup}) => {
    const [ticketName , setTicketName] = useState()
    const [type , setType] = useState()
    
    const [price , setPrice] = useState()
    const [flightId1 , setFlightId1] = useState()
    const [flightId2 , setFlightId2] = useState(null)
    const [flights , setFlights] = useState([])
    const [twoWay , setTwoWay] = useState(false)
    const token = localStorage.getItem('token')




    const addTick   =  async  () =>{
        
        await axios({
            method:'POST',
            url:'http://localhost:8800/api/tickets',
            headers:{authorization:token},
            data:{
                name: ticketName,
                type: type,
                twoWay:twoWay,
                price:price,  
                flightId1:flightId1,
                flightId2:flightId2,
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
        const getFlights = ()=>{
            axios({
                method:'get',
                url:'http://localhost:8800/api/flights',
                headers:{authorization:token},
                
                })
                .then(res => {
                    console.log(res)
                    setFlights(res.data)
                    }
                )
                .catch(err=>console.log('error =>' , err))
        }
        return ()=>{getFlights()}
    },[])

    console.log(twoWay)

  return (
    <div className='popup'> 
        <div className='content-inside'>
            <button onClick={closePopup}><FontAwesomeIcon icon={faClose}/></button>
            <div className='head-add-content'>
                <h3>أضف رحلة جديدة</h3>
            </div>
                <div>
                    <label>اسم التذكرة</label>
                    <input type='text' onChange={(e)=>setTicketName(e.target.value)} />
                </div>
                
                <div>
                    <label> النوع </label>
                    <select onChange={(e)=>setType(e.target.value)} >
                        <option >اختر رحلة</option>
                        <option value='equnomy'>اقتصادي</option>
                        <option value='busniess'>رجال اعمال</option>
                    </select>
                </div>
                <div>
                    <label> وجهة واحدة ؟ </label>
                    <select onChange={(e)=>setTwoWay(e.target.value)} >
                        <option > أختر مسار الرحلة</option>
                        <option value={false}>ذهاب فقط</option>
                        <option value={true}>ذهاب واياب </option>
                    </select>
                </div>
                <div>
                    <label> السعر</label>
                    <input type='text'  onChange={(e)=>setPrice(e.target.value)} />
                </div>
                <div>
                    <label>أختر رحلة الذهاب  </label>
                    <select  onChange={(e)=>setFlightId1(e.target.value)} >
                        <option>أختر رحلة</option>
                        {
                        flights.length ? flights.map((item,i)=><option value={item._id}>{item.flightName}</option>) 
                        : <option>there is no vehicles to choose it</option>}
                    </select>
                </div>
                {
                    twoWay === 'true' ?  
                    <div>
                        <label>أختر رحلة العودة  </label>
                        <select  onChange={(e)=>setFlightId2(e.target.value)} >
                        <option>أختر رحلة</option>
                            {
                            flights.length ? flights.map((item,i)=><option value={item._id}>{item.flightName}</option>) 
                            : <option>there is no vehicles to choose it</option>}
                        </select>
                    </div> : null
                }
               

                

                <div>
                    <button className='btn btn-primary' onClick={(e)=>addTick(e)}>save</button>
                </div>

        </div>
        
    </div>
  )
}

export default AddTicket