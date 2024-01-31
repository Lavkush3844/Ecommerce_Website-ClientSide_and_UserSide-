import React from 'react'
import './home-page.css'
import MainTitle from '../../component/MainTitle/MainTitle'
import DashReport from '../../component/DashReport/DashReport'
import DashOrder from '../../component/DashOrder/DashOrder'
import DashChart from '../../component/DashChart/DashChart'
import DashTodo from '../../component/DashTodo/DashTodo'

const HomePage = () => {
  const title ={
    heading : "Dashboard",
    d_none : "d-none"
}
  return (
    <>
      <MainTitle title ={title}/>
      <DashReport />
      <DashChart />
      <div className="table-data">
        <DashOrder />
        <DashTodo />
      </div>
    </>
  )
}

export default HomePage