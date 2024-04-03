import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Chart from './Chart'
const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='pt-36'>
      <Chart></Chart>
      </div>
    </div>
  )
}

export default page
