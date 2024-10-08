import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import travelImage from '../assest/imgs/travel-removebg-preview.png'


const Header = () => {

    const location = useLocation();
    const navigate = useNavigate()
    const home = location.pathname === '/main'  ? "active " : "";
    const flights = location.pathname === '/flights'  ? "active " : "";

    const logOut=()=>{
        localStorage.clear();
        navigate('/');
    }
    
  return (
    <div className="head">
        <div className="logo">
            <Link to="/"><img src={travelImage} alt="" /></Link>
        </div>
        <div className="list-navbar">
        <ul>
            <li><Link to="/main" className={home}>الرئيسيه</Link></li>
            <li><Link to="/flights" className={flights}>الرحلات</Link></li>
            <li><Link to="/main">من نحن</Link></li>
            <li onClick={logOut}><Link to="" className='active'> تسجيل الخروج</Link></li>
        </ul>
        </div>
    </div>
  )
}

export default Header