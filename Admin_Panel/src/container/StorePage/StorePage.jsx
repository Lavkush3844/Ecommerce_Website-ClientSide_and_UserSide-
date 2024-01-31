import React from 'react'
import ViewProduct from '../../component/ViewProduct/ViewProduct'
import MainTitle from '../../component/MainTitle/MainTitle'

const StorePage = () => {
    const title ={
        heading : "Store",
        btn_name:"Add Product"
    }
    return (
        <>
            <MainTitle title={title}/>
            <ViewProduct/>
        </>
    )
}

export default StorePage