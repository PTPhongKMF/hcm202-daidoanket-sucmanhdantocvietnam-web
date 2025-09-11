import React from 'react'
import { Outlet } from 'react-router';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <NavBar />

      <main className='size-full'>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
