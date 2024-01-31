import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Logo from '../Logo/Logo';
import './header.css'
import SearchBar from '../SearchBar/SearchBar';
import NavMenu from '../NavMenu/NavMenu';
import { Button, Navbar } from 'react-bootstrap';
import AddToCart from '../AddToCart/CartBtn';
import { NavLink } from 'react-router-dom';


const Header = () => {


    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <header className={isFixed ? 'fix-header' : ''}>
                <Navbar expand="lg">
                    <Container>
                      
                            <Logo />
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <NavMenu />
                        <SearchBar />
                        {/* <Button type='button' className='head-btn'>
                            Contact Us
                        </Button>  */}
                        <NavLink to={'/shopCart'}>
                            <AddToCart/>
                        </NavLink>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}

export default Header