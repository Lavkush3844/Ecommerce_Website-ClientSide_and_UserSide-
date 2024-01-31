import React from 'react'
import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import './add-product.css'
import { useDispatch, useSelector } from 'react-redux';
import { adminData } from '../../services/action/products.action';
import { useNavigate } from 'react-router';

const AddProduct = () => {

    const { isLoading } = useSelector(state => state.ProductsReducer);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [productInput, setProductInput] = useState({
        pname: '',
        price: '',
        image : '',
        category: '',
        description: '',
        rating: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setProductInput({ ...productInput, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(adminData(productInput));
        navigate('/store');
        // console.log("products", productInput);
    }
    return (
        <>
            <Form className='add-product' onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col>
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product Name" name='pname' value={productInput.pname} onChange={handleChange} />
                    </Col>


                    <Col>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter Price" name='price' value={productInput.price} onChange={handleChange} />
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col>
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control type="text" placeholder="Enter Image Link" name='image' value={productInput.image} onChange={handleChange} />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" placeholder="Enter category" name='category' value={productInput.category} onChange={handleChange} />
                    </Col>

                    <Col>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="text" placeholder="Rating" name='rating' value={productInput.rating} onChange={handleChange} />
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" placeholder="description" name='description' value={productInput.description} onChange={handleChange} style={{ height: '100px' }} />
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    {(isLoading) ? "loading" : "Submit"}
                </Button>
            </Form>
        </>
    )
}

export default AddProduct;