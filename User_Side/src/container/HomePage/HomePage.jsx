import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../service/action/products.action';
import './home-page.css';
import { addItem } from '../../service/action/addCart.action';


const HomePage = () => {
  const { products } = useSelector((state) => state.ProductsReducer);
  const [data , setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);


  const addProduct = (product) => {
    setData(product);
    dispatch(addItem(product));
  }


  return (
    <>
      <section style={{ marginTop: "100px" }} className='all-products'>
        <Container>
          <Row className='row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center '>

            {
              products.map((product) => {
                return (
                  <div className="col buy-products mb-5">
                    <div className="card border-none h-100">
                      <a href="#" className='product-img mb-3'>
                        <img src={product.image} alt="" className='img-fluid rounded-3' />
                      </a>
                      <div className="text-center mb-3">
                        <h5 className="fw-bolder">{product.pname}</h5>
                        <p className='mb-2'>Rating {product.rating}</p>
                        <div className="price d-flex justify-content-center">
                          <h3 className='fs-5 m-0 pe-2'>Price</h3>
                          <span>₹{product.price}</span>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="text-center">
                          <Button type='button' className='add-btn' onClick={() => addProduct(product)}>
                            Add to cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </Row>
        </Container>
      </section>
    </>
  );
}

export default HomePage;
