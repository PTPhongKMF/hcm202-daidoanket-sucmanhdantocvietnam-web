import { Outlet } from 'react-router';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <NavBar />

      <main className='size-full bg-amber-50'>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
