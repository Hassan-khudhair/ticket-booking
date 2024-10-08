import React from 'react'
import travelImage from '../assest/imgs/travel-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faCar, faClipboardList, faFlag, faHome, faMoneyBillWave, faSignOut, faTicket, faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'

const Dashbord = () => {

  const navigate = useNavigate()
  const logOutAdmin=()=>{
    localStorage.clear();
    navigate('/sign-in');
  }
  return (
    <>
        <div className='sidebare'>
            <Link to="/dashbord"><img src={travelImage} alt="" /></Link>
            <ul>
                <li><FontAwesomeIcon icon={faHome} className='icon-list-dashbord ' /><Link to="/dashbord" className='active'>الرئيسية</Link></li>
                <li><FontAwesomeIcon icon={faTicket} className='icon-list-dashbord' /><Link to="/dashbord/ticket">التذاكر</Link></li>
                <li><FontAwesomeIcon icon={faFlag} className='icon-list-dashbord' /><Link to="/dashbord/flights">الرحلات</Link></li>
                <li><FontAwesomeIcon icon={faClipboardList} className='icon-list-dashbord' /><Link to="/dashbord/reservation">الحجوزات</Link></li>
                <li><FontAwesomeIcon icon={faCar} className='icon-list-dashbord' /><Link to="/dashbord/vehicles">المركبات المتوفرة</Link></li>
                <li><FontAwesomeIcon icon={faUsers} className='icon-list-dashbord' /><Link to="/dashbord/users">المستخدمين</Link></li>
                <li className='log-out-admin' onClick={logOutAdmin}>
                  <FontAwesomeIcon icon={faSignOut} className='icon-list-dashbord-log-out' />
                  تسجيل خروج
                  </li>
            </ul>
        </div>
    </>
  )
}

export default Dashbord