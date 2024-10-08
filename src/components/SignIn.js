import React, { useEffect, useState } from 'react';
import "./style.css";
import travelImage from '../assest/imgs/travel-removebg-preview.png';
import { Link , Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';


function SignIn() {
  const [username , setUsername] = useState();
  const [password , setPasswrod] = useState();
  const navigate = useNavigate()
  const [user ,setUser] = useState();

  const login = () =>{
    axios({
      method:'POST',
      url:'http://localhost:8800/api/auth/login',
      headers:{},
      data:{username , password}
    })
    .then(res => {
      console.log(res)
      localStorage.setItem('isAdmin',res.data.isAdmin)
      localStorage.setItem('token',res.data.details.token)
      localStorage.setItem('userId',res.data.details._id)
      setUser(res.data)
      if(res.data.isAdmin){
        navigate('/dashbord')
      }else{
        navigate('/main')
      }
      }
    )
    .catch(err=>console.log(err))
  }

  

  return (
    <>
        <div className='signIn'>
          <div className="logo">
            <img src={travelImage} alt="" />
          </div>
            <label htmlFor="username">اسم المستخدم </label>
            <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)}/>
            <label htmlFor="pass">الرمز</label>
            <input type="password" name="pass" onChange={(e)=>setPasswrod(e.target.value)}/>
            <button onClick={login}>تسجيل الدخول</button>
            <div className="context">
              انشاء <Link to="/sign-up">حساب جديد </Link>  
            </div>

        </div>
    </>
  )
}

export default SignIn