import { Route, Routes } from "react-router"
import Header from "./component/Header/Header"
import HomePage from "./container/HomePage/HomePage"
import ShopCart from "./component/ShopCart/ShopCart"
import { useState } from "react"

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shopCart" element={<ShopCart />} />
      </Routes>
    </>
  )
}

export default App
