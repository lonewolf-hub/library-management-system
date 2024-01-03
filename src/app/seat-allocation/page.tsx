import React from 'react'
import SeatAllocation from '../components/seat-allocation/SeatAllocation'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const seatPage = () => {
  return (
    <>
    <Navbar/>
     <SeatAllocation/> 
     <Footer/>
    </>
  )
}

export default seatPage
