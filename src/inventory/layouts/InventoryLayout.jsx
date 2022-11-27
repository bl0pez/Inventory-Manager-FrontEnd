import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components';

export const InventoryLayout = () => {
  return (
    <div className='flex flex-row h-screen overflow-hidden'>

      <Sidebar />

      < Outlet />

    </div>
  )
}
