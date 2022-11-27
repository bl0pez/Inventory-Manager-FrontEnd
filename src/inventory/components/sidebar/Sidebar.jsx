import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { dashboardRoutes } from './navigation';

export const Sidebar = () => {

  const [open, setOpen] = useState(true);

  const widthOpen = open ? 'w-64' : 'w-16';
  const displayOpen = open ? 'block' : 'hidden';

  return (
    <aside
      className={
        `sidebar
        sidebar-transition
        ${widthOpen}
      `
      }
    >

      <div
        className={
          `sidebar-header
          sidebar-transition 
          ${widthOpen}
        `
        }
      >
        <h2
          className={
            `text-2xl font-bold
              sidebar-transition 
            ${displayOpen}
          `
          }

        >InventoryApp</h2>
        <button
          onClick={() => setOpen(!open)}
          className="w-12 h-12 bg-indigo-900 rounded-lg shadow-lg"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      <nav
        className='flex flex-col items-center mt-8 flex-1'
      >
        {
          dashboardRoutes.map((route, index) => (
            <NavLink
              key={index}
              to={route.path}
              className={
                `h-12 my-2 bg-indigo-900 rounded-lg
                overflow-hidden 
                shadow-lg flex
               items-center text-xl gap-4 px-4
               sidebar-transition 
               ${open ? 'justify-self-end w-52' : 'justify-center w-12'}`
              }
              style={({ isActive }) => isActive ? {
                backgroundColor: '#4F46E5'
              } : { backgroundColor: '' }}
            >
              <i className={`${route.icon}`}></i>
              <span
                className={
                  `text-sm font-bold
                  sidebar-transition 
                  ${displayOpen}
                `
                }
              >
                {route.name}
              </span>
            </NavLink>
          )
          )
        }
      </nav>

      <button
        className={
          `sidebar-icon__loagout
          sidebar-transition
           ${open ? 'justify-self-end w-52' : 'justify-center w-12'}`
        }
      >
        <i className="fas fa-sign-out-alt"></i>
        <span
          className={
            `text-sm font-bold
                  transition-all duration-500 ease-linear
                  ${displayOpen}
                  `
          }
        >
          Logout
        </span>
      </button>

    </aside>
  )
}
