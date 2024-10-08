import React from 'react'
import emirate from './../../assest/imgs/EK.png'
import jordan from './../../assest/imgs/RJ.png'
import turkey from './../../assest/imgs/TK.png'
import qatar from './../../assest/imgs/QR.png'
import egypt from './../../assest/imgs/MS.png'
import pigasus from './../../assest/imgs/PC.png'
import airarabia from './../../assest/imgs/FZ.png'
import dubai from './../../assest/imgs/G9.png'

const Airlines = () => {
  return (
    <div className='airlines'>
        <p>الخطوط الجوية الشهيرة في العراق</p>
        <div className='airlines-content'>
            <div className='image'>
                <img src={emirate} alt='' />
            </div>
            <div className='image'>
            <img src={egypt} alt='' />
            </div>
            <div className='image'>
                <img src={jordan} alt='' />
            </div>
            <div className='image'>
                <img src={turkey} alt='' />
            </div>
            <div className='image'>
                <img src={qatar} alt='' />
            </div>
            <div className='image'>
                <img src={pigasus} alt='' />
            </div>
            <div className='image'>
                <img src={airarabia} alt='' />
            </div>
            <div className='image'>
                <img src={dubai} alt='' />
            </div>
            

            
        </div>
    </div>
  )
}

export default Airlines