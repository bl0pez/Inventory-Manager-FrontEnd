import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { dashboardRoutes } from './navigation'

import './sidebar.css';

export const Sidebar = () => {

  const [open, setOpen] = useState(true);

  return (
    <div className={
      'flex flex-col flex-shrink-0 relative bg-indigo-700 text-white transition-all duration-300 ease-in-out ' +
      (open ? 'sidebar-open w-64' : 'sidebar-close w-9')
    }>

        <div className=' bg-indigo-700 absolute left-96 top-0'>
          <button onClick={() => setOpen(!open)} className='p-3.5'>
          <i class={`fas text-lg ${open ? "fa-chevron-left" : "fa-chevron-right"}`}></i>
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 px-1 py-3">
            <i className="fas fa-boxes-alt"></i>
            <span className="text-neutral-100 text-lg">Inventory</span>
        </div>
        <div className="flex-1 py-1 flex flex-col gap-0">
          {
            // This is the sidebar menu
            dashboardRoutes.map((item) => (
              <NavLink 
                key={item.name} 
                className="flex items-center gap-2 font-light px-3 py-8 hover:bg-indigo-800  rounded-sm text-base"
                to={item.path}
                >
                <i className={`text-xl ${item.icon}`}></i>
                <span className="">{ item.name }</span>
              </NavLink>
            ))
          }
        </div>
        <button className="flex items-center gap-2 font-light px-3 py-8 hover:bg-red-500 text-red-600 rounded-sm text-base">
          <i class="fas fa-sign-out-alt text-xl"></i>
          <span className="text-base">Loagout</span>
        </button>
    </div>
  )
}
