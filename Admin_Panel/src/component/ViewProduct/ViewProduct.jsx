import Table from 'react-bootstrap/Table';
import { Button, Col, Container, Form } from 'react-bootstrap';
import './view-product.css'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { deleteData, getData, singleData } from '../../services/action/products.action';
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";


function ViewProduct() {
    const { products } = useSelector(state => state.ProductsReducer);
    const [productInput, setProductInput] = useState(products);
    const [search, setSearch] = useState('');

    const history = useLocation();

    const { key } = history;
    console.log("hi", history.state);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleEdit = async (id) => {
        await dispatch(singleData(id));
        navigate('updateProduct')
    };

    const handleDelete = (id) => {
        dispatch(deleteData(id));
    }

    const get = () => {
        dispatch(getData());
    }
    // if (history.state == true) {
    //     window.location.reload(false);
    // }
    useEffect(() => {
        get();


        console.log("hello", productInput);
    }, [productInput]);

    // useEffect(() =>{
    //     if(history.state !== null){
    //         window.location.reload(false);
    //     }

    // }, [])




    const handleChange = (e) => {
        let value = e.target.value;
        setSearch(value);
    }

    const handleSearch = () => {
        let searchData = products.filter((pro) => {
            return pro.pname.toLowerCase().indexOf(search.toLowerCase()) > -1;
        })
        console.log("SearchData", searchData);
        setProductInput(searchData);
    }


    return (

        <div className='view-table mt-3'>
            <Form className='col-3 p-0 mb-3 d-flex'>
                <Form.Control type="text" name='search' value={search} onChange={handleChange} />
                <Button type='button' onClick={handleSearch} className='ms-3'>
                    Search
                </Button>
            </Form>

            <Table bordered hover className='text-center'>
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        {/* <th>Description</th> */}
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {productInput.map((product, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><img src={product.image} alt="" className='product-img' /></td>
                            <td>{product.pname}</td>
                            <td>${product.price}</td>
                            <td>{product.category}</td>
                            {/* <td>{product.description}</td> */}
                            <td>{product.rating}</td>
                            <td>
                                <Button onClick={() => handleEdit(product.id)} className='edit-btn me-2'>
                                    <MdEdit />
                                </Button>
                                ||
                                <Button onClick={() => handleDelete(product.id)} className='delete-btn ms-2'>
                                    <MdDelete />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}


export default ViewProduct;
