import React, { Suspense } from 'react'
import Header from '../components/Header'
import { Await, Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function Layout() {
  return (
    <>
        <Header />

        <Outlet />

        <Footer />
    </>
  )
}

export default Layout