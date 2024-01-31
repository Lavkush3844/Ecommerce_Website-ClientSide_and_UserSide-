import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './nav-menu.css';

const NavMenu = () => {
    const allSideMenu = [
        {
            title: 'Dashboard',
            path: '/',
            icon: 'bx bxs-dashboard',
        },
        {
            title: 'Store',
            path: '/store',
            icon: 'bx bxs-shopping-bag-alt'

        },
        {
            title: 'Analytics',
            path: '/analytics',
            icon: 'bx bxs-doughnut-chart'

        },
        {
            title: 'Message',
            path: '/message',
            icon: 'bx bxs-doughnut-chart'

        },

        {
            title: 'Team',
            path: '/team',
            icon: 'bx bxs-group'

        },

    ];

    return (
        <div className='side-menu top'>
            {allSideMenu.map((item) => (
                <NavLink className={'text-decoration-none side-nav mb-4'} to={item.path}>
                    <i className={`${item.icon}`}></i>  
                    <span className="text">{item.title}</span>
                </NavLink>
            ))}
        </div>
    );
};

export default NavMenu;
