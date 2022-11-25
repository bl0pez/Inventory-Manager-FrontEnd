import { NavLink } from "react-router-dom"
import { dashboardRoutes } from "./navigation"

export const Sidebar = () => {
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
        <div className="flex items-center justify-center gap-2 px-1 py-3">
            <i className="fas fa-boxes-alt"></i>
            <span className="text-neutral-100 text-lg">Inventory</span>
        </div>
        <div className="flex-1">
          {
            // This is the sidebar menu
            dashboardRoutes.map((item) => (
              <NavLink key={item.name} className="text-xl flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700  rounded-sm text-base">
                <i className={item.icon}></i>
                <span className="">{ item.name }</span>
              </NavLink>
            ))
          }
        </div>
        <div>Botton part</div>
    </div>
  )
}
