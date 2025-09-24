import { Outlet } from 'react-router';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <NavBar />

      <main className='h-full max-w-[100svw] bg-gray-50 overflow-x-hidden'>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
