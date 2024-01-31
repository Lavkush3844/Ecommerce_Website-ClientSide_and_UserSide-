import React from 'react'
import './main-title.css'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const MainTitle = ({title}) => {
    
    const navigate = useNavigate();

    const handleHome = () =>{
        navigate('/');
    }

    const handleAddProduct =()=>{
      navigate('addProduct');
    }
    return (
        <>
            <div className="head-title">
                <div className="left">
                    <h1>{title.heading}</h1>
                    <ul className="breadcrumb">
                        <li>
                            <a href="#">{title.heading}</a>
                        </li>
                        <li><i className='bx bx-chevron-right' ></i></li>
                        <li>
                         <Button type='button' onClick={handleHome} className='homeBtn px-0'>
                            home
                         </Button>
                        </li>
                    </ul>
                </div>
                <Button type='button' className={title.d_none} onClick={handleAddProduct}>
                    Add Product
                </Button>
            </div>
        </>
    )
}

export default MainTitle;