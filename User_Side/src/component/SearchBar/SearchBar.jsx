import React from 'react'
import './search-bar.css'
import { Button } from 'react-bootstrap'

const SearchBar = () => {
    return (
        <>
            <form action="#">
                <div className="form-input">
                    <input type="search" placeholder="Search..." />
                    <Button type="submit" className="search-btn">
                        <i className='bx bx-search' ></i>
                    </Button>
                </div>
            </form>
        </>
    )
}

export default SearchBar