import React from 'react'

const Addbtn = ({text , openPopup}) => {
  return (
    <>
        <button className='btn btn-success' onClick={openPopup}>{text}</button>
    </>
  )
}

export default Addbtn