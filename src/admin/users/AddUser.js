import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';


const AddUser = ({closePopup}) => {
    const [username , setUsername] = useState()
    const [password , setPasswrod] = useState()
    const [email , setEmail] = useState()
    const [phonenumber , setPhonenumber] = useState()
    const [country , setCountry] = useState()
    const [city , setCity] = useState()
    const token = localStorage.getItem('token')




    const addAdmin   =   async () =>{
        
        await axios({
            method:'POST',
            url:'http://localhost:8800/api/auth/register',
            headers:{authorization:token},
            data:{
                username: username,
                email: email,
                country: country,
                city: city,
                phone: phonenumber,
                password:password,
                isAdmin:true
            }
            })
            .then(res => {
                console.log(res)
                window.location.reload()
                }
            )
            .catch(err=>console.log('error =>' , err))
    }




  return (
    <div className='popup'> 
        <div className='content-inside'>
        <button onClick={closePopup}><FontAwesomeIcon icon={faClose}/></button>
            <div className='head-add-content'>
                <h3>add new admin</h3>
            </div>
                <div>
                    <label>اسم المستخدم</label>
                    <input type='text' onChange={(e)=>setUsername(e.target.value)} />
                </div>
                
                <div>
                    <label>الايميل </label>
                    <input type='email'  onChange={(e)=>setEmail(e.target.value)} />
                </div>
                
                <div>
                    <label> الرمز</label>
                    <input type='password'  onChange={(e)=>setPasswrod(e.target.value)} />
                </div>

                <div>
                    <label>رقم الهاتف </label>
                    <input type='phone'  onChange={(e)=>setPhonenumber(e.target.value)} />
                </div>

                <div>
                    <label>البلد </label>
                    <input type='text'  onChange={(e)=>setCountry(e.target.value)} />
                </div>            
                
                <div>
                    <label>المدينه </label>
                    <input type='text' onChange={(e)=>setCity(e.target.value)}  />
                </div>

                <div>
                    <button className='btn btn-primary' onClick={(e)=>addAdmin(e)}>save</button>
                </div>

        </div>
    </div>
  )
}

export default AddUser