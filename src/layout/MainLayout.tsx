import React from 'react'
import NavBar from './navBar/NavBar'
import LeftLayout from './leftLayout/LeftLayout'
import RightLayout from './rightLayout/RightLayout'
import NavFooter from './navFooter/NavFooter'
import './MainLayout.scss'

const MainLayout = () => {
  return (
    <>
        <div className='main-container'>
        <div className='navBar-container'>
            <NavBar />
        </div>
            <div className='main-menu-container'>
                <LeftLayout />
            </div>
            <div className='bill-container'>
                <RightLayout />
            </div>
        <div className='footer-container'>
            <NavFooter/>
        </div>
    </div>
    </>
  )
}

export default MainLayout