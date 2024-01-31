import React from 'react'
import './logo.css'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <>
      <NavLink className={'logo'}>
        <i className='bx bxs-smile'></i>
        <span className="text">AdminHub</span>
      </NavLink>
    </>
  )
}

export default Logo