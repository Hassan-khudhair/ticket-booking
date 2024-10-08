import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faChain, faChair } from '@fortawesome/free-solid-svg-icons';



const Seats = () => {

    const [vehicle , setVehicle] = useState()
    const [seatNumber , setSeatNumber] = useState()
    const {id , vehicleId} = useParams()    

    const token = localStorage.getItem('token')
    const userid = localStorage.getItem('userId')




    const addReservation   = async   (id_vehicle) =>{
        
        seatNumber !== null && seatNumber !== '' && seatNumber !== undefined  && seatNumber !== NaN ? 
            await axios.all([axios({
                method:'POST',
                url:'http://localhost:8800/api/reservation',
                headers:{authorization:token},
                data:{
                    userId: userid,
                    ticketId: id ,
                    seats: seatNumber 
                }
                }) ,
                axios({
                method:'POST',
                url:`http://localhost:8800/api/vehicles/select-seat/${id_vehicle}`,
                headers:{authorization:token},
                data:{
                    seat_number: seatNumber
                }
                })])
                .then((res) => {
                    const responseOne = res[0]
                    const responseTwo = res[1]
                    console.log(res)
                    navigate('/flights')
                    }
                )
                .catch(err=>console.log('error =>' , err))
            : 
            
            console.log('Select a Seat')
            
    }
    

    console.log(seatNumber)


    useEffect(()=>{
        const getVehicels = async ()=>{
            await axios({
                method:'get',
                url:`http://localhost:8800/api/vehicles/${vehicleId}`,
                headers:{authorization:token},
                })
                .then(res => {
                    console.log(res)
                    setVehicle(res.data)
                    }
                )
                .catch(err=>console.log('error =>' , err))
        }
        return ()=> getVehicels();
    },[])

    const navigate = useNavigate()
    const navigateBack =()=>{
        navigate(-1);
    }

    function selectSeat(e,seatNumber){
        const allSeats = document.querySelectorAll('.seat');
        allSeats.forEach(seat => {
            seat.classList.remove('select');
        });
        const targetElement = e.target.tagName === 'SPAN' ? e.target : e.target.closest('span') ;
        targetElement.classList.add('select');
        setSeatNumber(seatNumber);
    }

    

  return (
    <>

    {
        vehicle  ? vehicle.map((item,i)=>(
            <div className='seats' key={i}>
                <p className='icon-back' onClick={navigateBack}><FontAwesomeIcon icon={faArrowRightLong}/></p>
                <div className='details'>
                    <p>المركبة <span>{item.name}</span></p>
                    <p>النوع  <span>{item.type}</span></p>
                    <p>سعة الركاب <span>{item.capacity}</span></p>
                    <p>المقاعد الشاغرة <span>{item.seatsReserved}</span></p>
                    <p>المقاعد المتاحة <span>{item.seatsAvailable}</span></p>
                </div>
                
                <div 
                    className={item.capacity <= 50 ? 'two-column' : 
                    item.capacity <= 100 && item.capacity > 50 ? 'four-column' : 'three-column' }>
                {
                    item.seats.map((seat,i)=>(
                            <span key={i} onClick={(e)=>selectSeat(  e , seat.seat_number)} className={ seat.available ? ' seat ' :'seat active' }>{seat.seat_number}<FontAwesomeIcon icon={faChair}/></span>
                        ))
                    }
                </div>
                <button onClick={()=>addReservation(item._id)}>حجز التذكرة وحفظ المتغيرات</button>
            </div>
            
        )) : 'ther is no data to retrun'
    }
        
        
    </>
  )
}

export default Seats



{/* <div className='three-column'>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
        </div>
        <div className='four-column'>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
            <span>12<FontAwesomeIcon icon={faChair}/></span>
        </div> */}