import React from 'react'
import HeaderAdmin from '../components/HeaderAdmin'
import FlyBagh from './../assest/imgs/flaybaghdad-removebg-preview.png'
import FlyIraq from './../assest/imgs/iraqairways-removebg-preview.png'

const Main = () => {
  return (
    <div className='container-content'>
      <HeaderAdmin text={'Admin Dashbord'} />
      <div className="counts-tabel">
        <div className="card-counts">
          <p>التذاكر</p>
          <p>20</p>
        </div>
        <div className="card-counts">
          <p>الرحلات</p>
          <p>20</p>
        </div>
        <div className="card-counts">
          <p>الحجوزات</p>
          <p>15</p>
        </div>
        <div className="card-counts">
          <p>المركبات</p>
          <p>6</p>
        </div>
        <div className="card-counts">
          <p>طلبات الحجز</p>
          <p>4</p>
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