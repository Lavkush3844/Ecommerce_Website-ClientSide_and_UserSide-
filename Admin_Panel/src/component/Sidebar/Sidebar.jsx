import React from 'react'
import './sidebar.css'
import Logo from '../Logo/Logo'
import NavMenu from '../NavMenu/NavMenu'

const SiderBar = ({ open }) => {

    return (
        <>
            <section id="sidebar" className={open ? 'hide' : ''}>
                <Logo />
                <NavMenu />
            </section>
        </>
    )
}

export default SiderBar