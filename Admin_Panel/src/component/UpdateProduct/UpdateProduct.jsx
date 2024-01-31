import React from 'react'
import { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { updateData } from '../../services/action/products.action';

const UpdateProduct = () => {

    const { product, isLoading } = useSelector(state => state.ProductsReducer);
    const [productInput, setProductInput] = useState(product);

    const navigate = useNavigate();

    const dispatch = useDispatch();


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setProductInput({ ...productInput, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(updateData(productInput.id, productInput));
        navigate('/store');
    };


    return (
        <>
            <h2 className='mb-5'>Update Product</h2>
            <Form className='add-product' onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col>
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product Name" name='pname' value={productInput.pname} onChange={handleChange} />
                    </Col>
                    <Col>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter Price" name='price' value={productInput.price} onChange={handleChange} />
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
                    {(isLoading) ? "loading" : "Update"}
                </Button>
            </Form>
        </>
    )
}

export default UpdateProduct