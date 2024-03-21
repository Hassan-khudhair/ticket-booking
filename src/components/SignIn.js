import React from 'react';
import "./style.css";
import travelImage from '../assest/imgs/travel-removebg-preview.png';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <>
        <div className='signIn'>
          <div className="logo">
            <img src={travelImage} alt="" />
          </div>
            <label htmlFor="username">اسم المستخدم </label>
            <input type="text" name="username"/>
            <label htmlFor="pass">الرمز</label>
            <input type="password" name="pass"/>
            <button>تسجيل الدخول</button>
            <div className="context">
              انشاء <Link to="/sign-up">حساب جديد </Link>  
            </div>

        </div>
    </>
  )
}

export default SignIn