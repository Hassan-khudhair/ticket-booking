import React, { useState } from 'react'
import HeaderAdmin from '../components/HeaderAdmin'
import FlyBagh from './../assest/imgs/flaybaghdad-removebg-preview.png'
import FlyIraq from './../assest/imgs/iraqairways-removebg-preview.png'
import { useFetch } from '../hook/useFetch'
import CountData from './CountData'

const Main = () => {
  const [countReservation , setCountReservation ] = useState(null)

  
  const {data , loading , error} = useFetch('http://localhost:8800/api/reservation');
  const getReservationfalse = () =>{
    let countReservationsFalse=0 ;
    if(data){
    countReservationsFalse = data.filter((item)=> item.active === false).length
  }
  return countReservationsFalse
  }
  


  return (
    <div className='container-content'>
      <HeaderAdmin text={'Admin Dashbord'} />
      <div className="counts-tabel">
        <div className="card-counts">
          <p>التذاكر</p>
          <CountData route={'tickets'}/>
        </div>
        <div className="card-counts">
          <p>الرحلات</p>
          <CountData route={'flights'}/>
        </div>
        <div className="card-counts">
          <p>الحجوزات</p>
          <CountData route={'reservation'}/>
        </div>
        <div className="card-counts">
          <p>المركبات</p>
          <CountData route={'vehicles'}/>
        </div>
        <div className="card-counts">
          <p>طلبات الحجز</p>
          <p>{getReservationfalse()}</p>
        </div>
        <div className="card-counts">
          <p> المستخدمين</p>
          <CountData route={'users'}/>
        </div>
        
      </div>

      <hr />
      <div className="company">
        <img src={FlyBagh} alt="" />
        <img src={FlyIraq} alt="" />
      </div>
    </div>
  )
}

export default Main