import React from 'react'
import Navbar from '../components/navbar/Navbar'
import AnnouncementComponent from '../components/announcements/AnnouncementComponent'
import Footer from '../components/footer/Footer'

const announcementsPage = () => {
  return (
    <>
     <Navbar/>
     <AnnouncementComponent/> 
     <Footer/>
    </>
  )
}

export default announcementsPage
