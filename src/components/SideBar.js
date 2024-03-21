import React from 'react'
import Dashbord from './Dashbord'
import { Outlet } from 'react-router-dom'

const SideBar = () => {
  return (
    <>
        <Dashbord />
        <Outlet />
    </>
  )
}

export default SideBar