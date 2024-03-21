import React from 'react'
import "./style.css";
import travelImage from '../assest/imgs/travel-removebg-preview.png'
function SignUp() {
  return (
    <>
        <div className='signUp'>
            <div className="logo">
                <img src={travelImage} alt="" />
            </div>
                <label htmlFor="username">اسم المستخدم </label>
                <input type="text" name="username"/>
                <label htmlFor="email">الايميل</label>
                <input type="email" name="email"/>
                <label htmlFor="pass">الرمز السري</label>
                <input type="password" name="pass"/>
                <label htmlFor="Country">البلد</label>
                <input type="text" name="Country"/>
                <label htmlFor="city">المدينة</label>
                <input type="text" name="city"/>
                <label htmlFor="phone">رقم الهاتف</label>
                <input type="text" name="phone"/>
            <button>تسجيل الدخول</button>
        </div>
    </>
  )
}

export default SignUp