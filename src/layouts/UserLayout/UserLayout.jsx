import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import HeaderUser from './Header'
import FooterUser from './Footer'

const UserLayout = () => {
  return (
    <div>
    <HeaderUser/>
      <Outlet/>
      <FooterUser/>
    </div>
  )
}

export default UserLayout
