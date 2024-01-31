import React from 'react'
import './header.css'
import SearchBar from '../SearchBar/SearchBar'
import UserProfile from '../UserProfile/UserProfile'
import { Button } from 'react-bootstrap'
import { IoMdLogOut } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../services/action/login.action'


const Header = ({ click }) => {

    const { isLogin } = useSelector(state => state.loginReducer);

    const dispatch = useDispatch();
    const handleSwitchChange = (event) => {
        if (event.target.checked) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    };

    const handleLogout = () => {
        // console.log('logout');
        dispatch(userLogout());


    }

    return (
        <>
            <nav>
                <i className='bx bx-menu' onClick={click}></i>
                <a href="#" className="nav-link">Categories</a>
                <SearchBar />
                <input type="checkbox" id="switch-mode" onChange={handleSwitchChange} hidden />
                <label htmlFor="switch-mode" className="switch-mode"></label>
                {isLogin ?
                    <button type='button' onClick={handleLogout} className='logout-btn'>
                        <IoMdLogOut />
                    </button>
                    // <Button type='button'  onClick={handleLogout}>
                    //     <span className='log-out-circle'></span>
                    // </Button>
                    :
                    ''}
                <UserProfile />
            </nav>
        </>
    )
}

export default Header