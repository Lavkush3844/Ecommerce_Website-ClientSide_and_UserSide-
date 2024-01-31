import React from 'react';
import './shop-cart.css';
import { Container, Row } from 'react-bootstrap';
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { delItem, increement } from '../../service/action/addCart.action';


const ShopCart = () => {

    const { isCart } = useSelector((state) => state.cartReducer);

    const dispatch = useDispatch()

    const handleDelete = (product) => {
        dispatch(delItem(product))
    }

    const handleInc = (id) => {
        dispatch(increement(id));
        console.log(id,);
    };

    return (
        <>
            <section className="shopping-cart" >
                <Container className="py-5">
                    <Row className="justify-content-center align-items-center">
                        <div className="col-10">

                            {
                                isCart.map((product) => {
                                    return (
                                        <>
                                            <div className="card rounded-3 mb-4">
                                                <div className="card-body p-4">
                                                    <div className="row d-flex justify-content-between align-items-center">
                                                        <div className="col-md-2 col-lg-2 col-xl-2">
                                                            <img src={product.image} className="img-fluid rounded-3" alt="" />
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-3">
                                                            <p className="lead fw-normal mb-2">{product.pname}</p>
                                                            <span className="text-muted"> Rating: </span> {product.rating}
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex align-items-center">
                                                            <button className="btn btn-link px-3">
                                                                <i className='bx bx-minus'></i>
                                                            </button>
                                                            <input type="text" className='form-control' value="0" size="2" />
                                                            <button type='button' onClick={() => handleInc(product.id)} className="btn btn-link px-3">
                                                                <i className='bx bx-plus' ></i>
                                                            </button>
                                                        </div>
                                                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                            <h5 className="mb-0">₹{product.price}</h5>
                                                        </div>
                                                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                            <button type='button' onClick={() => handleDelete(product)} className='text-danger remvoe-btn'>
                                                                <MdDeleteForever />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                            <div className="card">
                                <div className="card-body">
                                    <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                                </div>
                            </div>

                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ShopCart