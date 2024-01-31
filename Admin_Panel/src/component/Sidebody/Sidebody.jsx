import React from 'react'
import './side-body.css'
import Header from '../Header/Header'
import HomePage from '../../container/HomePage/HomePage'
import { Route, Routes } from 'react-router'
import StorePage from '../../container/StorePage/StorePage'
import AddProduct from '../AddProduct/AddProduct'
import UpdateProduct from '../UpdateProduct/UpdateProduct'
import Login from '../../container/Login/Login'


const SideBody = ({ click }) => {

  return (
    <>
      <section id='content'>
        <Header click={click} />
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/store' element={<StorePage />} />
            <Route path='store/addProduct' element={<AddProduct />} />
            <Route path='store/updateProduct' element={<UpdateProduct />} />
          </Routes>
        </main>
      </section>
    </>
  )
}

export default SideBody