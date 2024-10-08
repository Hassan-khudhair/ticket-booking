import React, { useEffect, useState } from 'react'
import "./style.css";
import travelImage from '../assest/imgs/travel-removebg-preview.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function SignUp() {

  const navigate = useNavigate()

  const [username , setUsername] = useState();
  const [password , setPasswrod] = useState();
  const [email , setEmail ]= useState()
  const [country , setCountry ]= useState()
  const [city , setCity ]= useState()
  const [phone , setPhone ]= useState()

  const signUp = () =>{
    axios({
      method:'POST',
      url:'http://localhost:8800/api/auth/register',
      headers:{},
      data:{username , password , email , country , city , phone }
    })
    .then(res => {
      console.log(res)
      navigate('/sign-in')
    }
    )
    .catch(err=>console.log(err))
  }



  return (
    <>
        <div className='signUp'>
            <div className="logo">
                <img src={travelImage} alt="" />
            </div>
                <label htmlFor="username">اسم المستخدم </label>
                <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)}/>
                <label htmlFor="email">الايميل</label>
                <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="pass">الرمز السري</label>
                <input type="password" name="pass" onChange={(e)=>setPasswrod(e.target.value)}/>
                <label htmlFor="Country">البلد</label>
                <input type="text" name="Country" onChange={(e)=>setCountry(e.target.value)}/>
                <label htmlFor="city">المدينة</label>
                <input type="text" name="city" onChange={(e)=>setCity(e.target.value)}/>
                <label htmlFor="phone">رقم الهاتف</label>
                <input type="text" name="phone" onChange={(e)=>setPhone(e.target.value)}/>
            <button onClick={signUp}>تسجيل الدخول</button>
        </div>
    </>
  )
}

export default SignUp