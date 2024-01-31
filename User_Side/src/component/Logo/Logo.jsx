import React from 'react'
import './logo.css'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <>
      <NavLink to={'/'} className={'text-decoration-none logo'}>
        <span className="text"><i className='bx fs-4 bxs-smile'></i>AdminHub</span>
      </NavLink>
    </>
  )
}

export default Logo