import React from 'react'
import { NavLink } from 'react-router-dom';
import './nav-menu.css'


const NavMenu = () => {

    const allSideMenu = [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'About',
            path: '/about',

        },
        {
            title: 'Pages',
            path: '/pages',

        },
        {
            title: 'Contact',
            path: '/contact',

        },

    ];
    return (
        <>
            <div className='nav-menu'>
                {allSideMenu.map((menu,index) => (
                    <NavLink key={index} className={'text-decoration-none '} to={menu.path}>
                        <span className="text">{menu.title}</span>
                    </NavLink>
                ))}
            </div>
        </>
    )
}

export default NavMenu