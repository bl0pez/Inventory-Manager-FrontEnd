import { Outlet } from 'react-router-dom';
import { NavBar } from '../components';

export const Layout = () => {
  return (
    <div className='md:container mx-auto md:py-6'>
    
    <NavBar />

    <Outlet />
    </div>
  )
}
