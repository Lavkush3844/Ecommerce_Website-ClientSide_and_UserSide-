import React from 'react';
import './cart-btn.css'
import { useSelector } from 'react-redux';



const CartBtn = () => {

    const { isCart } = useSelector((state) => state.cartReducer);

    return (
        <>
            <div className="add-cart ">
                <button className="btn btn-outline-dark" type="submit">
                    <i className='bx bxs-cart'></i>
                    Cart
                    <span className="badge text-white ms-1 rounded-pill">{isCart.length}</span>
                </button>
            </div>
        </>
    )
}

export default CartBtn