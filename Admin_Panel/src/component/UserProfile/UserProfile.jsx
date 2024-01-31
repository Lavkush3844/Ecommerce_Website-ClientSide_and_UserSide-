import React from 'react'
import './user-profile.css'
import people from '../../assets/people.png'

const UserProfile = () => {
    return (
        <>
            <a href="#" className="notification">
                <i className='bx bxs-bell' ></i>
                <span className="num">8</span>
            </a>
            <a href="#" className="profile">
                <img src={people} />
            </a>
        </>
    )
}

export default UserProfile;